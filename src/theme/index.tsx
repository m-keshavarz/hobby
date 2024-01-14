import { extendTheme } from "@chakra-ui/react";

// Text.defaultProps = { ...Text.defaultProps, align: "center" };

export const theme = extendTheme({
  colors: {
    test: {
      100: "#ff0000",
    },
  },
  components: {
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
