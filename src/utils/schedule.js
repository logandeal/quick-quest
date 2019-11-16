export function timeInMinutes(time) {
  const [hoursString, minutesString] = time.split(":");
  return parseInt(hoursString, 10) * 60 + parseInt(minutesString, 10);
}

export function minutesToTime(m) {
  const hours = m / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  const hoursString = `${rhours}`;
  const minutesString = `${rminutes}`;
  return hoursString.padStart(2, 0) + ":" + minutesString.padStart(2, 0);
}

export function isTimeAvailable(time, duration, schedule) {
  const start = timeInMinutes(time);
  const end = start + duration;
  for (const item of schedule) {
    const itemStart = timeInMinutes(item.time);
    const itemEnd = itemStart + item.duration;
    if (start <= itemStart && end >= itemEnd) {
      return false;
    }
    if (start >= itemStart && start <= itemEnd) {
      return false;
    }
    if (end >= itemStart && end <= itemEnd) {
      return false;
    }
  }
  return true;
}

function findSchedule(schedule = [], pickedEvents) {
  if (pickedEvents.length === 0) {
    return schedule;
  }
  const event = pickedEvents[0];
  const nextEvents = pickedEvents.slice(1);
  for (const time of event.times) {
    if (isTimeAvailable(time, event.duration, schedule)) {
      const newSchedule = schedule.concat({
        name: event.name,
        duration: event.duration,
        time: minutesToTime(timeInMinutes(time))
      });
      const maybeSchedule = findSchedule(newSchedule, nextEvents);
      if (maybeSchedule.length > 0) {
        return maybeSchedule;
      }
    }
  }
  return [];
}

export function getSchedule(pickedEvents) {
  return findSchedule([], pickedEvents);
}
