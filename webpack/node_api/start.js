// Core
import webpack from "webpack";
import express from "express";
import hot from "webpack-hot-middleware";
import dev from "webpack-dev-middleware";
import openBrowser from "react-dev-utils/openBrowser";
import { choosePort } from "react-dev-utils/WebpackDevServerUtils";
import chalk from "chalk";

// Dev Config
import getDevConfig from "../config/webpack.dev";

// Constants
import { PORT, HOST } from "../utils/constants";

// App
const app = express();

(async () => {
  try {
    const choosenPort = await choosePort(HOST, PORT);
    if (!choosenPort) {
      console.log(chalk.yellowBright("→ It's impossible to run the app :("));
      return null;
    }

    // Compiler
    const compiler = webpack(getDevConfig(choosePort, HOST));

    // Middleware
    app.use(dev(compiler, {}));
    app.use(hot(compiler, {}));

    // Listen
    app.listen(choosenPort, HOST, () => {
      console.log(
        `${chalk.greenBright("→ Server listening on")} ${chalk.blueBright(
          `http://${HOST}:${choosenPort}`
        )}`
      );
      openBrowser(`http://${HOST}:${choosenPort}`);
    });
  } catch (error) {
    console.log(chalk.redBright("→ Error!"));
    console.error(error.message || error);
  }
})();
