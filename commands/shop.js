module.exportts = {
    name: 'shop',
    description: "gives latest item shop",
    execute(message, args) {
        // trims message to get args
        const SayMessage = message.content.slice(4).trim();

        // option handler
        if(SayMessage == "raw") {
            // RAW DATA
            const file = new MessageAttachment("../jsons/shop.json");
            message.channel.send(file);
        } else if(SayMessage == "image") {
            // COMING SOON
        } else {
            message.channel.send("Whoops! That is not a option, type in `!shop raw` or `!shop image` to get results")
        }
    }
}