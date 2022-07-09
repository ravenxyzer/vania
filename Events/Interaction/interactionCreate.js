const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const command = await client.commands.get(interaction.commandName);
        
        if (command.permission && !interaction.member.permissions.has(command.permission)) {
            return interaction.reply({ content: `You do not have the required permission for this command: \`${interaction.commandName}\`.`, ephemeral: true })
        }

        if (interaction.isCommand() || interaction.isContextMenu()) {
            if (!command) return interaction.reply({embeds: [
                new MessageEmbed()
                .setColor("RED")
                .setDescription("⛔ An error occured while running this command.")
            ]}) && client.commands.delete(interaction.commandName);

            command.execute(interaction, client);
        }
    }
}