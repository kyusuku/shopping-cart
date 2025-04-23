import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes.tsx";
import { ItemCountProvider } from "./context/ItemCountContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ItemCountProvider>
      <RouterProvider router={router} />
    </ItemCountProvider>
  </StrictMode>,
);
