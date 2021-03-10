// Transpile JS
export const transpileJs = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
});
