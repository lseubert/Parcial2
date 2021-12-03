import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomItem from "./RoomItem";
import RoomTable from "./RoomTable";

const RoomList = () => {
  const [space, setSpace] = useState([]);
  const [rooms, setRooms] = useState([]);

  const data = [
    {
      name: "Living room",
      homeId: "H001",
      devices: [
        {
          name: "temperature",
          desired: { value: "26", unit: "C" },
          id: "T01",
        },
        {
          name: "light01",
          id: "L01",
          desired: { value: "off", unit: "boolean" },
        },
      ],
      type: "room",
      powerUsage: { unit: "KwH", value: 0.2 },
    },
    {
      name: "Kitchen",
      homeId: "H001",
      devices: [
        {
          name: "temperature",
          desired: { value: "20", unit: "C" },
          id: "T01",
        },
        {
          name: "light1",
          id: "L01",
          desired: { value: "on", unit: "boolean" },
        },
      ],
      type: "kitcken",
      powerUsage: { unit: "KwH", value: 0.4 },
    },
    {
      name: "Dinner room",
      homeId: "H001",
      devices: [
        {
          name: "temperature",
          desired: { value: "19", unit: "C" },
          id: "T01",
        },
        {
          name: "light1",
          id: "L01",
          desired: { value: "on", unit: "boolean" },
        },
      ],
      type: "room",
      powerUsage: { unit: "KwH", value: 0.1 },
    },
  ];

  const listItems = data.map((ele) => <RoomItem key={ele.id} value={ele} />);

  return (
    <div>
      <h1>My rooms</h1>
      <div>
        <div className="list-container">{listItems}</div>
        <RoomTable data={data} />
      </div>
    </div>
  );
};

export default RoomList;
