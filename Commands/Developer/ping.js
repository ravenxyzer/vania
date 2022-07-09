const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: 'replies with "pong!".',
    /**
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({content: "pong!"})
    }
}