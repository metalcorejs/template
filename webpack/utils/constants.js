// Core
import { path as ROOT_DIR } from "app-root-path";
import { resolve } from "path";

// Constants
export { ROOT_DIR };
export const SRC_DIR = resolve(ROOT_DIR, "src");
export const DIST_DIR = resolve(ROOT_DIR, "dist");
export const BUILD_DIR = resolve(ROOT_DIR, "docs");
export const HTML_DIR = resolve(ROOT_DIR, "src/html");
export const ASSETS_DIR = resolve(ROOT_DIR, "src/assets");
export const HOST = "localhost";
export const PORT = process.env.PORT || 8080;
