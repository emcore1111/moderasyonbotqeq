const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
//OSKOBS
exports.run = async (client ,message ,args) => {
const id = args[0]
if (!id)
return message.reply("Üyelerin Çekileceği Bir Sesli Kanal Id Si Gir")
message.guild.members.cache.filter(a => a.voiceChannel).forEach(x => x.setVoiceChannel(id))
message.channel.send(`Bütün Sesli Kanaldaki Üyeler <#${id}> İsimli Odaya Taşındı!`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//OSKOBS
exports.help = {
  name: "herkesiçek"
};