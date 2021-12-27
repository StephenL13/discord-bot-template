const config = require('../config.json')
const client = require(`../index.js`).client

client.on('messageCreate', async message => {
    // COMMAND HANDLER EVENT ONLY. DO NOT MODIFY OR ALTER UNLESS NEEDED FOR OTHER DEPENDENCIES.
    if(message.author.bot || message.channel.type === "DM") return;

    const prefix = config.prefix
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase() 

    let commands = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if(commands) {
        if (!message.content.startsWith(prefix)) return;
        commands.run(client, message, args, prefix);
    }
})