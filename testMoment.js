var moment = require('moment');

var date = new Date();
console.log(typeof date);
console.log(moment(date.toString()).format('YYYY-MM-DD HH:mm:ss'));