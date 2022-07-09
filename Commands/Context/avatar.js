const { ContextMenuInteraction, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "avatar",
    type: "USER",
    context: true,
    /**
     * 
     * @param {ContextMenuInteraction} interaction 
     * @param {Client} client
     */
    async execute(interaction, client) {
        const target = await interaction.guild.members.fetch(interaction.targetId);
        const bot = client.user;

        const Response = new MessageEmbed()
        .setAuthor({
            name: `${await target.username}\`s default avatar`,
            iconURL: target.displayAvatarURL({dynamic: true, size: 512})
        })
        .setImage(`${target.displayAvatarURL({dynamic: true, size: 4096})}`)
        .setFooter({
            text: `Vania`,
            iconURL: bot.displayAvatarURL({dynamic: true, size: 512})
        })
        .setTimestamp()
        .setColor("AQUA")

        interaction.reply({embeds: [Response]})
    }
}