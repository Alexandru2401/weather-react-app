const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const dayIndex = date.getDay();
const months = date.getMonth();
export const monthDay = date.getDate();
console.log(monthDay)
export let day;
switch (dayIndex) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    throw new Error("Invalid day index");
}

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

export let formattedHours = 0;

if (hours < 10) {
  formattedHours = `0${hours}`;
} else {
  formattedHours = hours;
}

export let formattedMinutes;

if (minutes < 10) {
  formattedMinutes = `0${minutes}`;
} else {
  formattedMinutes = minutes;
}
