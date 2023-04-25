import React from "react";

const PetCard = (props) => {
  const { lastName, firstName } = props;

  return (
    <>
      <h5>
        pet: {lastName} {firstName}
      </h5>
    </>
  );
};

export default PetCard;
