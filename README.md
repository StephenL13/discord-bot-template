# Discord.js v13 Bot Template
Hey everyone! This is what I regularly use for further reference to the bots I create. The `config.json` file is provided for fields to edit the code (e.g.: prefix) except bot tokens reserved via `.env` file. Included in this repository are the command and event handlers plus a free HTTP server to run and monitor using UptimeBot or BetterUptime (applicable for Replit users).

If you have questions, comments, or concerns, you may post on the Issues tab or [visit my support server.](https://discord.gg/ghN4SzhJTB)

Regards and wishes,<br>Stephen L.

⚠ **Few reminders:** [It is best to know **JavaScript** first](https://www.youtube.com/watch?v=OWqplFjXwQc). But if you're knowledgeable enough to this programming language, you may check out these channels below.</br></br>
https://www.youtube.com/reconlxx</br>
https://www.youtube.com/tomato6966</br>
https://www.youtube.com/lyxcode</br>
https://www.youtube.com/wornoffkeys</br>
https://www.youtube.com/UltraX1</br></br><img src="https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg?q=72" width="300px" height="144px" />

To start developing, you need the following prerequisite libraries to install via NPM:
- Node v16 LTS
- Discord.js v13
- dotenv
- fs

You can run this script within the console one time: `npm install discord.js dotenv fs`

Before proceeding, [a huge thanks to UltraX's tutorial](https://www.youtube.com/watch?v=pcF1sOaHvEI) for this idea on the handlers.

## INSIDE THE PREFIXED COMMAND HANDLER
The folder is labeled `./commands` but require sub-folders to keep the bot structure organized. `module.exports.run` is where you can place all of the code you need. The latter is `module.exports.help`, which is where you modify the official command name and aliases.
```js
module.exports.run = async(client, message, args, prefix) => {
    await message.reply({ content: "You are listening" })
}

module.exports.help = {
    name: "test",
    aliases: []
}
```

## INSIDE THE SLASH COMMAND HANDLER
Discord welcomes the use of slash commands in our bots today, which was [introduced at around 25th of March](https://blog.discord.com/slash-commands-are-here-8db0a385d9e6).

However, the slash command data (`./dataHandler.js`) is in a form of JSON style. By this case, be sure to refer to [Discord API's documentation page]('https://discord.com/developers/docs/interactions/application-commands').
```js
async function createCmd(client, guildId) {
    const data = [
        {
            name: "ping",
            description: "Serves a bot ping"
        }
    ]
    
    // You can comment out which do you want to distribute your slash commands.
    await client.guilds.cache.get(guildId)?.commands.set(data) // Server-exclusive
    await client.application?.commands.set(data) // Globally (perfect for public bots)
}

module.exports = { createCmd }
```
On `./events/ready.js`, you have to type the following code after selecting which slash command distribution method:
```js
const client = require('../index.js').client;
const { createCmd } = require('../dataHandler')
client.on('ready', () => {
    console.log('Hello! The bot is now ready.')
    createCmd(client)
    // or...
    createCmd(client, "serverid")
})
```
Finally, on `./slashcommands`, this is where we the file listens to the data handler to execute an event.
```js
module.exports.run = async(client, message, args, prefix) => {
    await message.reply({ content: `You have ${client.ws.ping} ms.` })
}

module.exports.help = {
    name: "ping",
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

## ADDENUM
Q: Why there is a developerID field on `./config.json`?
<br>A: This is helpful for most developers who wish to keep their currently developing code in a private state. This should work on both prefixed and slash command handlers. Please see the `template.js` files on each of the commmand handler folders.

Q: I want my bot to run on Replit. How should I use this?
<br>A: Fork the repository. Log-in or signup to Replit afterwards. At the homepage, click the `+` icon and select Node.js. You must create the repl folder first. Then use the shell terminal to execute `git clone https://github.com/<Github username>/<forked repo name>.git`. Finally, move all of the necessary files to the root folder including `.git` (of your forked repo!) for version control purposes.<br>Note that the latest Node template doesn't have pre-installed Python on their Nix beta template running the native LTS unlike the legacy template. Thus, giving less capabilities for music bots utilizing Opusscript. Instead, [you may use this legacy template](https://replit.com/@replit/Nodejs?v=1#index.js) and do the `npm i node` to install Node's latest development release.

Q: Will this be useable on TypeScript?
<br> A: No. However, I can make a separate version utilizing the same bot framework library with superset usage.