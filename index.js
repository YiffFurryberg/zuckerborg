/*
* Yiff Furryberg 2018
*/
// Require modules
const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const moment = require("moment-timezone");
const download = require("image-downloader");

// Require files
const config = require("./config.json");
const logStartup =  require("./functions/startup.js");
const logMemberJoin = require("./functions/member-join.js");
const logMemberLeave = require("./functions/member-leave.js");
const logServerJoin = require("./functions/server-join.js");
const logServerLeave = require("./functions/server-leave.js");
const logAvatarChange = require("./functions/avatar-update.js");
const staff = require("./staff.js");

// SQLite
// Client instance
const client = new CommandoClient({
    commandPrefix: config.prefix,
    owner: config.ownerID,
    disableEveryone: true
});

// Client registry
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['information', 'information'],
        ['administration', 'administration'],
        ['fun', 'fun'],
        ['users', 'users']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

// Client ready
client.on("ready", () => {
    console.log("Bot started at " + moment().tz("America/Chicago").format("MMMM Do YYYY, h:mm:ss a"));
    logStartup();
    client.user.setActivity("Facebook User Data Salesman");
});

// Client joins a server
client.on("guildCreate", guild => {
    logServerJoin(guild.name);
});

// Client leaves a server
client.on("guildDelete", guild => {
    logServerLeave(guild.name);
});
// User joins a server
client.on("guildMemberAdd", member => {
    logMemberJoin(member.displayName, member.guild.name);
});

// User leaves a server
client.on("guildMemberRemove", member => {
    logMemberLeave(member.displayName, member.guild.name);
});

// Admins/Mods changes avatar
const ids = staff.map(function(users) {
    return users.id;
});

client.on("userUpdate", (oldUser, newUser) => {
    if(ids.includes(oldUser.id)) {
        const options = {
            url: newUser.displayAvatarURL,
            dest: './media/avatars/' + newUser.id + '.png'
        }
        download.image(options).then(({ filename, image }) => {
            console.log("Image saved");
            logAvatarChange(newUser.displayName);
        }).catch(error => {
            console.log(error);
        });
    }
});

// Log in
client.login(config.token);