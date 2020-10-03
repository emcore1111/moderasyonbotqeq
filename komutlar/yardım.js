const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const yardım = new Discord.MessageEmbed()
 .setTimestamp()
 .setTitle("Yardım Menusu")
.setColor("BLUE")
 .addField("Kayıt Komutlar(0)", `
Kayıt Sisteminde Kullanılan Komutlar;
\`kız\`,\`erkek\`,\`nick\`
`)

 
 message.channel.send(yardım)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
}