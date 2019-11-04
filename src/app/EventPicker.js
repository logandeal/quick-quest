import React from "react";

export default function EventPicker({ events }) {
  return (
    <ul>
      {events.map(event => (
        <li>{event.name}</li>
      ))}
    </ul>
  );
}
