export const LightYearToMiles = (lightyear: number): string => {
  return (lightyear * 5878600000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const massComparedToEarth = (mass: number): string => {
  return (mass * 5.9 / 1.8565 * 10 ** 2).toFixed(2).toString()

}