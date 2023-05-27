import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CreateAuthor = (props) => {
  const { update, setUpdate } = props;
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", {
        name,
      })
      .then((res) => {
        setUpdate(!update);
        navigate(`/`);
      })
      .catch((err) => console.log(err));
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
