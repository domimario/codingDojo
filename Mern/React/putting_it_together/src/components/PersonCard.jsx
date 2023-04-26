import React, { useState } from "react";
import PetCard from "./Pet";
const PersonCard = (props) => {
  const { lastName, firstName, personAge, hairColor, macet } = props;
  const [age, setAge] = useState(personAge);
  const [pet, setPet] = useState(macet);

  const onDelete = (e) => {
    const filterArray = pet.filter((items, i) => {
      return i !== e;
    });
    setPet(filterArray);
  };

  return (
    <>
      <h2>
        name: {lastName}
        {firstName}
      </h2>
      <p>age : {age}</p>
      <p>hair color : {hairColor}</p>
      <button type="button" onClick={(event) => setAge(age + 1)}>
        Birthday Button for {firstName}
      </button>
      {pet.map((e, index) => (
        <div key={index}>
          <PetCard key={index} firstName={e.firstName} lastName={e.lastName} />
          <button onClick={() => onDelete(index)}>Delete the pet</button>
        </div>
      ))}
    </>
  );
};

export default PersonCard;
