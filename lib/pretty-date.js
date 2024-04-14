const moment = require('moment');

const prettyDate = (date, format = 'MMMM Do YYYY') => {
    return moment(date).format(format);
}

module.exports = prettyDate;
