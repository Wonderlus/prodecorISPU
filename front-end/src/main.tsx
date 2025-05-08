import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Catalog from "./components/Catalog/Catalog.tsx";
import Basket from "./components/Basket/Basket.tsx";
import MainPage from "./components/MainPage/MainPage.tsx";
import ProductPage from "./components/ProductPage/ProductPage.tsx";
import UserPage from "./components/UserPage/UserPage.tsx";
import Special from "./components/Special/Special.tsx";

// const filter = `(contains(tolower(type), ''))`;

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "catalog",
                element: <Catalog />,
            },
            {
                path: "basket",
                element: <Basket />,
            },
            {
                path: "product/:productId",
                element: <ProductPage />,
            },
            {
                path: "me",
                element: <UserPage />,
            },
            {
                path: "special",
                element: <Special />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
);
