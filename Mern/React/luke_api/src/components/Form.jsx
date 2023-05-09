import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [select, setSelect] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-template-curly-in-string
    navigate(`/${select}/${id}`);
  };
  return (
    <>
      <div>
        <h1>KERKO ME ID</h1>

        <form onSubmit={handleSubmit}>
          <label>Search for:</label>
          <select id="select" onChange={(e) => setSelect(e.target.value)}>
            <option value="">------</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          <label htmlFor="id">Vendos Id</label>
          <input type="text " onChange={(e) => setId(e.target.value)} />
          <button type="submit">Kerko</button>
        </form>
      </div>
    </>
  );
};
export default Form;
