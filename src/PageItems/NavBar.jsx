import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
import { useSelector } from 'react-redux';



function NavBar() {
  const quantity = useSelector((store) => store.cartReducer.cartQuantity);
  return (
    <div className='navbar'>
      <Link to="/">
          <div>
          <BiHome fontSize='large'/>
          </div>
      </Link>
      <Link to="/user">
          <div>
          <CgProfile fontSize='large'/>
          </div>
      </Link>
      <Link to="/cart">
        <div className="cart_container">
        <BsCart3 fontSize='large'/>
        <div className="cart_quantity">{quantity}</div>
        </div>
        
      </Link>
    </div>
  )
}

export default NavBar