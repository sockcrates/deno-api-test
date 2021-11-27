import { Application } from "https://deno.land/x/oak/mod.ts";

interface Options {
  port: number;
}

function App(options: Options): Promise<void> {
  const app = new Application();
  
  app.use((ctx) => {
    ctx.response.status = 200;
    ctx.response.body = 'Hello, world!';
  });
  
  const { port } = options;

  return app.listen({ port });
}

export default App;
