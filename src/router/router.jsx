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
const FilterByCategoryPage = lazy(() => import('../pages/filterByCategory/FilterByCategory'));
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
        path:`/cart`,
        element: <CartPage></CartPage>
    },
    {
        path:`/product-info/:id`,
        element: <ProductInfoPage></ProductInfoPage>
    }, 
    {
        path:`/filter-by-category/:id`,
        element: <FilterByCategoryPage></FilterByCategoryPage>
    }, 
    {
        path:`/address`,
        element: <AddressPage></AddressPage>
    },
])

export const privateRoutes = createBrowserRouter([
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
        path:`/cart`,
        element: <CartPage></CartPage>
    },
    {
        path:`/product-info/:id`,
        element: <ProductInfoPage></ProductInfoPage>
    }, 
    {
        path:`/filter-by-category/:id`,
        element: <FilterByCategoryPage></FilterByCategoryPage>
    }, 
    {
        path:`/address`,
        element: <AddressPage></AddressPage>
    },
    {
        path: '/my-orders',
        element: <MyOrdersPage></MyOrdersPage>
    },
    {
        path: '/cart',
        element: <CartPage></CartPage>
    },
    {
        path: '/add-address',
        element: <AddressPage></AddressPage>
    },
])

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