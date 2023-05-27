import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AuthorList = (props) => {
  const { author, setAuthor, update, setUpdate } = props;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
      })
      .catch((err) => console.log(err));
  }, [update]);

  const DeleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/` + id)
      .then((res) => {
        setUpdate(!update);
      })
      .catch((err) => console.log(err));
  };

  const EditAuthor = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <div className="row">
        <Link to={`/new`}>
          <h4>Add an author</h4>
        </Link>

        <h4>We have qoutes by :</h4>
        {
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">AUTHOR</th>
                <th scope="col">ACTION AVAILABLE</th>
              </tr>
            </thead>
            <tbody>
              {author.map((author, index) => (
                <tr key={index}>
                  <td>{author.name}</td>
                  <td className="d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-outline-info"
                      onClick={(e) => {
                        EditAuthor(author._id);
                      }}
                    >
                      EDIT
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={(e) => {
                        DeleteAuthor(author._id);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </>
  );
};
export default AuthorList;
