// Transpile JS
export const transpileJs = () => ({
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
});
