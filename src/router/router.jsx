import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
// import  Loader  from "../components/loader/loader";

const HomePage = lazy(()=> import("../pages/home/Home"));
const AllProductsPage = lazy(()=> import("../pages/allProducts/AllProducts"));
const AboutUsPage = lazy(()=> import("../pages/aboutUs/AboutUs"));
const SignUpPage = lazy(() => import('../pages/auth/SignUp'));
const LoginPage = lazy(() => import('../pages/auth/Login'));
const MyOrdersPage = lazy(() => import('../pages/myOrders/MyOrders'));
const CartPage = lazy(() => import('../pages/cart/Cart'));
const ProductInfoPage = lazy(() => import('../pages/productInfo/ProductInfo'));
const AddressPage = lazy(() => import('../pages/address/AddressPage'));
// const SearchResultPage = lazy(() => import("../pages/search-result/search-result"));

// const AddProductPage = lazy(() => import("../pages/admin/add-product/add-product"));
// const ProductListPage = lazy(() => import("../pages/admin/product-list/product-list"));
// const OrderListPage = lazy(() => import("../pages/admin/order-list/order-list"));

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>,
    },
    {
        path: '/all-products',
        element: <AllProductsPage></AllProductsPage>,
    },
    {
        path: '/about-us',
        element: <AboutUsPage></AboutUsPage>,
    },
    {
        path: '/sign-up',
        element:<SignUpPage></SignUpPage>
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/my-orders',
        element: <MyOrdersPage></MyOrdersPage>
    },
    {
        path:`/cart`,
        element: <CartPage></CartPage>
    },
    {
        path:`/product-info`,
        element: <ProductInfoPage></ProductInfoPage>
    }, 
    {
        path:`/address`,
        element: <AddressPage></AddressPage>
    },
])

// export const privateRoutes = createBrowserRouter([
//     {
//         path: '/my-orders',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><MyOrdersPage></MyOrdersPage></Suspense>
//     },
//      {
//         path: '/',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><HomePage></HomePage></Suspense>,
//     },
//     {
//         path: '/all-products',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><AllProductsPage></AllProductsPage></Suspense>,
//     },
//     {
//         path: '/filter-by-category/:category',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><ByCategoryPage></ByCategoryPage></Suspense>,
//     },
//     {
//         path: '/product-info/:id',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><ProductInfoPage></ProductInfoPage></Suspense>,
//     },
//     {
//         path: '/cart',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><CartPage></CartPage></Suspense>,
//     },
//     {
//         path: '/add-address',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><AddAddress></AddAddress></Suspense>
//     },
//     {
//         path:`search-result`,
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><SearchResultPage></SearchResultPage></Suspense>
//     }
// ])

// export const adminRoutes = createBrowserRouter([
//     {
//         path: '/',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><AddProductPage/></Suspense>
//     },
//     {
//         path: '/seller/product-list',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><ProductListPage/></Suspense>
//     },
//     {
//         path: '/seller/order-list',
//         element: <Suspense fallback={<Loader fullScreen={true}></Loader>}><OrderListPage/></Suspense>
//     }
// ])