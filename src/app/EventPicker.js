import React, { useState } from "react";

export default function EventPicker({ events }) {
  const [pickedEvents, setPickedEvents] = useState([]);

  function onChange(name, isChecked) {
    const pickedEventsWithoutEvent = pickedEvents.filter(
      event => event.name !== name
    );
    if (!isChecked) {
      return setPickedEvents(pickedEventsWithoutEvent);
    }
    return setPickedEvents(
      pickedEventsWithoutEvent.concat(events.find(event => event.name === name))
    );
  }

  function isChecked(name) {
    return pickedEvents.find(event => event.name === name) || false;
  }

  return (
    <div>
      <ul>
        {events.map(event => (
          <li>
            <input
              type="checkbox"
              id={event.name}
              onChange={({ target }) => onChange(event.name, target.checked)}
              checked={isChecked(event.name)}
            />
            <label for="{event.name}">{event.name}</label>
          </li>
        ))}
      </ul>
      Picked: {pickedEvents.map(event => event.name).join(", ")}
    </div>
  );
}
