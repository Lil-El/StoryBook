const path = require("path")
// story 全局配置
module.exports = {
  stories: ["../src/stories/**/*.stories.js"],
  addons: [
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, "../src/stories")], // 找到自己存放stories的文件夹
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
};
