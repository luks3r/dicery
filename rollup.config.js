import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
  input: "src/index.ts",
  output: [
    {
      name: pkg.name,
      file: pkg.main,
      format: "umd",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [resolve(), commonjs(), typescript(), terser()],
};

export default config;
