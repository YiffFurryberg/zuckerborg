const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: "help",
            group: "information",
            memberName: "help",
            description: "List of commands for Zuckerborg.",
            examples: [">help"]
        });
    }
    run(message) {
        const embed = new RichEmbed()
            .setColor(0x003B5998)
            .setTitle("Zuckerborg Help")
            .setFooter("https://yifffurryberg.github.io/commands.html")
            .addField(">help", " - List of commands for Zuckerborg.")
            .addField(">author", " - The author of Zuckerborg.")
            .addField(">uptime", " - The uptime of Zuckerborg.")
            .addField(">website", " - The Zuckerborg website.");
        message.author.send(embed);
    }
}