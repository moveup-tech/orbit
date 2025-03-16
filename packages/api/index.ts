import path from "node:path";
import { writeFile } from "node:fs/promises";

import mongoose from "mongoose";

import { env } from "./src/env";
import { app } from "http/server";

mongoose
  .connect(env.MONGODB_URL)
  .then(() => console.log("Mongo is running📦"))
  .catch((e) => console.log(e.message));

app
  .listen({ port: env.APP_PORT, host: "0.0.0.0" })
  .then(() => {
    console.log(`Server listining on port ${env.APP_PORT}🔥`);
  })
  .catch((e) => {
    console.log(e.message);
  });

app.ready().then(() => {
  const spec = app.swagger();

  writeFile(path.resolve(__dirname, "swagger.json"), JSON.stringify(spec));
});
