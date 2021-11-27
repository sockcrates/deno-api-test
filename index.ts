import { config } from "https://deno.land/x/dotenv/mod.ts";

import App from "./app/index.ts";

const { SERVER_PORT } = config();
const server = App({ port: Number(SERVER_PORT) });

await server;
