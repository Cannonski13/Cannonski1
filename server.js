const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "?" 

client.on("ready", () => {
client.user.setGame(prefix + "ping")
console.log("this bot has booted up Ready to function")
});
client.on("message", message => (
  if (message.content == prefix + "ping"){
     message.reply(prefix + "Pong");
  ]   
});     
