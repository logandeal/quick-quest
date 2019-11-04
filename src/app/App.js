import React from "react";
import EventPicker from "./EventPicker";

import events from "../data/events.json";

import "../styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Zoo Scheduler</h1>
      <EventPicker events={events} />
    </div>
  );
}
