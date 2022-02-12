const client = require('../index.js').client
client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) {
        let slashCmds = client.slashCmds.get(interaction.commandName)
        if (slashCmds) slashCmds.run(client, interaction)
    }
})