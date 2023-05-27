import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CreateAuthor = (props) => {
  const { update, setUpdate } = props;
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError({ name: "Name should be at least 3 characters long" });
    } else {
      axios
        .post("http://localhost:8000/api/authors", {
          name,
        })
        .then((res) => {
          setUpdate(!update);
          navigate(`/`);
        })
        .catch((err) => {
          setError(err.response.data.errors.name.message);
        });
    }
  };
  const cancelHandler = (e) => {
    navigate(`/`);
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <Link to={`/`}>Home</Link>
        <form onSubmit={onSubmitHandle}>
          <h4>Add a new author</h4>
          <div className="form-group">
            <label>Name:</label>
            <input
              className=" form-control"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {error.name ? <p>{error.name}</p> : null}
          <div className="d-flex justify-content-around">
            <button onClick={cancelHandler} className="btn btn-outline-danger">
              Cancel
            </button>
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreateAuthor;
