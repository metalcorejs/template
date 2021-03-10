// Core
import { merge } from "webpack-merge";
import { HotModuleReplacementPlugin } from "webpack";

// Constants
import { DIST_DIR, HOST, PORT } from "../utils/constants";

// Common Config
import getCommonConfig from "./webpack.common";

// Dev Config
export default () => {
  return merge(getCommonConfig(), {
    devtool: "eval-cheap-module-source-map",
    mode: "development",
    target: "web",
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
    entry: {
      main: ["webpack-hot-middleware/client", "react-hot-loader/patch"],
    },
    output: {
      filename: "[name].bundle.js",
      path: DIST_DIR,
      publicPath: "/",
    },
    plugins: [new HotModuleReplacementPlugin()],
    devServer: {
      host: HOST,
      port: PORT,
      hot: true,
      historyApiFallback: true,
      overlay: true,
    },
  });
};
