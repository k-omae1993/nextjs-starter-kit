const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
  stories: [
    '../src/component/**/**/*.stories.mdx',
    '../src/component/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal(config) {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()];
    return config;
  },
  framework: '@storybook/react',
};
