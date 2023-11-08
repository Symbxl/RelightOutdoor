const path = require("path");

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.(mp4|webm)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "videos/",
      },
    },
  });

  return config;
};
