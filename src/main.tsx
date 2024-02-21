import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./scss/cyberpunk.scss";

import App from "./App";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: "/article/:articleId",
        element: <Article />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router} />
        <Footer />
    </React.StrictMode>
);
