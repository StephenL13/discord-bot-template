module.exports.run = async(client, message, args, prefix) => {
    message.reply(`You have ${client.ws.ping} ms.`)
}

module.exports.help = {
    name: "ping",
    aliases: []
}