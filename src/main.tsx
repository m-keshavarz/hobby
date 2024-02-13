import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import { theme } from "./theme/index.tsx";
import Layout from "./app/portfolio1/layout/index.tsx";
import App from "./App.tsx";
import Blogs from "./app/portfolio1/blog/index.tsx";
import Portfolio1 from "./app/portfolio1/index.tsx";
import PaginationPage from "./app/pagination/index.tsx";
import Carousel from "./app/components/carousel/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/portfolio1" element={<Portfolio1 />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/pagination" element={<PaginationPage />} />
            <Route path="/carousel" element={<Carousel />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
