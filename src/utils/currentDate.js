const date = new Date();
export const hours = date.getHours();
export const minutes = date.getMinutes();
export const day = date.getDay();

const months = date.getMonth();

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export let currentMonths = month[months];
