import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlertPage from "./pages/AlertPage.tsx";
import CitiesPage from "./pages/CitiesPage.tsx";
import ImagePage from "./pages/ImagePage.tsx";
import CartsPage from "./pages/CartsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/carts",
    element: <CartsPage />,
  },
  {
    path: "/cities",
    element: <CitiesPage />,
  },
  {
    path: "/alert",
    element: <AlertPage />,
  },
  {
    path: "/material",
    element: <ImagePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
