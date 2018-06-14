const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

// Code for translation from https://ourcodeworld.com/articles/read/380/how-to-convert-a-binary-string-into-a-readable-string-and-vice-versa-with-javascript

module.exports = class BinaryCommand extends Command {
    constructor(client) {
        super(client, {
            name: "binary",
            group: "fun",
            memberName: "tobinary",
            description: "Convert string to binary.",
            examples: [">binary Hello"],
            args: [
                {
                    key: "string",
                    prompt: "Enter string to translate to binary.",
                    type: "string"
                }
            ]
        });
    }
    run(message, { string }) {
        var result = stringToBinary(string);

        if(parseInt(result).length > 2000) {
            message.say("Result is over 2000 charactors.");
        } else {
            message.say("Translation: " + result);
        }

        function stringToBinary(str, spaceSeparatedOctets) {
            function zeroPad(num) {
                return "00000000".slice(String(num).length) + num;
            }
        
            return str.replace(/[\s\S]/g, function(str) {
                str = zeroPad(str.charCodeAt().toString(2));
                return !1 == spaceSeparatedOctets ? str : str + " "
            });
        };
    }
}