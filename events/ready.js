const client = require('../index.js').client;
const { createCmd } = require('../dataHandler')
client.on('ready', () => {
    console.log('Hello! The bot is now ready.')

    // Inside the double quotation marks, you can enter your server ID.
    // Otherwise, you can remove it to be deployed globally.
    createCmd(client, "")
})