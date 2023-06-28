import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAuthor = (props) => {
  const { id } = useParams();
  const [name, setName] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8002/api/authors/" + id)
      .then((res) => {
        setName(res.data.name);
        setloaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError({ name: "Name should be at least 3 characters long" });
    } else {
      axios
        .patch(`http://localhost:8002/api/authors/` + id, {
          name,
        })
        .then((res) => {
          console.log(res);
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
            {error.name ? <p>{error.name}</p> : null}
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


module.exports.createPirat = (req, res) => {
  Pirat.create(req.body)
    .then((newPirat) => {
      console.log(newPirat);
      res.json(newPirat);
    })
    .catch((err) => res.status(400).json(err));
};