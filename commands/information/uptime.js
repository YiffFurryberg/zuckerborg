const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: "uptime",
            group: "information",
            memberName: "uptime",
            description: "The uptime of Zuckerborg.",
            examples: [">uptime"]
        });
    }
    run(message) {
        let totalSeconds = (this.client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        const embed = new RichEmbed()
            .setColor(0x003B5998)
            .setTitle("Zuckerborg Uptime")
            .setDescription(uptime);
        message.say(embed);
    }
}