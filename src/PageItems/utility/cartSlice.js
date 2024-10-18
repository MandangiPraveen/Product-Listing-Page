import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartQuantity: 0,
        cartProducts: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartQuantity++;
            const productToBeAdded = action.payload;
            const existingProduct = state.cartProducts.find(
                (cProduct) => cProduct.id === productToBeAdded.id
            );

            if (!existingProduct) {

                state.cartProducts.push({ ...productToBeAdded, indQuantity: 1 });
            } else {

                existingProduct.indQuantity++;
            }
        },
        deleteFromCart: (state, action) => {
            const productToBeRemoved = action.payload;
            const productIdx = state.cartProducts.findIndex(
                (cProduct) => cProduct.id === productToBeRemoved.id
            );

            if (productIdx !== -1) {
                const product = state.cartProducts[productIdx];

                if (product.indQuantity > 1) {
                    product.indQuantity--;
                    
                } else {

                    state.cartProducts.splice(productIdx, 1);
                    
                }
                state.cartQuantity--;
            }
        },
    },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice;
