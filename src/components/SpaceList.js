import React, { useEffect, useState } from "react";
import axios from "axios";
import SpaceItem from "./SpaceItem";

const SpaceList = () => {
  const [space, setSpace] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [curRoom, setCurRoom] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const result = await axios(
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
      );
      const rooms = await axios(
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
      );

      setSpace(result.data);
      setRooms(rooms.data);
    };
    fetchApi();
  }, []);

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     console.log(e.target);
  //     setCurRoom();

  //     const ele = rooms.find((ele) => (ele.name = e.name));
  //   };
  const test = (id) => {
    //setCurRoom(id);
    console.log(id);
    //console.log(id);
  };

  const listItems = space.map((ele) => (
    <SpaceItem id={ele.id} key={ele.id} value={ele} handleClick={test} />
  ));

  return (
    <div>
      <h1>My Spaces</h1>
      <div className="list-container">{listItems}</div>
    </div>
  );
};

export default SpaceList;
