const { MessageEmbed, Message, WebhookClient, Webhook } = require("discord.js");

module.exports = {
    name: "messageUpdate",
    /**
     * 
     * @param {Message} oldMessage
     * @param {Message} newMessage
     */
    execute(oldMessage, newMessage) {
        if (oldMessage.author.bot) return;
        if (oldMessage.content === newMessage.content) return;

        const Count = 1950;
        const Original = oldMessage.content.slice(0, Count) + (oldMessage.content.length > 1950 ? " ..." : "");
        const Edited = newMessage.content.slice(0, Count) + (newMessage.content.length > 1950 ? " ..." : "");

        const Log = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`A [Message](${newMessage.url}) by ${newMessage.author} was **edited** in ${newMessage.channel}.\n
        **Original**:\n ${Original} \n**Edited**:\n ${Edited}`)

        new WebhookClient({id: "966963295120674826", token: "cJlnilFig5U_TiI7GuvCsKVZPlkf_baKzzftrZmzAhaLIJAezCCuYTeGwBizimShnSwd"}
        ).send({embeds: [Log]}).catch((err) => console.log(err))

    }
}