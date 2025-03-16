import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";

import { env } from "../env";

import data from "../../package.json";

import { admin } from "./routes/admin.routes";

export const app = fastify();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors);
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

app.register(admin);
