export const unixToDate = (unixTime: number): String => {
  const parsed = new Date(unixTime);
  const time = `${parsed.getHours()}:${parsed.getMinutes()}`;
  const date = `${parsed.toLocaleDateString()}`;
  const today = new Date(Date.now()).toLocaleDateString();
  return `${time} ${date === today ? "Today" : date}`;
};

export const dateToUnix = (date: string): number => {
  const parsed = new Date(date);
  return parsed.getTime() / 1000;
};
