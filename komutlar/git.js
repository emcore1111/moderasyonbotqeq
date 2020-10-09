const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('762306051336437800')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `rôl adı`')

  ///OLMSSA SYLE BISEYLER DAHA YAPICAM "!" GİBİ
  
  if(!message.member.voiceChannel) return message.channel.send("Sese Gir.")
  
  let member = message.mentions.members.first()
  
  if(!member) return message.channel.send("Bir Üye Etiketle.")
  
  if(member.voiceChannel) return message.channel.send("Etiketlenen Üye Sesde Yok.")
  
  if(member.voiceChannel.id = message.member.voiceChannel.id) return message.channel.send("Zaten Aynı Kanaldasınız.")
  
  message.member.setVoice
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'git',
    description: 'erkek ',
    usage: 'erkek'
};