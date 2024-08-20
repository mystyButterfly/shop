import { useContext } from "react";
import React from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {cartItems } = useContext(ShopContext);
  
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        {cartItems[id]>1 ?<p className="cartMultiply"> {`${cartItems[id]} x $${price} =  $${cartItems[id]*price}`}</p> : ""}
      </div>
    </div>
  );
};
