import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homepage";
import LatihanUseState from "./pages/latihan-usestate";
import NoteAppPage from "./pages/note-app";
import LatihanUseEffect from "./pages/latihan-useeffect";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/latihan-usestate",
    element: <LatihanUseState />,
  },
  {
    path: "/note-app",
    element: <NoteAppPage />,
  },
  {
    path: "/latihan-useeffect",
    element: <LatihanUseEffect />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
