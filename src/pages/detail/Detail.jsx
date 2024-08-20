import "./detail.css";
import React, { useContext,useEffect } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item-small";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Detail() {
  const { cartItems, getTotalCartAmount, customer, setCustomer } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();
  const updateCustomer = () => {
    navigate("/confirm");
  };
  return (
    <div>
      <h1 className="detailH">Order detail</h1>
      <div className="detailContainer">
        <div className="detailItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={uuidv4()} data={product} />;
            }
          })}
        </div>
        <div className="delivery">
          <div id="orderByTel">
            <p>Call us for quick order</p>
            <p>+01231456788</p>
            <h2>OR</h2>
          </div>
          <h3>Fill in the form. After click NEXT</h3>
          <div id="orderByInf">
            <label>
              Name
              <input
                type="text"
                placeholder="Name"
                onChange={(event) =>
                  setCustomer({ ...customer, name: event.target.value })
                }
                value={customer.name}
              />
            </label>
            <label>
              Telephone
              <input
                type="text"
                placeholder="Telephone"
                onChange={(event) =>
                  setCustomer({ ...customer, tel: event.target.value })
                }
                value={customer.tel}
              />
            </label>
            <label>
              Post detail
              <input
                type="text"
                placeholder="Post for delivery"
                onChange={(event) =>
                  setCustomer({ ...customer, post: event.target.value })
                }
                value={customer.post}
              />
            </label>
          </div>
        </div>
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total: ${totalAmount}</p>
          <button onClick={() => navigate("/cart")}>Back</button>
          <button onClick={() => updateCustomer()}>Next</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
}
