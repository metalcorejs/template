// Core
import { merge } from "webpack-merge";

// Constants
import { DIST_DIR } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Dev Config
export default () =>
  merge(getCommonConfig(), {
    mode: "development",
    devtool: "eval-source-map",
    output: {
      filename: "bundle.[name].js",
      path: DIST_DIR,
    },
  });
