import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router";
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/:movieId",
      element: <MovieDetails />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
