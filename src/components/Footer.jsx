import './footer.css'
import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Link to={"/"}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/support">Support</Link>
        <Link to="/career">Career</Link>
        <Link to="/license">License</Link>
      </div>
      <p>© 2024 Phone</p>
    </div>
  );
}
