module.exports = {
    name: 'aes',
    description: "Gets AES keys",
    execute(message, args) {
        const { MessageAttachment } = require("discord.js");
        // gets AES keys locally and sends it
        const file = new MessageAttachment("./jsons/aes.json");
        message.channel.send(file); 
    }
}