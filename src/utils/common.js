const _ = require('lodash');
const cronParser = require('cron-parser');

function generateTimetable(startDate, totalOccurrences, cronExpressions) {
  const dates = [];

  while (_.size(dates) < totalOccurrences) {
    _.map(cronExpressions, (items, index) => {
      const interval = cronParser.parseExpression(cronExpressions[index], {
        currentDate: _.last(dates) || new Date(startDate),
      });
      const nextDate = interval.next();
      if (_.size(dates) < totalOccurrences) dates.push(nextDate.toISOString());
    });
  }
  return dates;
}
module.exports = {
  generateTimetable,
};
