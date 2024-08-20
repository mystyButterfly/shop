import './cart.css'
import React, { useContext,useEffect } from "react";
import {PRODUCTS} from "../../products"
import {ShopContext} from '../../context/shop-context'
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4} from 'uuid'

export default function Cart() {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Cart:</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !== 0){
            return <CartItem key={uuidv4()}  data={product}/>
          }
        })}
      </div>
{totalAmount>0?
      <div className="checkout">
        <p>Total: ${totalAmount}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button onClick={()=>navigate("/detail")}>Checkout</button>
      </div>
: <h1>Your Cart is Empty</h1>}
    </div>
  );
}
