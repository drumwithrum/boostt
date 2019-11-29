import moment from 'moment';
export const monthNames = [
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
  'December',
];

export const getMonthName = (date) => moment(date).format('MMMM');

export const getFormattedDate = (date, dateFormat = 'D MMMM') => {
  return `${moment(date).format(dateFormat)}`;
};

export const getHour = (date) => {
  const hours = moment(date).hours();
  const minutes = moment(date).minutes();
  const suffix = hours >= 12 ? 'pm' : 'am';
  let hour = hours % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  return `${hour}:${minute}${suffix}`;
}

