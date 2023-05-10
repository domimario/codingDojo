import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateItem = (props) => {
  const [userID, setUserID] = useState("");
  const [postID, setPostID] = useState("");
  const [tittle, setTittle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userID: userID,
      id: postID,
      tittle: tittle,
      body: body,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        console.log(response);
        navigate(`/`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1>Create Component</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="UserID">User ID</label>
            <input
              type="text"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="PostID">Post ID</label>
            <input
              type="text"
              value={postID}
              onChange={(e) => setPostID(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Body">Body</label>
            <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button type="submit">ADD</button>
        </form>
      </div>
    </>
  );
};

export default CreateItem;
