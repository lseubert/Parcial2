import React, { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SpaceList from "./components/SpaceList";
import RoomsList from "./components/RoomsList";
import Header from "./components/Header";
import localeEsMessages from "./locales/es";
import localeDeMessages from "./locales/de";
import localeEnMessages from "./locales/en";

function App() {
  const [component, setComponent] = useState("space");
  const [roomData, setRoomData] = useState([]);

  const [space, setSpace] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [curRoom, setCurRoom] = useState({});
  const [language, setLanguage] = useState("en");

  let messages;

  switch (language) {
    case "en":
      messages = localeEnMessages;
      break;
    case "es":
      messages = localeEsMessages;
      break;
    case "de":
      messages = localeDeMessages;
      break;
    default:
      messages = localeEnMessages;
  }

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("space") === null) {
        setSpace("Loading...");
      } else {
        setSpace(JSON.parse(localStorage.getItem("space")));
      }
      if (localStorage.getItem("rooms") === null) {
        setRooms("Loading...");
      } else {
        setRooms(JSON.parse(localStorage.getItem("rooms")));
      }
    } else {
      (async () => {
        const result = await axios(
          "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
        );
        const rooms = await axios(
          "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
        );

        setSpace(result.data);
        setRooms(rooms.data);
        localStorage.setItem("space", JSON.stringify(result.data));
        localStorage.setItem("rooms", JSON.stringify(rooms.data));
      })();
    }
  }, []);

  const filterData = (id) => {
    return rooms.filter((ele) => ele.homeId === id);
  };

  useEffect(() => {
    const data = filterData(curRoom);
    setRoomData(data);
  }, [curRoom]);

  console.log(language);

  return (
    <IntlProvider locale={language} messages={messages}>
      <Header setComponent={setComponent} setLanguage={setLanguage} />
      <div>
        {component === "space" && (
          <SpaceList
            changeComponent={setComponent}
            space={space}
            rooms={rooms}
            setCurRoom={setCurRoom}
          />
        )}

        {component === "room" && <RoomsList data={roomData} />}
      </div>
    </IntlProvider>
  );
}

export default App;
