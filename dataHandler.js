async function createCmd(client, guildId) {
    const data = [
        {
            name: "ping",
            description: "Serves a bot ping"
        }, 
        {
            name: "test",
            description: "Test command handler!"
        }
    ]
    
    // You can comment out which do you want to distribute your slash commands.
    await client.guilds.cache.get(guildId)?.commands.set(data) // Server-exclusive
    //await client.application?.commands.set(data) // Globally (perfect for public bots)
}

module.exports = { createCmd }