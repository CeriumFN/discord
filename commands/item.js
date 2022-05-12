// Please use the GiveResults() Function. DO NOT USE OUR OLD METHOD:
module.exports = {
    name: 'item',
    decription: "Gives path to items",
    execute(message, args, Discord) {
        const { MessageEmbed, MessageAttachment } = require('discord.js');
        const blueprints = require('../jsons/bp.json');
        const SayMessage = message.content.slice(5).trim();

        // Epic Function
        function GiveResults(Name, Path, Despawns, Command, Image)
        {
            const ItemEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(Name)
            .addFields(
                { name: 'Name', value: Name },
                { name: 'Path', value: "`" + Path + "`"},
                { name: 'Despawns', value: Despawns},
                { name: 'Command', value: '`cheatscript loadobject ' + Command + '`'},
            )
            .setImage(Image);
            message.channel.send(ItemEmbed);
        }

        if(SayMessage == "lars van")
        {
            // NEW METHOD:
            GiveResults(blueprints.lars_name, blueprints.lars_path, blueprints.lars_despawns, blueprints.lars_path, 'https://media.discordapp.net/attachments/973912253554360390/973912323213365348/larsvan.jpg?width=960&height=540');
        } else if(SayMessage == "storm shield") {
            // NEW METHOD:
            GiveResults(blueprints.stormshield_name, blueprints.stormchest_path, blueprints.stormshield_despawns, blueprints.stormshield_path, 'https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2017/07/27/Fortnite-how-to-increase-homebase-power-level_feature.jpg');
        } else if(SayMessage == "storm chest") {
            GiveResults(blueprints.stormchest_name, blueprints.stormchest_path, blueprints.stormchest_despawns, blueprints.stormchest_path, 'https://static.wikia.nocookie.net/fortnite/images/3/3d/Storm_Chest_-_Locked_-_Fortnite.jpg/revision/latest?cb=20211201072445');
        } else {
            message.channel.send("At this time, you can only get lars van. We are adding everything tonight");
        }
    }
}
