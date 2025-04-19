const messages = [];

const cors = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET,POST",
        "Access-Control-Allow-Headers": "Content-Type"
    },
};

Bun.serve({
    port: 3001,
    // `routes` requires Bun v1.2.3+
    routes: {       
      // Per-HTTP method handlers
      "/messages": {
        OPTIONS: () => {
            return new Response('', cors)
        },
        GET: (req) => {
            let query = new URL(req.url).searchParams;
            let filtered = messages.filter(message => message.time > new Date(query.get('date')))
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