import React from "react";
import { FormattedMessage } from "react-intl";
import SpaceItem from "./SpaceItem";

const SpaceList = ({ changeComponent, setCurRoom, space, rooms }) => {
  const listItems = space.map((ele) => (
    <SpaceItem
      id={ele.id}
      key={ele.id}
      value={ele}
      setCurRoom={setCurRoom}
      changeComponent={changeComponent}
    />
  ));

  return (
    <div className="wrapper">
      <h1>
        <FormattedMessage id="MySpaces" />
      </h1>
      <div className="list-container">{listItems}</div>
    </div>
  );
};

export default SpaceList;
