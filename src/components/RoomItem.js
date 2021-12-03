import React from "react";

const RoomItem = ({ value }) => {
  console.log(value);
  return (
    <button className="space-item">
      <h2>{value.name}</h2>
      <img src="loft.png" alt="." />
    </button>
  );
};

export default RoomItem;
