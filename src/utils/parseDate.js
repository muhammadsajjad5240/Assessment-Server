const moment = require('moment');
const httpStatus = require('http-status');
const ApiError = require('./ApiError');

const parseDateToUserTimeZone = (date, timeZone) => {
  if (!moment(date).isValid()) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Date is invalid.');
  }
  const parseDate = moment(date).tz(timeZone).format('YYYY-MM-DD HH:mm');
  return parseDate;
};

module.exports = {
  parseDateToUserTimeZone,
};
