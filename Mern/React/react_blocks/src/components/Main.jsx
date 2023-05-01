import React from "react";
import Subcontents from "./Subcontents";
import Advertisment from "./Advertisment";

const Main = (props) => {
  return (
    <>
      <div className="main">
        <div className="subcontent">
          <Subcontents />
        </div>
        <div className="subcontent">
          <Subcontents />
        </div>
        <div className="subcontent">
          <Subcontents />
        </div>
        <div id="advertisment">
          <Advertisment />
        </div>
      </div>
    </>
  );
};

export default Main;
