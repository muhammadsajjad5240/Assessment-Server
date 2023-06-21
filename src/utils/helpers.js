const httpStatus = require('http-status');
const ApiError = require('./ApiError');

const REGEX_FOR_COURSE_CODE = /^([A-Z][A-Z][A-Z]-[1-3]-[B,I,E]-[0-9][0-9][0-9])$/;
const VALID_DAYS_OF_WEEK = /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/;
const REGEX_FOR_PHONE_NUMBER = /^\+[1-9]\d{1,11}$/;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getPaginateQuery(sizeSent, pageNoSent) {
  return new Promise((resolve) => {
    const size = +sizeSent;
    const pageNo = +pageNoSent;
    const query = {};
    if (+pageNo < 0 || +pageNo === 0) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid page no, should start with 1');
    }
    query.skip = +size * (+pageNo - 1);
    query.limit = +size;
    resolve(query);
  });
}

module.exports = {
  REGEX_FOR_COURSE_CODE,
  REGEX_FOR_PHONE_NUMBER,
  VALID_DAYS_OF_WEEK,
  getRndInteger,
  getPaginateQuery,
};
