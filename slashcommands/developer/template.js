const { developerID } = require('../../config.json')
module.exports.run = async (client, interaction) => {
    if(interaction.user.id === developerID) {
        await interaction.reply({ content: `This is a template test for the command handler.`, ephemeral: true })
    } else {
        await interaction.reply({ content: "You are not allowed to use this command.", ephemeral: true })
    }
}

module.exports.command = {
    name: "template"
}