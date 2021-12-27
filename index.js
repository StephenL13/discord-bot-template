const Discord = require('discord.js');
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents });
require('dotenv').config()
const fs = require('fs')
client.login(process.env.TOKEN)
require('http').createServer((req, res) => res.end('The bot is alive!')).listen(3000)

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.aliases = new Discord.Collection()
module.exports.client = client

// COMMAND HANDLER
fs.readdirSync(`./commands/`).forEach(dir => {
  fs.readdir(`./commands/${dir}`, (err, files) => {
      if (err) throw err;
      
      var jsFiles = files.filter(f => f.split(".").pop() === "js");
      if (jsFiles.length <= 0) return console.log("[COMMAND HANDLER] - ~~Yet to be loaded or no avail~~");
      
      jsFiles.forEach(file => {
          var fileGet = require(`./commands/${dir}/${file}`);
          console.log(`[COMMAND HANDLER] - ${file} is now loaded!`)

          try {
              client.commands.set(fileGet.help.name, fileGet)
              fileGet.help.aliases.forEach(alias => {
                  client.aliases.set(alias, fileGet.help.name)
              })
          } catch (err) {
              return console.log (err);
          }
      });
  });
})

// EVENT HANDLER
fs.readdirSync(`./events/`).forEach(file => {
  var jsFiles = fs.readdirSync('./events').filter(f => f.split(".").pop() === "js");
  if (jsFiles.length <= 0) return console.log("[EVENT HANDLER] - ~~Yet to be loaded or no avail~~");
  let check = false
  jsFiles.forEach(event => {
      const eventsGet = require(`./events/${event}`);

      try {
          client.events.set(eventsGet.name, eventsGet)
          if(check == true) {
              console.log(`[EVENT HANDLER] - ${event} is now loaded!`);
              check = false;
          }
      } catch(error) {
          return console.log(error)
      }
  });
});