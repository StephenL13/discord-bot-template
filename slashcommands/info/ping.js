module.exports.run = async (client, interaction) => {
    await interaction.reply({ content: `Hi, **${interaction.user.tag}**! You have ${client.ws.ping} ms.`, ephemeral: true })
}

module.exports.command = {
    name: "ping"
}