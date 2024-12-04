const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const allMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const formattedDate = today.getDate().toString().padStart(2, '0');

date.innerHTML = formattedDate;
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
