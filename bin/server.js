const messages = [];

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
            const query = new URL(req.url).searchParams;
            let filtered;
            do {
                await delay(1000);
                filtered = messages.filter(message => message.time > new Date(query.get('date')))
            } while(filtered.length === 0 && messages.length !== 0); 
            
            return Response.json(filtered, cors)
        },
        POST: async req => {
          const body = await req.json();
          messages.push({time: new Date(), message: body.message});
          return Response.json(body, cors);
        },
      },      
    },
  
    // (optional) fallback for unmatched routes:
    // Required if Bun's version < 1.2.3
    fetch(req) {
      return new Response("Not Found", { status: 404 });
    },
  });