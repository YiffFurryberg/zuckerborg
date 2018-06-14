const fs = require("fs");
const path = require("path");
const moment = require("moment-timezone");

module.exports = function(user, serverName) {
    let time = moment().tz("America/Chicago").format("MMMM Do YYYY, h:mm:ss a");
    fs.appendFile("./logs/member-logs.txt", `${user} joined ${serverName} at ${time} \n`, function(error) {
        if(error) throw error;
    });
}