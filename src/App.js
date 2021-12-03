import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SpaceList from "./components/SpaceList";
import RoomsList from "./components/RoomsList";

function App() {
  //const [component, setComponent] = useState('start')

  return (
    <div>
      <SpaceList />
      <RoomsList />
    </div>
  );
}

export default App;
