const Discord = require('discord.js');
const client = new Discord.Client({ intents: [32767] });
require('dotenv').config()
const fs = require('fs')
client.login(process.env.TOKEN)
require('http').createServer((req, res) => res.end('The bot is alive!')).listen(3000)

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.aliases = new Discord.Collection()
client.slashCmds = new Discord.Collection()
module.exports.client = client

// COMMAND HANDLER
fs.readdirSync(`./prefixcommands/`).forEach(dir => {
    fs.readdir(`./prefixcommands/${dir}`, (err, files) => {
      if (err) throw err;
  
      var jsFiles = files.filter(f => f.split(".").pop() === "js");
      if (jsFiles.length <= 0) return console.log("[COMMAND HANDLER] - ~~Yet to be loaded or no avail~~");
  
      jsFiles.forEach(file => {
        var fileGet = require(`./prefixcommands/${dir}/${file}`);
        console.log(`[COMMAND HANDLER] - ${file} is now loaded!`)
  
        try {
          client.commands.set(fileGet.command.name, fileGet)
          fileGet.command.aliases.forEach(alias => {
            client.aliases.set(alias, fileGet.command.name)
          })
        } catch (err) {
          return console.log(err);
        }
      });
    });
  })
  
  // SLASH COMMANDS
  fs.readdirSync(`./slashcommands/`).forEach(dir => {
    fs.readdir(`./slashcommands/${dir}`, (err, files) => {
      if (err) throw err;
  
      var jsFiles = files.filter(f => f.split(".").pop() === "js");
      if (jsFiles.length <= 0) return console.log("[SLASH CMD HANDLER] - ~~Yet to be loaded or no avail~~");
  
      jsFiles.forEach(file => {
        var fileGet = require(`./slashcommands/${dir}/${file}`);
        console.log(`[SLASH CMD HANDLER] - ${file} is now loaded!`)
  
        try {
          client.slashCmds.set(fileGet.command.name, fileGet)
        } catch (err) {
          return console.log(err);
        }
      });
    });
  })
  
  // EVENT HANDLER
  fs.readdirSync('./events/').forEach(file => {
    var jsFiles = fs.readdirSync('./events/').filter(f => f.split(".").pop() === "js")
    if(jsFiles.length <= 0) return console.log("[EVENT HANDLER] - ~~Yet to be loaded or no avail~~");
  
    jsFiles.forEach(file => {
      const eventGet = require(`./events/${file}`)
      console.log(`[EVENT HANDLER] - ${file} is now loaded!`)
      try {
        client.events.set(eventGet.name, eventGet)
      } catch (error) {
        return console.log(error)
      }
    })
  })