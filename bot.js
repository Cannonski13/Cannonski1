const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?updates') {
    	message.reply('Updates is here: https://docs.google.com/document/d/1N9rm2l-dF305MAUNLJp80HhokmWhZ-1dQ2xbm-CMv_s/edit?usp=sharing')  
                     
 
  	}
});
client.on('message', message => {
    if (message.content === '?help') {
    	message.reply('Join the support server for help: https://discord.gg/nBCrBQZ') 
  	}
});
client.on('message', message => {
    if (message.content === '?ping') {
    	message.reply('Pong');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
