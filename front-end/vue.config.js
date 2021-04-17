const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/components/UIComponents"),
        "@pages": path.resolve(__dirname, "src/views"),
        "@layout": path.resolve(__dirname, "src/components/Layout"),
      },
    },
  },
};
