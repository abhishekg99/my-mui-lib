import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import MyButton from "../../src/components";

const theme = createTheme();

export default {
  title: 'Components/MyButton',
  component: MyButton,
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Default = () => <MyButton label="Custom MUI Button" />;