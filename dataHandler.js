async function createCmd(client, guildId) {
    const data = [
        {
            name: "ping",
            description: "Serves a bot ping"
        }
    ]
    //await client.guilds.cache.get(guildId)?.commands.set(data)
    await client.application?.commands.set(data) 
}

module.exports = { createCmd }