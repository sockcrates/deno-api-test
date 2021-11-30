import { config } from "./deps.ts";
import App from "./app/mod.ts";

const { SERVER_PORT } = config();
const port = Number(SERVER_PORT);
if (!Number.isInteger(port)) throw new Error(`invalid port number "${SERVER_PORT}" provided`);

const server = App({ port });

await server;
