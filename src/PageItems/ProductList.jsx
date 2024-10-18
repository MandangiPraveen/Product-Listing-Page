import React from 'react';
import { TbShoppingCartPlus, TbShoppingCartMinus } from "react-icons/tb";
import { addToCart, deleteFromCart } from "../PageItems/utility/cartSlice";
import { useDispatch, useSelector } from 'react-redux';

function ProductList(props) {
    const { productList } = props;
    const dispatch = useDispatch();
    const cartProducts = useSelector((store) => store.cartReducer.cartProducts);

    const handleAddProduct = (product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveProduct = (product) => {
        dispatch(deleteFromCart(product));
    };
    const getProductQuantity = (productId) => {
        const product = cartProducts.find((p) => p.id === productId);
        return product ? product.indQuantity : 0;
    };

    return (
        <>
            {productList == null ? 
                <h3>Loading...</h3> : (
                productList.map((product, index) => {
                    return (
                        <div className="product" key={index}>
                            <img src={product.image} alt="product_img" className='product_image' />
                            <div className='product_meta'>
                                <p className='product_title'>{product.title}</p>
                                <p className='price'>$ {product.price}</p>
                            </div>
                            <div className='add_to_cart_container'>
                                <TbShoppingCartMinus 
                                    fontSize='large'
                                    onClick={() => handleRemoveProduct(product)}
                                />
                                <div className='currentCartCount'>{getProductQuantity(product.id)}</div>
                                <TbShoppingCartPlus 
                                    fontSize='large' 
                                    onClick={() => handleAddProduct(product)}
                                />
                            </div>
                        </div>
                    );
                })
            )}
        </>
    );
}

export default ProductList;
