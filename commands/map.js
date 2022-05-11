module.exports = {
    name: 'map',
    description: "ratio",
    execute(message, args, Discord) {
        // Gets the map locally and sends it in chat
        message.channel.send("Getting Map, please wait...");
        const { MessageAttachment } = require("discord.js");
        const file = new MessageAttachment("./images/maps/20.30.png");
        message.channel.send(file); 
    }
}