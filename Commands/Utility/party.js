const { MessageEmbed, CommandInteraction, Client, Guild } = require("discord.js");

module.exports = {
    name: "party",
    description: "Requests Genshin Impact party.",
    options: [
        {
            name: "wl",
            description: "Select the world level.",
            required: true,
            type: "STRING",
            choices: [
                {
                    name: "World Level 1",
                    value: "1"
                },
                {
                    name: "World Level 2",
                    value: "2"
                },
                {
                    name: "World Level 3",
                    value: "3"
                },
                {
                    name: "World Level 4",
                    value: "4"
                },
                {
                    name: "World Level 5",
                    value: "5"
                },
                {
                    name: "World Level 6",
                    value: "6"
                },
                {
                    name: "World Level 7",
                    value: "7"
                },
                {
                    name: "World Level 8",
                    value: "8"
                },
            ],
        },
        {
            name: "uid",
            description: "Provide an UID Genshin Impact.",
            required: true,
            type: "INTEGER"
        },
        {
            name: "message",
            description: "Describe a party message",
            required: true,
            type: "STRING"
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction
     * @param {Client} client
     * @param {Guild} guild
     */
    async execute(interaction, client, guild) {
        const GenshinParty = "<@&909622094814388254>";
        const Moderator = "<@&909440113006751765>";

        const bot = client.user;
        const { options } = interaction;
        const wl = options.getString("wl");
        const uid = options.getInteger("uid");
        const message = options.getString("message");
        if (guild.id !== "761550024131215430") {
            interaction.reply({content: `Mohon maaf saat ini fitur tersebut masih tahap pengembangan.`})
        } else {
            const Response = new MessageEmbed()
            .setColor("AQUA")
            .setAuthor({name: interaction.user.tag, iconURL: interaction.user.avatarURL({dynamic: true, size: 512})})
            .setDescription(`**World Level**: ${await wl} ㅤㅤㅤㅤㅤㅤㅤ\n**UID**: ${await uid}\n**Message**: ${await message}`)
            .setThumbnail(interaction.user.avatarURL({dynamic: true, size: 512}))
            .setTimestamp()
            .setFooter({text: `Vania`})

            await interaction.reply({content: `${interaction.member} Butuh party nih, \\📢 ${GenshinParty}`,embeds: [Response]})
            const DirectUID = await interaction.followUp(`${await uid}`)
        }
    }
}