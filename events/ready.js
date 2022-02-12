const client = require('../index.js').client;
const { createCmd } = require('../dataHandler')
client.on('ready', () => {
    console.log('Hello! The bot is now ready.')
    createCmd(client)
})