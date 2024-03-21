import RootLayout from "@/layouts/RootLayout";
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
      },
      {
        path: "/bookmarks",
        element: <BookMarks />,
      },
    ],
  },
]);

export default routes;
