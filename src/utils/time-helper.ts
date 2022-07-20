// @FIXME test!!!
export const getTime = (unixTimestamp: number) => {
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);

  return {
    weekday: dateObject.toLocaleString("en-US", { weekday: "long" }),
    day: dateObject.toLocaleString("en-US", { day: "numeric" }),
    month: dateObject.toLocaleString("en-US", { month: "long" }),
    year: dateObject.toLocaleString("en-US", { year: "numeric" }),
    hour: dateObject
      .toLocaleString("en-US", { hour: "numeric" })
      .replace(/AM|PM/, ":"),
    minute: dateObject.toLocaleString("en-US", { minute: "numeric" }),
  };
};
