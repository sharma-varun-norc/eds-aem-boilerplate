/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../blocks/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: [{ from: '../images', to: '/images' }],
};

export default config;
