module.exports = {
    name: 'aes',
    description: "Gets AES keys",
    execute(message, args) {
        const { MessageAttachment } = require("discord.js");
        const file = new MessageAttachment("./jsons/aes.json");
        message.channel.send(file); 
    }
}