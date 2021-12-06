import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import RoomItem from "./RoomItem";
import RoomTable from "./RoomTable";
import PieChart from "./PieChart";

const RoomList = ({ data }) => {
  const [room, setRoom] = useState({});

  const listItems = data.map((ele, index) => (
    <RoomItem key={index} value={ele} setRoom={setRoom} list={data} />
  ));

  const renderData = () => {
    return data.map((ele) => {
      const tmp = (({ name, powerUsage }) => ({ name, powerUsage }))(ele);

      return {
        name: tmp.name,
        value: tmp.powerUsage.value,
      };
    });
  };

  return (
    <div className="wrapper">
      <h1>
        <FormattedMessage id="MyRooms" />
      </h1>
      <div className="room-row">
        <div className="room-container">{listItems}</div>
        <RoomTable room={room} />
      </div>
      <div className="stats-container">
        <h2>
          <FormattedMessage id="Stats" />
        </h2>
        <PieChart data={renderData()} />
      </div>
    </div>
  );
};

export default RoomList;
