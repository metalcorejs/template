// Core
import { CleanWebpackPlugin } from "clean-webpack-plugin";

// Constants
import { BUILD_DIR } from "../../utils/constants";

export const cleanDir = () => {
  return {
    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
        root: BUILD_DIR,
      }),
    ],
  };
};
