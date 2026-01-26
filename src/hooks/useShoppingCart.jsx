import { useDispatch, useSelector } from "react-redux"
import { addProductIntoCart, decreaseQuantity, removeAllProduct, removeProductFromCart } from "../redux/features/CartSlice";
import { useNavigate } from "react-router-dom";

const useShoppingCart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const products = useSelector(state => state.cart.cartData) ?? []
    console.log(products);
    
    const isLogin = useSelector(state => state.user.isLogin);


    function addProductInCart(product, quantity) {
        if (!isLogin) {
            navigate("/sign-up");
            return;
        };
        if (!product) return;
            dispatch(addProductIntoCart({quantity: quantity || 1, product}));
    }

    function removeProductInCart(p) {
        if (!p) return;
        dispatch(removeProductFromCart(p))
    }

    function clearCart() {
        dispatch(removeAllProduct());
    }

    function decProductQuantity(p) {
        if (!p) return;
        dispatch(decreaseQuantity(p));
    }

    function getCartCount() {
        return products.length;
    }

    function getCartTotalPrice() {
        return products.reduce((acc, item) => acc += item?.product?.discountPrice * item?.quantity, 0);
    }

    function getCartProducts() {
        return products;
    }

    function getCartSingleProduct(id) {
        if (!id) return;
        return products.find(item => item.product_id === id);
    }

    return { addProductInCart, clearCart, removeProductInCart, decProductQuantity, getCartCount, getCartProducts, getCartSingleProduct, getCartTotalPrice }

}

export default useShoppingCart