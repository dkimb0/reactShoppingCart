import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App'
import ShoppingCart from './ShoppingCart'
import ErrorPage from "./ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'shoppingcart',
            element: <ShoppingCart />,
        }
    ])

    return <RouterProvider router = {router} />;
};

export default Router;