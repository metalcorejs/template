// Core
import { merge } from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// Constants
import { BUILD_DIR } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Modules
import * as modules from "../modules";

// Prod Config
export default () =>
  merge(
    getCommonConfig(),
    {
      mode: "production",
      devtool: false,
      output: {
        filename: "bundle.[contenthash].js",
        path: BUILD_DIR,
      },
      plugins: [new BundleAnalyzerPlugin({ analyzerMode: "disabled" })],
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
    },
    modules.cleanDir()
  );
