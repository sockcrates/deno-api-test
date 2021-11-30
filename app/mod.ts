import { Application } from "../deps.ts";

/**
 * Defines parameters for controlling the HTTP REST API.
 */
interface Options {
  /**
   * Requests will be received here; responses will be sent from here.
   */
  port: number;
}

/**
 * An HTTP REST API.
 * @param options @see Options
 * @returns ```Promise<void>```
 */
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
