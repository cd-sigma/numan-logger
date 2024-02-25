const moment = require("moment-timezone");

function getCurrentIndianTime() {
    return moment().tz("Asia/Kolkata").format('DD-MM-YYYY h:mm:ss a');
}

module.exports = {
    getCurrentIndianTime: getCurrentIndianTime
}