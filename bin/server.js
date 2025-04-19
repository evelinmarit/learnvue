const messages = [];
const clients = new Set();

const cors = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET,POST",
        "Access-Control-Allow-Headers": "Content-Type"
    },
};

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };

  function sendSSEMessage(controller, data) {
    controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
  }

Bun.serve({
    port: 3001,
    idleTimeout: 0,
    // `routes` requires Bun v1.2.3+
    routes: {       
      // Per-HTTP method handlers
      "/messages": {
        OPTIONS: () => {
            return new Response('', cors)
        },
        GET: async(req) => {
            return Response.json(messages, cors)
        },
        POST: async req => {
          const body = await req.json();
          messages.push({time: new Date(), message: body.message});
          return Response.json(body, cors);
        },
      }, 
      "/messages/sse": {
        GET: async(req) => {
          let lastDate = new Date();
          let filtered = [];
          const { signal } = req;
          return new Response(
            new ReadableStream({
              start(controller) {
                const interval = setInterval(() => {
                  filtered = messages.filter(message => message.time > lastDate);
                  lastDate = new Date();
                  sendSSEMessage(controller, filtered);
                }, 1000);

                signal.onabort = () => {
                  clearInterval(interval);
                  controller.close();
                };
              }
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                ...cors.headers
              }
            }
          );
        },
      },
      "/ws": (req, server) => {
        if (server.upgrade(req)) {
          return; // do not return a Response
        }
        return new Response("Upgrade failed", { status: 500 });
      },      
    },
    websocket: {
      message(ws, message) {
        clients. forEach(client => {
          client.send(message);
        });
      },
      open: ws => clients.add(ws),
      close: ws => clients.delete(ws),
    },
    // (optional) fallback for unmatched routes:
    // Required if Bun's version < 1.2.3
    fetch(req) {
      return new Response("Not Found", { status: 404 });
    },
  });