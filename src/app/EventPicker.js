import React, { useState } from "react";

export default function EventPicker({ events, onPickEvents }) {
  const [pickedEvents, setPickedEvents] = useState([]);

  function onChange(name, isChecked) {
    const pickedEventsWithoutEvent = pickedEvents.filter(
      event => event.name !== name
    );
    if (!isChecked) {
      setPickedEvents(pickedEventsWithoutEvent);
      onPickEvents(pickedEventsWithoutEvent);
      return;
    }
    const newPickedEvents = pickedEventsWithoutEvent.concat(
      events.find(event => event.name === name)
    );
    setPickedEvents(newPickedEvents);
    onPickEvents(newPickedEvents);
  }

  function isChecked(name) {
    return pickedEvents.find(event => event.name === name) || false;
  }

  return (
    <fieldset>
      <legend>
        Pick the activities you would like to schedule during your visit.
      </legend>

      {events.map(event => (
        <div>
          <input
            type="checkbox"
            id={event.name}
            onChange={({ target }) => onChange(event.name, target.checked)}
            checked={isChecked(event.name)}
          />
          <label for="{event.name}">{event.name}</label>
        </div>
      ))}
    </fieldset>
  );
}
