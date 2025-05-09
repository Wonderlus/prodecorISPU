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
import Admin from "./components/Admin/Admin.tsx";
import AdminUsers from "./components/Admin/Users/AdminUsers.tsx";
import AdminProducts from "./components/Admin/Products/AdminProducts.tsx";
import AdminOrders from "./components/Admin/Orders/AdminOrders.tsx";
import AdminChangeUser from "./components/Admin/Users/AdminChangeUser.tsx";
import AdminCreateUser from "./components/Admin/Users/AdminCreateUser.tsx";

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
            {
                path: "admin",
                element: <Admin />,
                children: [],
            },
            {
                path: "admin/users",
                element: <AdminUsers />,
            },
            {
                path: "admin/users/create",
                element: <AdminCreateUser />,
            },
            {
                path: "admin/products",
                element: <AdminProducts />,
            },
            {
                path: "admin/orders",
                element: <AdminOrders />,
            },
            {
                path: "admin/users/:userId",
                element: <AdminChangeUser />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
);
