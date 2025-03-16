import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifyWebsocket from "@fastify/websocket";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";

import { env } from "../env";

import data from "../../package.json";

import { admin } from "./routes/admin.routes";
import { processesRoutes } from "./routes/processes.routes";
import { ws } from "ws";

export const app = fastify();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors);
app.register(fastifyWebsocket);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: env.APP_NAME,
      version: data.version,
      contact: {
        name: "Moveup Tecnologia LTDA",
        url: "https://moveuptecnologia.com.br",
        email: "suporte@moveuptecnologia.com.br",
      },
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(ws);
app.register(admin);
app.register(processesRoutes);
