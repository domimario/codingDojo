import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Planet = (props) => {
  const { id } = useParams(props);
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((response) => {
        setError(false);
        console.log(response.data);
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);

  if (!error) {
    return (
      <>
        <div>
          <h1>{apiData.name}</h1>
          <p>clima : {apiData.climate}</p>
          <p>terreni : {apiData.terrain}</p>
          <p>uji : {apiData.surface_water}</p>
          <p>popullsia : {apiData.population}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img
          style={{ height: "400px", width: "400px" }}
          src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg"
          alt=""
        />
        <p>These arent the droids you're looking for</p>
      </>
    );
  }
};
export default Planet;
