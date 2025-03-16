import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "../api/swagger.json",
    output: {
      clean: true,
      client: "react-query",
      target: "./src/http/generated/api.ts",
      mode: "tags-split",
      override: {
        mutator: {
          path: "./src/libs/axios.ts",
        },
      },
    },
  },
});
