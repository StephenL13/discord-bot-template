module.exports.run = async(client, message, args, prefix) => {
    await message.reply({ content: `You have ${client.ws.ping} ms.` })
}

module.exports.command = {
    name: "ping",
    aliases: []
}