import React, { useState } from "react";
import ProductForm from "../components/ProductsForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [product, setProduct] = useState([]);

  return (
    <>
      <div>
        <h1>Main View</h1>
        <ProductForm product={product} setProduct={setProduct} />
        <ProductList product={product} setProduct={setProduct} />
      </div>
    </>
  );
};

export default Main;
