// Core
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import sass from "sass";

// Constants
import { ROOT_DIR } from "../../utils/constants";

// Load Styles
export const loadStyles = (env) => {
  const isDev = env === "development";

  return {
    plugins: isDev
      ? []
      : [new MiniCssExtractPlugin({ filename: "[name].css" })],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            isDev
              ? { loader: "style-loader" }
              : { loader: MiniCssExtractPlugin.loader },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  config: `${ROOT_DIR}/postcss.config.js`,
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                implementation: sass,
              },
            },
          ],
        },
      ],
    },
  };
};
