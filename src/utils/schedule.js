export function getSchedule(pickedEvents) {
  if (pickedEvents.length > 0 && pickedEvents[0].times.length > 0) {
    return [{ name: pickedEvents[0].name, time: pickedEvents[0].times[0] }];
  }
  return [];
}
