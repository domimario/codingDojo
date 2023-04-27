import React, { useState } from "react";

const Box = (props) => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);
  const [size, setSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxes([...boxes, { color, size }]);
    setColor("");
    setSize("");
  };

  const boxStyles = {
    display: "flex",
    flexWrap: "wrap",
  };

  const boxStylesSize = (box) => ({
    backgroundColor: box.color,
    width: `${box.size}px`,
    height: `${box.size}px`,
    margin: "5px",
  });

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ margin: "100px" }}>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          Size:
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <div style={boxStyles}>
        {boxes.map((box, index) => (
          <div key={index} style={boxStylesSize(box)}></div>
        ))}
      </div>
    </div>
  );
};

export default Box;
