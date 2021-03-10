// Core
import HtmlWebpackPlugin from "html-webpack-plugin";

// Constants
import { HTML_DIR } from "../../utils/constants";

// Set Html
export const setHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: `${HTML_DIR}/index.html`,
      title: "💥 webpack",
    }),
  ],
});
