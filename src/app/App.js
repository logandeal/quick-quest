import React, { useState } from "react";

import EventPicker from "./EventPicker";
import Schedule from "./Schedule";

import events from "../data/events.json";

import "../styles.css";

events.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }

  if (b.name > a.name) {
    return 1;
  }

  return 0;
});

export default function App() {
  const [pickedEvents, setPickedEvents] = useState([]);

  return (
    <div className="App">
      <h1>Zoo Scheduler</h1>
      <EventPicker events={events} onPickEvents={setPickedEvents} />
      <Schedule pickedEvents={pickedEvents} />
    </div>
  );
}
