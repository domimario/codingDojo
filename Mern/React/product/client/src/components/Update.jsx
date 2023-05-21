import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Update = (props) => {
  const { id } = useParams();
  const [tittle, setTittle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8002/api/product/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTittle(res.data.tittle);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8002/api/product/${id}`, {
        tittle,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/product");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h1>Update a Product</h1>

        <form onSubmit={submitHandler}>
          <div className="form-fields">
            <label>Title</label>
            <input
              type="text"
              name="title"
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

          <button type="submit">UPDATE</button>
        </form>
      </div>
    </>
  );
};

export default Update;
