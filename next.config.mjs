import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do NOT remove — without this the Vercel build crashes with
  // `TypeError: The "path" argument must be of type string`
  outputFileTracingRoot: __dirname,

  // The paid course PDFs live outside `public/` so they are never served
  // statically. They are read with fs at request time, so the tracer has to be
  // told to bundle them into these two functions' output.
  outputFileTracingIncludes: {
    "/api/download": ["./private/downloads/**/*"],
    "/downloads/\\[file\\]": ["./private/downloads/**/*"],
  },
};

export default nextConfig;
