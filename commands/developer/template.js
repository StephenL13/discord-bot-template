const { developerID } = require('../../config.json')
module.exports.run = async(client, message, args, prefix) => {
    if(message.author.id === developerID) {
        message.channel.send("This is a template test for the command handler.")
    } else { 
        message.delete()
        message.author.send("The command is exclusive to developers on;y.")
    }
}

module.exports.help = {
    name: "test",
    aliases: []
}