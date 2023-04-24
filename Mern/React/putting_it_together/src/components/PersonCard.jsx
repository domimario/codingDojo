import React, { useState } from "react";

const PersonCard = (props) => {
  const{lastName, firstName, personAge, hairColor}=props
  const [age, setAge] = useState(personAge);

  return (
    <div>
      <h2>
        Name:{lastName} {firstName}
      </h2>
      <p>Age:{age}</p>
      <p>Hair Color: {hairColor}</p>
      <button type="button" onClick={(event) => setAge(age + 1)}>
        Birthday Button for {firstName}
      </button>
    </div>
  );
};

export default PersonCard;
