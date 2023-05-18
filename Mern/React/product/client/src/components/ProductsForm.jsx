import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
  const [tittle, setTittle] = useState("");
  const [price, setPrice] = useState(Number);

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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>PRODUCT</h2>
      <form onSubmit={onSubmitHandle}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Tittle</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputTittle"
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPrice"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputDescription"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default ProductForm;
