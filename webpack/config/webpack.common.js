// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR } from "../utils/constants";

// Modules
import * as modules from "../modules";

// Common Config
export default () =>
  merge(
    {
      entry: { main: [SRC_DIR] },
    },
    modules.setHtml()
  );
