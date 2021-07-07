const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 选项
  publicPath: "/",
  outputDir: "dist", // 设置生产环境构建输出的目录
  assetsDir: "static", // 设置生成的静态资源（相对于 outputDir 的）的目录
  lintOnSave: process.env.NODE_ENV === "development",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
        "@views": path.join(__dirname, "./src/views"),
        "@components": path.join(__dirname, "./src/components"),
      },
    },
  },
};
