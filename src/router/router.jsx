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

const DashboardPage = lazy(() => import("../pages/admin/dashboard/Dashboard"));
const AddProductPage = lazy(() => import("../pages/admin/addProduct/AddProduct"));
const ProductListPage = lazy(() => import("../pages/admin/products/products"));
const OrderListPage = lazy(() => import("../pages/admin/orders/Orders"));
const EditProductPage = lazy(() => import("../pages/admin/editProduct/EditProduct"));
const AddCategoryPage = lazy(() => import("../pages/admin/addCategory/AddCategory"));
const CategoriesPage = lazy(() => import("../pages/admin/categories/Categories"));

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

export const adminRoutes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardPage/>
    },
    {
        path: '/admin/add-product',
        element: <AddProductPage/>
    },
    {
        path: '/admin/edit-product',
        element: <EditProductPage/>
    },
    {
        path: '/admin/orders',
        element: <OrderListPage/>
    },
    {
        path: '/admin/categories',
        element: <CategoriesPage/>
    },
    {
        path: '/admin/products',
        element: <ProductListPage/>
    },
    {
        path: '/admin/add-category',
        element: <AddCategoryPage/>
    },
])