import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../app/notFound";
import Portfolio1 from "../app/portfolio1";
import Pagination from "../app/components/pagination";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/portfolio1',
    element: <Portfolio1 />
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: '/pagination',
    element: <Pagination />
  }
]);
