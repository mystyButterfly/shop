import { useContext } from "react";
import React from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {cartItems, addToCart, removeFromCart,updateCartItemCount } = useContext(ShopContext);
  
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="cartInf">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        {cartItems[id]>1 ?<p className="cartMultiply"> {`${cartItems[id]} x $${price} =  $${cartItems[id]*price}`}</p> : ""}
        <div className="countHandler">
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
