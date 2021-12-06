import React from "react";

const RoomItem = ({ value, setRoom, list }) => {
  const src =
    value.name === "Living room"
      ? "living.jpg"
      : value.name === "Kitchen"
      ? "kitchen.jpg"
      : "dinner.jpg";
  return (
    <button
      className="card"
      onClick={() => {
        const res = list.find((ele) => ele.name === value.name);
        setRoom(res);
      }}
    >
      <h4 className="card-title">{value.name}</h4>
      <img src={src} alt={value.name} />
    </button>
  );
};

export default RoomItem;
