import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import { theme } from "./theme/index.tsx";
import { router } from "./router/index.tsx";
import Layout from "./app/portfolio1/layout/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
