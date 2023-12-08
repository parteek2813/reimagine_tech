import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import App from "./App";
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <UserProvider>
        <Login />
      </UserProvider>
    ),
  },
  {
    path: "/main",
    element: (
      <UserProvider>
        <Main />
      </UserProvider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
