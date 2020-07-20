module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // plugins vant 样式插件
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
};
