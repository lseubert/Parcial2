import React from "react";

const SpaceItem = ({ value, setCurRoom, changeComponent }) => {
  const src = value.type === "house" ? "house.jpg" : "loft.png";
  return (
    <button
      className="card"
      onClick={() => {
        setCurRoom(value.id);
        changeComponent("room");
      }}
    >
      <img className="card-img-top" src={src} alt="." />
      <div className="card-body">
        <h4 className="card-title">{value.name}</h4>
        <p className="card-text">{value.address}</p>
      </div>
    </button>
  );
};

export default SpaceItem;
