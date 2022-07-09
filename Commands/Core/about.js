const { MessageEmbed, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "about",
    description: "Sends information about the bot.",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    execute(interaction, client) {
        const bot = client.user;
        
        const Panel = new MessageEmbed()
        .setAuthor({
            name: `${bot.username}`,
            iconURL: bot.displayAvatarURL({dynamic: true, size: 512})
        })
        .setDescription(`Hi! I'm ${bot.username}. Yet all-purpose bot for Discord by the laziest person **Xyzer** from Indonesia.\nAlso support our Genshin Impact Community.\n- Discord: [Genshin Impact ID](https://discord.gg/BMuwgPZpSr)\n- Instagram: [@giid.genshinimpact](https://instagram.com/giid.genshinimpact?igshid=YmMyMTA2M2Y=)`)
        .setColor("AQUA")

        interaction.reply({embeds: [Panel]})
    }
}