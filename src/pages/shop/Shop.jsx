import "./shop.css";
import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "./Sidebar";
import { MagnifyingGlass, Sliders } from "phosphor-react";

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const [filterArguments, setFilterArguments] = useState({
    price: "priceall",
    type: "typeall",
    style: "all",
  });

  const updateFilterArguments = (newFilterArguments) => {
    setFilterArguments((prevState) => ({
      ...prevState,
      ...newFilterArguments,
    }));
  };

  useEffect(() => {
    const getFilteredByPrice = (products, priceFilter) => {
      switch (priceFilter) {
        case "priceall":
          return products;
        case "500":
          return products.filter(
            (product) => product.price >= 0 && product.price <= 500
          );
        case "1000":
          return products.filter(
            (product) => product.price > 500 && product.price <= 1000
          );
        case "1001":
          return products.filter((product) => product.price > 1000);
        default:
          return products;
      }
    };

    const getFilteredByType = (products, typeFilter) => {
      if (typeFilter === "typeall") {
        return products;
      }
      return products.filter((product) => product.type === typeFilter);
    };
    const getFilteredByStyle = (products, styleFilter) => {
      if (styleFilter === "all") {
        return products;
      }
      return products.filter((product) => product.style === styleFilter);
    };

    const filteredByPrice = getFilteredByPrice(PRODUCTS, filterArguments.price);
    const filteredByType = getFilteredByType(
      filteredByPrice,
      filterArguments.type
    );
    const filteredByStyle = getFilteredByStyle(
      filteredByType,
      filterArguments.style
    );

    setFilteredProducts(filteredByStyle);
  }, [filterArguments]);

  const handleSearch = (event) => {
    const searchedProducts = PRODUCTS.filter((product) =>
      product.productName
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSortAsc = () => {
    let sortedProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
    setFilteredProducts(sortedProducts);
  };
  const handleSortDes = () => {
    let sortedProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
    setFilteredProducts(sortedProducts);
  };
  const handleSortDef = () => {
    let sortedProducts = [...filteredProducts].sort((a, b) => a.id - b.id);
    setFilteredProducts(sortedProducts);
  };
  //sidebar mobile version
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };
  
  return (
    <div className="shopAndSidebar">
      <div className="sidebarTogler">
      <button onClick={toggleSidebar}><Sliders size={12}/>
        {isSidebarOpen ? ' Close filters' : ' Open filters'}
      </button>
      </div>
      
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <Sidebar setFilterArguments={updateFilterArguments} />
        </div>

      <div className="shop">
        <div className="search">
          <div>
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search products ..."
            />
            <MagnifyingGlass size={16} className="searchicon" />
          </div>
          <div>
            Sort by:
            <select
              className="shopSelect"
              onChange={(e) => {
                if (e.target.value === "def") {
                  handleSortDef();
                } else if (e.target.value === "asc") {
                  handleSortAsc();
                } else if (e.target.value === "des") {
                  handleSortDes();
                }
              }}
            >
              <option value="def">default sorting</option>
              <option value="asc">price low to hight</option>
              <option value="des">price hight to low</option>
            </select>
          </div>
        </div>
        <div className="products">
          {filteredProducts.map((product) => (
            <Product key={product.id || uuidv4()} data={product} />
          ))}
          {filteredProducts.length === 0 && <h2>Change filters</h2>}
        </div>
      </div>
    </div>
  );
}
