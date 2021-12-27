# Discord.js v13 Bot Template
Hey everyone! This is what I use regularly for further reference to the bots I produce. The `config.json` file is provided for fields to edit the code except bot tokens reserved via `.env` file. Included in this repository are the basic command and event handlers plus a free HTTP server to run and monitor using UptimeBot or BetterUptime.

⚠ **Few reminders:** [It is best to know **JavaScript** first](https://www.youtube.com/watch?v=OWqplFjXwQc). But if you're knowledgeable enough to this programming language, you may check out these channels below.</br></br>
https://www.youtube.com/reconlxx</br>
https://www.youtube.com/tomato6966</br>
https://www.youtube.com/lyxcode</br>
https://www.youtube.com/wornoffkeys</br>
https://www.youtube.com/UltraX1</br></br><img src="https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg?q=72" width="300px" height="144px" />

To start developing, you need the following prerequisite libraries to install via NPM:
- Node v16
- Discord.js v16
- dotenv
- fs

You can run this script within the console one time: `npm install discord.js dotenv fs`

## INSIDE THE COMMAND HANDLER
The folder is labeled `./commands` but require sub-folders to keep the bot structure organized. `module.exports.run` is where you can place all of the code you need. The latter is `module.exports.help`, which is where you modify the official command name and aliases. You can modify/remove the if/else statement if you're working on Replit/Glitch (web-based IDE) as an helpful option for you.
```js
const { developerID } = require('../../config.json')
module.exports.run = async(client, message, args, prefix) => {
    if(message.author.id === developerID) {
        // this is rhe exclusive area for developers only.
    } else { 
        // You can either send an error to the public users or keep the stable version to this area.
    }
}

module.exports.help = {
    name: "test",
    aliases: []
}
```

## INSIDE THE EVENT HANDLER
```js
const client = require('../index.js').client; // Requires the client handler from the index file

client.on('anyDiscordEvent', () => {
    console.log("Keep the transparency of your bot's undertakings.")
})
```
I also made a [Discord server](https://discord.gg/ghN4SzhJTB) if you wish to hangout with me. Though, there are many aspects in coding since I'm a first year college student as of this writing.</br>
Thank you and have a good day!</br>- Stephen L.
