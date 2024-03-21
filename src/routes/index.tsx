import Author from "@/components/Author";
import BlogsDetails from "@/components/BlogsDetails";
import Content from "@/components/Content";
import RootLayout from "@/layouts/RootLayout";
import { fetchArticleById, fetchArticles } from "@/lib/query";
import Blogs from "@/pages/Blogs";
import BookMarks from "@/pages/BookMarks";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetchArticles(),
      },
      {
        path: "/blog/:id",
        element: <BlogsDetails />,
        loader: ({ params }) => fetchArticleById(params.id || ""),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) => fetchArticleById(params.id || ""),
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) => fetchArticleById(params.id || ""),
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <BookMarks />,
      },
    ],
  },
]);

export default routes;
