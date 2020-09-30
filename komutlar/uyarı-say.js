const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let a = message.mentions.users.first() || message.author

let sa = await db.fetch(`uyarısayısı_${a.id}`)
if (sa == null) sa = '0'

  message.channel.send(`${a} Adlı Kişinin ${sa} Kadar Uyarısı Var!`)
  
  
  

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "uyarı-say",
  permLevel: 3
};

exports.help = {
  name: "uyarı-say",
  description: "uyarı-say",
  usage: "uyarı-say"
};