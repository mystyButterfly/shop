import "./navbar.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, House } from "phosphor-react";
import { ShopContext } from "../context/shop-context";

const Navbar = () => {
  const { getTotalItemsInCart } = useContext(ShopContext);
  let totalItems = getTotalItemsInCart();
  
  // Shadow effect state
  const [shadow, setShadow] = useState("0px 0px 0px rgba(0, 0, 0, 0)"); 

  useEffect(() => {
    if (totalItems > 0) {
      setShadow("0px 0px 10px 5px rgba(255, 122, 122, 0.65)");

      const timer = setTimeout(() => {
        setShadow("0px 0px 0px rgba(0, 0, 0, 0)");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-label">
        <House size={32} />
        <h2>Phone</h2>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          {totalItems > 0 ? (
            <div
              className="nav-redpoint"
              style={{
                boxShadow: shadow,
                transition: "box-shadow 0.5s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "red",
                color: "white",
                position: "relative",
              }}
            >
              {totalItems}
            </div>
          ) : null}
          <ShoppingCart size={32} className="shoppingCartNav" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
