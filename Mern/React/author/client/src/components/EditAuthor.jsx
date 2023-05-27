import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAuthor = (props) => {
  const { id } = useParams();
  const [name, setName] = useState();
  const navigate = useNavigate();
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        setName(res.data.name);
        setloaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/api/authors/` + id, {
        name,
      })
      .then((res) => {
        console.log(res);
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancelHandler = (e) => {
    navigate(`/`);
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <Link to={`/`}>Home</Link>
        {loaded ? (
          <form onSubmit={updateHandler}>
            <h4>Edit this author</h4>
            <div className="form-group">
              <label>Name:</label>
              <input
                className=" form-control"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-around">
              <button
                onClick={cancelHandler}
                className="btn btn-outline-danger"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-outline-success">
                Submit
              </button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default EditAuthor;
