import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../app/notFound";
import Newbie from "../app/newbie";
import BlogPreviewCard from "../app/newbie/blogPreviewCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newbie",
    element: <Newbie />,
  },
  {
    path: "/newbie/blog-preview-card",
    element: <BlogPreviewCard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
