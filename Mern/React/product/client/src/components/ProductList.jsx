import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const ProductList = (props) => {
  const { product, setProduct } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8002/api/product")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletedFilter = (id) => {
    axios
      .delete(`http://localhost:8002/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(product.filter((product, index) => product._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h1>LISTA PRODUKTEVE </h1>
        {product.map((product, index) => {
          return (
            <p key={product._id}>
              <Link to={`/product/${product._id}`}>{product.tittle}</Link>
              <Link to={`/product/edit/${product._id}`}>Edit</Link>
              <button onClick={() => deletedFilter(product._id)}>Delete</button>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
