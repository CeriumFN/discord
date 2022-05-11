module.exports = {
    name: 'prop',
    decription: "Gives path to props",
    execute(message, args, Discord) {
        const { MessageEmbed, MessageAttachment } = require('discord.js');
        // Get all objects locally
        const blueprints = require('../jsons/bp.json');
        // trims message to make handler
        const SayMessage = message.content.slice(5).trim();

        // Prop handler
        if(SayMessage == "lars van")
        {
            const file = new MessageAttachment("./images/items/larsvan.jpg");
            const ItemEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(blueprints.lars_name)
            .addFields(
                { name: 'Name', value: blueprints.lars_name },
                { name: 'Path', value: "`" + blueprints.lars_path + "`"},
                { name: 'Despawns', value: blueprints.lars_despawns},
                { name: 'Command', value: '`cheatscript loadobject /Game/Missions/Primary/LaunchTheBalloon/Props/BP_RtL_Main.BP_RtL_Main_C`'},
            )
            .setImage('https://media.discordapp.net/attachments/973912253554360390/973912323213365348/larsvan.jpg?width=960&height=540');
            message.channel.send(ItemEmbed);
            //message.channel.send("Name: " + blueprints.lars_name);
            //message.channel.send("Path: " + blueprints.lars_path);
            //message.channel.send("Despawns: " + blueprints.lars_despawns);
        } else if(SayMessage == "storm shield") {
            const file = new MessageAttachment("./images/items/larsvan.jpg");
            const ItemEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(blueprints.lars_name)
            .addFields(
                { name: 'Name', value: blueprints.stormshield_name },
                { name: 'Path', value: "`" + blueprints.stormshield_path + "`"},
                { name: 'Despawns', value: blueprints.stormshield_despawns},
                { name: 'Command', value: '`cheatscript loadobject /Game/Missions/Primary/Outpost/Props/BP_StormShield_Core_New.BP_StormShield_Core_N`'},
            )
            .setImage('https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2017/07/27/Fortnite-how-to-increase-homebase-power-level_feature.jpg');
            message.channel.send(ItemEmbed);
        } else {
            message.channel.send("At this time, you can only get lars van. We are adding everything tonight");
        }
    }
}