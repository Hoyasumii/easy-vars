import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

import routes from "@routes";
import "@styles/index.scss";
import customTheme from "@styles/customTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={customTheme}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </ConfigProvider>
  </React.StrictMode>
);
