import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Detail = (props) => {
  const [oneProduct, setOneProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8002/api/product/" + id)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setOneProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deletedFilter = (id) => {
    axios
      .delete(`http://localhost:8002/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/product");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <p>Product Tittle: {oneProduct.tittle}</p>
        <p>Product Price: {oneProduct.price}</p>
        <p>Product Description : {oneProduct.description}</p>
        <button onClick={() => deletedFilter(oneProduct._id)}>Delete</button>
      </div>
    </>
  );
};

export default Detail;
