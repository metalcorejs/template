// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR } from "../utils/constants";

// Modules
import * as modules from "../modules";

// Env
const env = process.env.NODE_ENV;

// Common Config
export default () =>
  merge(
    {
      entry: { main: [SRC_DIR] },
      resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx"],
      },
    },
    modules.setHtml(),
    modules.loadStyles(env),
    modules.transpileJs()
  );
