import { getTime } from "./time-helper";

test("getTime", () => {
  const result = getTime(1658442300);
  expect(result).toStrictEqual({
    weekday: "Friday",
    day: "22",
    month: "July",
    year: "2022",
    hour: "12 :",
    minute: "25",
  });
});
