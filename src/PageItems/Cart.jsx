import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../PageItems/utility/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const cartProducts = useSelector((store) => store.cartReducer.cartProducts);

    const handleRemoveProduct = (product) => {
        dispatch(deleteFromCart(product));
    };

    return (
        <div className='cart-items'>
            {cartProducts.length === 0 ? (
                <h3>Your cart is empty</h3>
            ) : (
                cartProducts.map((product, index) => (
                    <div className='cart-item' key={index}>
                        <img src={product.image} alt={product.name} className='cart-item-image' />
                        <div className='cart-item-details'>
                            <p className='cart-item-title'>{product.title}</p>
                            <p className='cart-item-price'>$ {product.price}</p>
                            <p className='cart-item-quantity'>Quantity: {product.indQuantity}</p>
                        </div>
                        <button
                            className='remove-button'
                            onClick={() => handleRemoveProduct(product)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
