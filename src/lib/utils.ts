const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function getDateString(unixtime: number) {
  const date = new Date(unixtime * 1000);
  const month_name = months[date.getMonth()];
  return `${date.getDay()} ${month_name}, ${date.getFullYear()}`;
}
