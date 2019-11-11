import React from "react";
import { getSchedule } from "../utils/schedule";

export default function Schedule({ pickedEvents }) {
  return (
    <div>
      <ul>
        {getSchedule(pickedEvents).map(event => (
          <li>
            {event.name}: {event.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
