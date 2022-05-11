module.exports = {
    name: 'playlist',
    description: "Gets all Playlists",
    execute(message, args) {
        // Playlist will be rewritten as just sending the file is unethical
        const { MessageAttachment } = require("discord.js");
        // Gets playlists locally and sends it in chat
        const file = new MessageAttachment("./jsons/playlists.json");
        message.channel.send(file); 
    }
}