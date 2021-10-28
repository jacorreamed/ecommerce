import Products from 'pages/products.jsx';
import Buy from 'pages/buy.jsx'
import Authorization from 'pages/authorization.jsx'

const AppRoutes = [
    {
        key: 1,
        path: "/",
        component: Products
    },
    {
        key: 0,
        path: "/item/:id-item",
        component: Products
    },
    {
        key: 1,
        path: "/buy",
        component: Buy
    },
    {
        key: 2,
        path: "/auth",
        component: Authorization
    },
    {
        key: 3,
        path: "/password-recovery",
        component: Authorization
    },
    {
        key: 4,
        path: "/profile",
        component: Authorization
    },
    {
        key: 5,
        path: "/orders",
        component: Authorization
    },
    {
        key: 6,
        path: "*", //not found
        component: Authorization
    }
]

export default AppRoutes;

