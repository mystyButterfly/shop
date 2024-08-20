import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { ShoppingCartSimple } from "phosphor-react";

const Product = (props) => {
  const { id, productName, price, productImage, description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="description-text">{description}</p>
        <p className="price">${price}</p>
      
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        <ShoppingCartSimple size={16} /> ADD {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
      </div>
    </div>
  );
};

export default Product;
