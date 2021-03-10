// Core
import { merge } from "webpack-merge";

// Constants
import { BUILD_DIR } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Prod Config
export default () =>
  merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
    output: {
      filename: "bundle.[contenthash].js",
      path: BUILD_DIR,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendors",
            test: /node_modules/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  });
