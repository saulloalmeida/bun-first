import figlet from 'figlet';
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = figlet.textSync("I am learning Bun");
    return new Response(body)
  }
})

console.log(`listening on PORT http://localhost:${server.port}`);
