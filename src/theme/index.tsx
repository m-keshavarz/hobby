import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";

// Text.defaultProps = { ...Text.defaultProps, align: "center" };

const boxy = defineStyle({
  border: "10px solid green",
});

export const primary = defineStyle({
  fontSize: "1.25rem",
  width: "13rem",
  height: "2.9rem",
});

export const buttonTheme = defineStyleConfig({
  variants: { boxy, primary },
});

export const theme = extendTheme({
  colors: {
    pink: {
      100: "#fff",
      200: "#bb43d3",
      300: "#cc5432",
      400: "#cc6633",
      500: "#55a155",
      600: "#aa2244",
      700: "#ff3322",
      800: "#FF6464",
    },
  },
  components: {
    Button: buttonTheme,
    Text: {
      baseStyle: {
        // fontSize: "10rem",
        // textDecoration: "underline",
        // color: "aqua",
      },
      variants: {
        "big-red-center": {
          color: "orange",
          fontSize: "3rem",
          textAlign: "center",
          textDecoration: "none",
        },
      },
      defaultProps: {
        // variant: "big-red-center",
        // size
        // colorScheme
      },
    },
  },
});
