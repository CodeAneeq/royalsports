import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: []
  },
  reducers: {
    addProductIntoCart: (state, action) => {
        const {quantity = 1, product} = action.payload;
        console.log(quantity);
        
        const existingItem = state.cartData.find(it => it.product_id == product._id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
             state.cartData.push({
                quantity: quantity,
                product_id: product._id,
                product: product
             })
          }
        
    },
    decreaseQuantity: (state, action) => {
        // const item = action.payload;
        console.log(action.payload._id);
        
        const existingItem = state.cartData.find(it => it.product._id.toString() === action.payload._id.toString());
         if (existingItem) {
               if (existingItem.quantity > 1) {
                 existingItem.quantity--
               } else {
                state.cartData = state.cartData.filter(it => it.product._id !== action.payload._id)
               }
         }
    },
    removeProductFromCart: (state, action) => {
        state.cartData = state.cartData.filter(item => item.product._id !== action.payload._id);
    },
    removeAllProduct: (state, action) => {
        state.cartData = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProductIntoCart, removeProductFromCart, removeAllProduct, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer