import { getSchedule } from "./schedule";

it("should return empty schedule when no events picked", () => {
  expect(getSchedule([])).toEqual([]);
  expect(getSchedule([{ name: "Goat Petting", times: ["09:00"] }])).toEqual([
    { name: "Goat Petting", time: "09:00" }
  ]);
});
