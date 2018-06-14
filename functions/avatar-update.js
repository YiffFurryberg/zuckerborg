const fs = require("fs");
const path = require("path");
const moment = require("moment-timezone");

module.exports = function(user) {
    let time = moment().tz("America/Chicago").format("MMMM Do YYYY, h:mm:ss a");
    fs.appendFile("./logs/avatar-logs.txt", `${user} updated thier avatar at ${time} \n`, function(error) {
        if(error) throw error;
    });
}