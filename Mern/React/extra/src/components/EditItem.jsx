import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditItem = (props) => {
  const { id } = useParams();
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setUserID(response.data.userId);
        setTitle(response.data.title);
        setBody(response.data.body);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const EditPost = (e) => {
    e.preventDefault();

    const editedPost = {
      userId: userID,
      id: id,
      title: title,
      body: body,
    };

    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${editedPost.id}`,
        editedPost
      )
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const DeletePost = (e) => {
    e.preventDefault();

    const editedPost = {
      userId: userID,
      id: id,
      title: title,
      body: body,
    };

    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${editedPost.id}`)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Edit post {id}</h1>
      <form onSubmit={EditPost}>
        <div>
          <label>User id: </label>
          <input
            type="number"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>
            Body:
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </label>
        </div>
        <button type="submit">EDIT</button>
        <button onClick={DeletePost}>Delete</button>
      </form>
    </>
  );
};

export default EditItem;
