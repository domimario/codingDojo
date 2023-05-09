import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const People = (props) => {
  const { id } = useParams(props);
  const [apiData, setApiData] = useState({});
  const [homeworld, setHomeworld] = useState("");
  const [homeworldId, setHomeworldId] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setError(false);
        console.log(response.data);
        setApiData(response.data);
        getHomeworldId(response.data.homeworld);
        axios
          .get(response.data.homeworld)
          .then((homeworldRes) => {
            console.log(homeworldRes.data.name);
            setHomeworld(homeworldRes.data.name);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);

  const getHomeworldId = (homeworldURL) => {
    const id = homeworldURL.split("/").slice(-2, -1)[0];
    setHomeworldId(id);
  };

  if (!error) {
    return (
      <>
        <div>
          <h1>{apiData.name}</h1>
          <p>Pesha : {apiData.height}</p>
          <p>Ngjyra Syve : {apiData.eye_color}</p>
          <p>Ngjyra Flokeve : {apiData.hair_color}</p>
          <p>Ngjyra Lekures : {apiData.skin_color}</p>
          <p>Homeworld: {homeworld}</p>
          <Link to={`/planets/${homeworldId}`}>homeworld</Link>
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
export default People;
