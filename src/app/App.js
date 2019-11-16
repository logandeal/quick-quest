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
      <h1>----------- QuickQuest -----------</h1>
      <h3>Streamline your Day</h3>
      <h4>Featuring Google/Apple Maps and Voice Recognition</h4>
      <EventPicker events={events} onPickEvents={setPickedEvents} />
      <p>*Click here to customize scheduling options*</p>
      <Schedule pickedEvents={pickedEvents} />
    </div>
  );
}
