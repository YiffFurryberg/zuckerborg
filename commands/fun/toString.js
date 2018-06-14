const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

// Code for translation from https://ourcodeworld.com/articles/read/380/how-to-convert-a-binary-string-into-a-readable-string-and-vice-versa-with-javascript

module.exports = class BinaryCommand extends Command {
    constructor(client) {
        super(client, {
            name: "string",
            group: "fun",
            memberName: "tostring",
            description: "Convert binary to string.",
            examples: [">string 01101000 01101001"],
            args: [
                {
                    key: "binary",
                    prompt: "Enter binary to translate to strnig.",
                    type: "string"
                }
            ]
        });
    }
    run(message, { binary }) {
        var result = binaryToString(binary);
        if(result.length > 2000) {
            message.say("Result is over 2000 charactors.");
        } else {
            message.say("Translation: " + result);
        }
        
        function binaryToString(str) {
            str = str.replace(/\s+/g, '');
            str = str.match(/.{1,8}/g).join(" ");
        
            var newBinary = str.split(" ");
            var binaryCode = [];
        
            for (let i = 0; i < newBinary.length; i++) {
                binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
            }
            
            return binaryCode.join("");
        }
    }
}