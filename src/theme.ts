import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Noto Sans KR', sans-serif",
    body: "'Noto Sans KR', sans-serif",
  },
});

export { theme };
