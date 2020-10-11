const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`
**\`Kayıt\`**

» \`${prefix}erkek/kız <isim> <yas>\`: **Belirtilen Kullanıcıyı Kayıt Edersiniz**
» \`${prefix}nick <isim> <yas>\`: **Belirtilen Kullanıcının İsmini Değiştirirsiniz**
» \`${prefix}vip al/ver\`: **Kullanıcıya Vip Al/Ver**
» \`${prefix}kullanıcı-bilgi\`: **Etiketlediğin / kendi profilin hakkında bilgi verir. Vip Al/Ver**

**\`Yetkili\`**

» \`${prefix}ban <kullanıcı> <sebep>\`: **Belirtilen Kullanıcıyı Sunucudan Yasaklar**
» \`${prefix}kick <kullanıcı> <sebep>\`: **Belirtilen Kullanıcıyı Sunucudan Atar**
» \`${prefix}mute <kullanıcı> <süre> <sebep>\`: **Kullanıcıyı Belirtilen Süre Boyunca Susturur**
» \`${prefix}unban <id>\`: **Belirtilen İD Deki Kişinin Sunucudan Yasağını Kaldırır**
» \`${prefix}temizle/sil <0-100>\`: **Belirtilen Miktarda Mesajı Siler**


`)

.setThumbnail(message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};