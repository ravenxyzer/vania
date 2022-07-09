const { MessageEmbed, Message, WebhookClient } = require("discord.js");

module.exports = {
    name: "messageDelete",
    /**
     * 
     * @param {Message} message
     */
    execute(message) {
        if (message.author.bot) return;

        const Log = new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`A [Message](${message.url}) by ${message.author} was **deleted**.\n**Deleted**:\n ${message.content ? message.content : "None"}`.slice(0, 4096))

        if (message.attachments.size >= 1) {
            Log.addField(`Attachments:`, `${message.attachments.map(a => a.url)}`, true)
        }

        new WebhookClient({id: "966963295120674826", token: "cJlnilFig5U_TiI7GuvCsKVZPlkf_baKzzftrZmzAhaLIJAezCCuYTeGwBizimShnSwd"}
        ).send({embeds: [Log]}).catch((err) => console.log(err));
    }
}