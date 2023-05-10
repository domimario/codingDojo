import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/edit/${item.id}`}>
              <h4>Post {index + 1}</h4>
            </Link>
            <p>User Id: {item.userId}</p>
            <p>Id: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
