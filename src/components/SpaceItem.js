import React from "react";

const SpaceItem = ({ value, handleClick }) => {
  const src = value.type === "house" ? "house.jpg" : "loft.png";
  return (
    <button className="space-item" onClick={handleClick(value.id)}>
      <img src={src} alt="." />
      <h2>{value.name}</h2>
      <p>{value.address}</p>
    </button>
  );
};

export default SpaceItem;
