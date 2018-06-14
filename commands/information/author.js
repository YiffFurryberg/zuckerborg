const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

const config = require("../../config.json");

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: "author",
            group: "information",
            memberName: "author",
            description: "The author of Zuckerborg.",
            examples: [">author"]
        });
    }
    run(message) {
        const embed = new RichEmbed()
            .setColor(0x003B5998)
            .setTitle("Zuckerborg Author")
            .setDescription(this.client.users.get(config.ownerID).tag)
            .setThumbnail(this.client.users.get(config.ownerID).displayAvatarURL);
        message.say(embed);
    }
}