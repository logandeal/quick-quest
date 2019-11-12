import React from "react";
import { getSchedule } from "../utils/schedule";

export default function Schedule({ pickedEvents }) {
  const schedule = getSchedule(pickedEvents);

  schedule.sort((a, b) => {
    if (a.time < b.time) {
      return -1;
    }

    if (b.time < a.time) {
      return 1;
    }

    return 0;
  });

  if (pickedEvents.length === 0) {
    return null;
  }

  return (
    <div>
      <table className="Schedule_Table">
        <caption className="Schedule_Caption">Your Schedule</caption>
        {schedule.map(event => (
          <tr>
            <td className="Schedule_EventName">{event.name}</td>
            <td>{event.time}</td>
            <td>{event.duration}min</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
