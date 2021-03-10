export const loadStatic = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|webp|gif|jpeg)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "static/assets/",
            },
          },
        },
        // {
        //   test: /\.(woff|woff2)$/,
        //   use: {
        //     loader: "file-loader",
        //     options: {
        //       name: "[name].[ext]",
        //       outputPath: "static/assets/",
        //     },
        //   },
        // },
      ],
    },
  };
};
