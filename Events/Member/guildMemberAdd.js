const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;
        member.roles.add("761577898750246942");

        const Welcomer = new WebhookClient({
            id: "966942017240305705",
            token: "hqyAjZyQHBNEtYnwpfnkRoWZkFrQicxHS5gMDJ2038tdxQEjRJ7IGYf_mevYkf1SBZmB"
        });

        const Welcome = new MessageEmbed()
        .setColor("AQUA")
        .setAuthor({name: `${member.nickname}`, iconURL: user.avatarURL({dynamic: true, size: 512})})
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\n
        Latest Member Count: **${guild.memberCount}**
        `)
        .setFooter({text: `ID: ${user.id}`})

        Welcomer.send({embeds: [Welcome]})
    }
}