import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./store/store";

import { Home, News, Order, Stock, About, Career, Reviews, Profile } from "./pages/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/order", element: <Order /> },
      { path: "/stock", element: <Stock /> },
      { path: "/news", element: <News /> },
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
      { path: "/reviews", element: <Reviews /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
