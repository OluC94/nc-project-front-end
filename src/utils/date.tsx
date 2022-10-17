export const unixToDate = (unixTime: number): String => {
  const parsed = new Date(unixTime);
  const time = `${parsed.getHours()}:${parsed.getMinutes()}`;
  const date = `${parsed.toLocaleDateString()}`;
  const today = new Date(Date.now()).toLocaleDateString();
  return `${time} ${date === today ? "Today" : date}`;
};

console.log(unixToDate(666005356742));
