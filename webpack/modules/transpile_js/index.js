// Transpile JS
export const transpileJs = () => ({
  module: {
    rules: [
      {
        test: /\.(j|t)sx?/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
});
