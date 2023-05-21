import React, { useState } from "react";
import axios from "axios";


const ProductForm = (props) => {
  const { product, setProduct } = props;
  const [tittle, setTittle] = useState("");
  const [price, setPrice] = useState(" ");
  const [description, setDescription] = useState("");

  const onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8002/api/product", {
        tittle,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct([...product, res.data]);
        setTittle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>PRODUCT</h2>
      <form onSubmit={onSubmitHandle}>
        <div className="form-fields">
          <label>Tittle</label>
          <input
            type="text"
            name="tittle"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
          />
        </div>

        <div className="form-fields">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-fields">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default ProductForm;
