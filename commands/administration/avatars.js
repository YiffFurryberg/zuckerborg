const { Command } = require("discord.js-commando");
const download = require("image-downloader");

const staff = require("../../staff.js");

module.exports = class AvatarsCommand extends Command {
    constructor(client) {
        super(client, {
            name: "avatars",
            group: "administration",
            memberName: "avatars",
            description: "Get the avatars of the admins and mods.",
            examples: [">avatars"],
            ownerOnly: true
        });
    }
    run(message) {

        const ids = staff.map(function(user) {
            return user.id;
        })

        for(var i = 0; i < ids.length; i++) {
            var options = {
                url: this.client.users.get(ids[i]).avatarURL,
                dest: './media/avatars/' + ids[i] + '.png'
            }
            downloadImage(options);
        }

        message.say("Avatars download: " + i);

        async function downloadImage(op) {
            try {
                const { filename, image } = await download.image(op);
                console.log(filename);
            } catch(e) {
                console.log(e);
            }
        }
    }
}