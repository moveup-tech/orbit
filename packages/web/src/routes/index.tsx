import { createBrowserRouter } from "react-router-dom";

import { PublicLayout } from "@/pages/_layouts/public";

// Public routes
import { Login } from "@/pages/public/login";

// Private routes
import { Home } from "@/pages/private/home";
import { PrivateLayout } from "@/pages/_layouts/private";
import { Processes } from "@/pages/private/processes";

export const router = createBrowserRouter([
  {
    path: "",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "me",
    element: <PrivateLayout />,
    children: [
      {
        path: "inicio",
        element: <Home />,
      },
      {
        path: "processos",
        element: <Processes />,
      },
    ],
  },
]);
