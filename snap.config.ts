import type { SnapConfig } from "@metamask/snaps-cli";
import { resolve } from "path";
import * as dotenv from "dotenv";

dotenv.config({ silent: true });

const config: SnapConfig = {
  bundler: "webpack",
  input: resolve(__dirname, "src/index.ts"),
  server: {
    port: 8080,
  },
  polyfills: {
    buffer: true,
  },
  environment: {
    API_KEY: process.env.API_KEY || "",
  },
};

export default config;
