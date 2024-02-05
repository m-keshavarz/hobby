import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../app/notFound";
import Portfolio1 from "../app/portfolio1";
import Blogs from "../app/portfolio1/blog";
import PaginationPage from "../app/pagination";
import Carousel from "../app/components/carousel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio1",
    element: <Portfolio1 />,
  },

  {
    path: "/pagination",
    element: <PaginationPage />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/carousel",
    element: <Carousel />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
