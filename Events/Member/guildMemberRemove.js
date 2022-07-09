const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;
        const Loger = new WebhookClient({
            id: "966942206797693009",
            token: "w6SGxwemey3jJtvOKdYqw_mjYSl7rAi-xuZ3clCAAYo2M3QaQZDuS9No0fhZAeqgY1ci"
        });

        const Goodbye = new MessageEmbed()
        .setColor("AQUA")
        .setAuthor({name: `${member.nickname}`,iconURL: user.avatarURL({dynamic: true, size: 512})})
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        ${member} has left the community\n
        Joined at: <t:${parseInt(member.joinedTimestamp / 1000)}:R>\n
        Latest Member Count: **${guild.memberCount}**
        `)
        .setFooter({text: `ID: ${user.id}`})

        Loger.send({embeds: [Goodbye]})
    }
}