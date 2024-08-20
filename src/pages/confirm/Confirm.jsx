import React, { useContext, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "../detail/cart-item-small";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Confirm() {
  const { cartItems, getTotalCartAmount, customer } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleConfirm = ()=>{
    console.log("order", { customer: customer, quantity: cartItems, price: getTotalCartAmount() })
    navigate("/success")
  }
  
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Confirm customer information </h1>
      <div style={{display: "flex",
      flexDirection: "column", alignItems: "center"}}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={uuidv4()} data={product} />;
          }
        })}
      </div>
      <div style={{textAlign: "center"}}>
        <p>Name: {customer.name}</p>
        <p>Tel: {customer.tel}</p>
        <p>Post: {customer.post}</p>
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total: ${totalAmount}</p>
          <button onClick={() => navigate("/detail")}>Back</button>
          <button onClick={() => handleConfirm()} >Confirm</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
}
