import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
  const { product, setProduct } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8002/api/product")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        {product.map((product, index) => {
          return (
            <p key={index}>
              <Link to={`/product/${product._id}`}>{product.tittle}</Link>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
