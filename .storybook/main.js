module.exports = {
  stories: [
    '../src/component/**/**/*.stories.mdx',
    '../src/component/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};
