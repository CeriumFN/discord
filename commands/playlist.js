module.exports = {
    name: 'playlist',
    description: "Gets all Playlists",
    execute(message, args) {
        const { MessageAttachment } = require("discord.js");
        const file = new MessageAttachment("./jsons/playlists.json");
        message.channel.send(file); 
    }
}