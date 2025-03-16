import { FastifyInstance } from "fastify";
import { SuccessResponse } from "handlers/success/SuccessResponse";
import z from "zod";

export async function admin(fastify: FastifyInstance) {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["Admin"],
        response: {
          200: z.object({
            ok: z.boolean(),
            data: z.string(),
          }),
        },
      },
    },
    (request, reply) => {
      const data = "Template API 1.0.0";
      const response = new SuccessResponse({ data });

      return reply.send(response);
    }
  );
}
