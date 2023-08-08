import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/router";
import "./index.css";
import router from "./router.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
