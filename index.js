const Discord = require("discord.js");
const bot = new Discord.Client();
const SWEARWORDS = require("./swear.json").words;
bot.login("insert token");
bot.on('ready', () => {
    console.log("Alleluia it is working")
    bot.user.setActivity("Test", {type:5});
});

bot.on('message', message =>{
    let ans = message.content
    let msg = message.content.toLowerCase();
    let bool = false;
    SWEARWORDS.forEach((word) => {
        if (msg.startsWith(word)) {
            bool = true;
            ans = ":squid:" + ans.slice(word.length);
            msg = ":squid:" + msg.slice(word.length);
        }
        if (msg.indexOf(' ' + word) >= 0) {
            bool = true;
            ans = ans.split(" " + word).join(" :squid:");
            msg = msg.split(" " + word).join(" :squid:");
        }
    });
    if (bool) {
        let me = message.channel.guild.me;
        message.channel.send(ans);
        message.delete();
    }
});