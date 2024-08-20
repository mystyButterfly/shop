import React, {useEffect} from "react";

const Sidebar = ({ setFilterArguments }) => {
  const handleOptionChange = (event) => {
    let newFilterArguments = {
      price: 0
    };
    newFilterArguments.price = event.target.value;
    setFilterArguments(newFilterArguments);
  };
  const handleType = (event) => {
    let newFilterArguments = {
      type: "",
    };
    newFilterArguments.type = event.target.value;
    setFilterArguments(newFilterArguments);
  };
  const handleStyle = (event) => {
    let newFilterArguments = {
      style: "",
    };
    newFilterArguments.style = event.target.value;
    setFilterArguments(newFilterArguments);
  };
  useEffect(()=>{
    const checkboxes = document.querySelectorAll('#priceall, #typeall, #styleall');
    checkboxes.forEach(checkbox => checkbox.setAttribute("checked", "true"));
  }, [])

  return (<>
    <div>
      <h2>Price:</h2>
      <form>
      <div>
          <input
            type="radio"
            id="priceall"
            name="price"
            value="priceall"
            onChange={handleOptionChange}
          />
          <label htmlFor="priceall">all</label>
        </div>

        <div>
          <input
            type="radio"
            id="500"
            name="price"
            value="500"
            onChange={handleOptionChange}
          />
          <label htmlFor="500">0-500</label>
        </div>

        <div>
          <input
            type="radio"
            id="1000"
            name="price"
            value="1000"
            onChange={handleOptionChange}
          />
          <label htmlFor="1000">500-1000</label>
        </div>

        <div>
          <input
            type="radio"
            id="1001"
            name="price"
            value="1001"
            onChange={handleOptionChange}
          />
          <label htmlFor="1001">over 1001</label>
        </div>
      </form>
    </div>

    <div>
  <h2>Type of Products:</h2>
  <form>
  <div>
      <input
        type="radio"
        id="typeall"
        name="productType"
        value="typeall"
        onChange={handleType}
      />
      <label htmlFor="typeall">all</label>
    </div>
    <div>
      <input
        type="radio"
        id="phone"
        name="productType"
        value="phone"
        onChange={handleType}
      />
      <label htmlFor="phone">Phone</label>
    </div>

    <div>
      <input
        type="radio"
        id="laptop"
        name="productType"
        value="laptop"
        onChange={handleType}
      />
      <label htmlFor="laptop">Laptop</label>
    </div>

    <div>
      <input
        type="radio"
        id="camera"
        name="productType"
        value="camera"
        onChange={handleType}
      />
      <label htmlFor="camera">Camera</label>
    </div>

    <div>
      <input
        type="radio"
        id="clothers"
        name="productType"
        value="clothers"
        onChange={handleType}
      />
      <label htmlFor="clothers">Clothes</label>
    </div>

    <div>
      <input
        type="radio"
        id="other"
        name="productType"
        value="other"
        onChange={handleType}
      />
      <label htmlFor="other">other</label>
    </div>
  </form>
</div>

<div>
  <h2>Style:</h2>
  <form>
  <div>
      <input
        type="radio"
        id="styleall"
        name="productStyle"
        value="all"
        onChange={handleStyle}
      />
      <label htmlFor="all">all</label>
    </div>
    <div>
      <input
        type="radio"
        id="black"
        name="productStyle"
        value="black"
        onChange={handleStyle}
      />
      <label htmlFor="black">black</label>
    </div>

    <div>
      <input
        type="radio"
        id="white"
        name="productStyle"
        value="white"
        onChange={handleStyle}
      />
      <label htmlFor="white">white</label>
    </div>

    <div>
      <input
        type="radio"
        id="red"
        name="productStyle"
        value="red"
        onChange={handleStyle}
      />
      <label htmlFor="red">red</label>
    </div>

    <div>
      <input
        type="radio"
        id="grey"
        name="productStyle"
        value="grey"
        onChange={handleStyle}
      />
      <label htmlFor="grey">grey</label>
    </div>

    <div>
      <input
        type="radio"
        id="other"
        name="productStyle"
        value="other"
        onChange={handleStyle}
      />
      <label htmlFor="other">other</label>
    </div>
  </form>
</div>

    </>
  );
};

export default Sidebar;
