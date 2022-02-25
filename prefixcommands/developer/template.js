const { developerID } = require('../../config.json')
module.exports.run = async(client, message, args, prefix) => {
    if(message.author.id === developerID) {
        await message.channel.send({ content: "This is a template test for the command handler." })
    } else { 
        await message.delete()
        await message.author.send({ content: "You are not allowed to use this command." }).catch(e=>{})
    }
}

module.exports.command = {
    name: "test",
    aliases: []
}