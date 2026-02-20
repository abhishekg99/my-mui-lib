import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-webpack5-compiler-babel"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  // FORCE DISABLE the crashing parser
  typescript: {
    reactDocgen: false, 
  },
};
export default config;