import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const { setCartItems, getDefaultCart } = useContext(ShopContext);
  const navigate = useNavigate();
  useEffect(() => {
    setCartItems(getDefaultCart());
  }, [setCartItems]);

  return (
    <div style={{ textAlign: "center", minHeight: "65vh" }}>
      <h1>Success! </h1>
      <h2>Order saved. Our operator will call you soon.</h2>
      <p>(order detail in console)</p>
      <button
        onClick={() => navigate("/")}
        style={{
          width: "150px",
          height: "50px",
          backgroundColor: "rgb(19, 19, 19)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Main page
      </button>
    </div>
  );
}
