import {
  getSchedule,
  isTimeAvailable,
  minutesToTime,
  timeInMinutes
} from "./schedule";

const events = {
  a: {
    name: "A",
    duration: 45,
    times: ["09:00"]
  },
  b: {
    name: "B",
    duration: 45,
    times: ["09:00", "10:00"]
  },
  c: {
    name: "C",
    duration: 45,
    times: ["09:00", "10:00", "11:00"]
  }
};

const schEvents = {
  a_9: { name: "A", duration: 45, time: "09:00" },
  b_9: { name: "B", duration: 45, time: "09:00" },
  b_10: { name: "B", duration: 45, time: "10:00" },
  c_9: { name: "C", duration: 45, time: "09:00" },
  c_10: { name: "C", duration: 45, time: "10:00" },
  c_11: { name: "C", duration: 45, time: "11:00" }
};

it("should get time as minutes", () => {
  expect(timeInMinutes("01:00")).toBe(60);
  expect(timeInMinutes("02:01")).toBe(121);
  expect(timeInMinutes("12:30")).toBe(750);
});

it("should get time string from minutes", () => {
  expect(minutesToTime(60)).toBe("01:00");
  expect(minutesToTime(121)).toBe("02:01");
  expect(minutesToTime(750)).toBe("12:30");
});

it("should see if time slot is available", () => {
  expect(isTimeAvailable("9:00", 60, [])).toBe(true);
  expect(isTimeAvailable("10:00", 60, [schEvents.a_9])).toBe(true);
  expect(isTimeAvailable("09:00", 60, [schEvents.a_9])).toBe(false);
  expect(isTimeAvailable("10:00", 60, [schEvents.a_9, schEvents.b_10])).toBe(
    false
  );
});

it("should return empty schedule when no events picked", () => {
  expect(getSchedule([])).toEqual([]);
  expect(getSchedule([events.a])).toEqual([schEvents.a_9]);
  expect(getSchedule([events.a, events.b, events.c])).toEqual([
    schEvents.a_9,
    schEvents.b_10,
    schEvents.c_11
  ]);
});
