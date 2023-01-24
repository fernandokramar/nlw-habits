import Fastify from "fastify";
import Cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(Cors, {
  origin: ["http://localhost:3000"],
});

app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running!🗿🍷");
  });
