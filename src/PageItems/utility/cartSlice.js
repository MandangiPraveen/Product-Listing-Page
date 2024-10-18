// import { createSlice } from "@reduxjs/toolkit"

// const cartSlice = createSlice({
//     name:"cartSlice",
//     initialState:{
//         cartQuantity:10,
//         cartProducts:[]
//     },
//     reducers:{
//         addToCart:(state,action)=>{
//             state.cartQuantity ++;
//             const productToBeAdded = action.payload;
//             const requiredProduct = state.cartProducts
//                     .find((cProduct)=>{return cProduct.id == productToBeAdded.id });
//             if(requiredProduct == undefined){
//                 productToBeAdded.indQuantity - 1;
//                 state.cartProducts.push(productToBeAdded);
//             } else {
//                 requiredProduct.indQuantity ++;
//             }
//         },
//         deleteFromCart:(state,action)=>{
//                 const productToBeAdded = action.payload;
//                 const productIdx = state.cartProducts
//                                 .findIndex((cProduct)=>{ return cProduct.id == productToBeAdded.id });
//                 if(productIdx == -1){

//                 } else {
//                     state.cartQuantity --;
//                     let product = state.cartProducts[productIdx];
//                     if(product.indQuantity == 0){
//                         state.cartProducts.splice(productIdx, 1);
//                     } else {
//                         state.cartProducts[productIdx].indQuantity --;
//                     }
//                 }
//         },
//     }
// });

// export const action = cartSlice.actions;
// export default cartSlice;

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
                // Initialize individual quantity as 1 if product is not in the cart
                state.cartProducts.push({ ...productToBeAdded, indQuantity: 1 });
            } else {
                // Increment the quantity of the existing product
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
                // Decrement quantity only if it's above 0
                if (product.indQuantity > 1) {
                    product.indQuantity--;
                    
                } else {
                    // Remove product from cart when quantity reaches 1 and is decremented
                    state.cartProducts.splice(productIdx, 1);
                    
                }
                state.cartQuantity--;
            }
        },
    },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice;
