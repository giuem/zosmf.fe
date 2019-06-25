module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        //target: "http://localhost:8080",
        target: "http://139.199.75.41:3000/mock/11/sms",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
