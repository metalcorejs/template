export default (api) => {
  // Cache
  api.cache.never();

  return {
    presets: [
      "@babel/react",
      "@babel/preset-typescript",
      [
        "@babel/env",
        {
          debug: false,
          spec: true,
          loose: true,
          modules: false,
        },
      ],
    ],
    plugins: ["react-hot-loader/babel"],
  };
};
