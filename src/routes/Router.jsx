import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Terms from "../pages/Shared/terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      // {
      //   path: "/",
      //   element: <Category></Category>,
      //   loader: ({ params }) => fetch("https://my-frist-server-mukhle-sur.vercel.app/news"),
      // },
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://my-frist-server-mukhle-sur.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivetRoute>
            <News></News>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://my-frist-server-mukhle-sur.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
