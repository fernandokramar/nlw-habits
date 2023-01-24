import Fastify from "fastify";
import Cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

// app.register(Cors, {
//   origin: ["http://localhost:3000", "http://localhost:5173", "exp://192.168.100.128:19000"],
// });

app.register(Cors)

app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running!🗿🍷");
  });
