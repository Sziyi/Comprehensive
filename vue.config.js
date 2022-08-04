const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    https: false,
    // proxy: {
    //     '/dev-api': {
    //         target: '基地址',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/dev-api': ''
    //         }
    //     }
    // }
  },
  lintOnSave: false,
});
