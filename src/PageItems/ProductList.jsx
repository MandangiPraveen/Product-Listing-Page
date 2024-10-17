import React from 'react'
import { TbShoppingCartPlus } from "react-icons/tb";
import { TbShoppingCartMinus } from "react-icons/tb";
import { action } from "../PageItems/utility/cartSlice"
import { useDispatch } from 'react-redux';


function ProductList(props) {
    const { productList } = props;
    const dispatch = useDispatch();

    const handleAddProduct = (product)=>{
        dispatch(action.addToCart(product));
    };
    const handleRemoveProduct = (product) => {
        dispatch(action.deleteFromCart(product));
    };
  return (
    <>
        {productList == null ? 
        <h3>Loading...</h3>:
            productList.map((product, index)=>{
                return <div className="product" key={index} >
                    <img src={product.image} alt="product_img" className='product_image' />
                    <div className='product_meta'>
                        <p className='product_title'>{product.title}</p>
                        <p className='price'>$ {product.price}</p>
                    </div>
                    <div className='add_to_cart_container'>
                            <TbShoppingCartMinus fontSize='large'
                            onClick={handleRemoveProduct(product)}/>
                            <div className='currentCartCount'>0</div>
                            <TbShoppingCartPlus fontSize='large' 
                            onClick={ handleAddProduct(product) }/>  
                    </div>
                </div>
            })
            }
    </>
  );
}

export default ProductList