import React from 'react'
import Products from 'pages/products.jsx';
import Buy from 'pages/buy.jsx'
import Authorization from 'pages/authorization.jsx'
import Detail from 'pages/detail'

const AppRoutes = [
    {
        key: 0,
        path: "/",
        component: Products
    },
    {
        key: 1,
        path: "/detail/:idItem",
        component: Detail
    },
    {
        key: 2,
        path: "/buy",
        component: Buy
    },
    {
        key: 3,
        path: "/auth",
        component: Authorization
    },
    {
        key: 4,
        path: "/password-recovery",
        component: Authorization
    },
    {
        key: 5,
        path: "/profile",
        component: Authorization
    },
    {
        key: 6,
        path: "/orders",
        component: Authorization
    },
    {
        key: 7,
        path: "*", //not found
        component: ()=><h1>not found</h1>
    }
]

export default AppRoutes;

