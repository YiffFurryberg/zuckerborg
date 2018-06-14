const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

const config = require("../../config.json");

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: "website",
            group: "information",
            memberName: "website",
            description: "The Zuckerborg website.",
            examples: [">website"]
        });
    }
    run(message) {
        message.author.send("https://yifffurryberg.github.io");
    }
}