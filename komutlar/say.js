const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
  
   if(!message.member.roles.cache.has('762306051336437800')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `rôl adı`')

  const voiceChannels = message.guild.channels.filter(c => c.type === "voice");
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)count += voiceChannel.members.size;
  
var tagdakiler = 0;
  let tag = "Kobs";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  
  
let erkek = message.guild.roles.get("762306051999531068").members
let kız = message.guild.roles.get("762306052699324446").members
let kayıtsız = message.guild.roles.get("762306275916644372").members


const embed = new Discord.MessageEmbed()
.setTitle(' **Sunucudaki Kulllanıcı İstatistikleri** ' ) //Emojileri Kaldırdım İstersen Eklersin Emoji eklemeyi Bilmiyorsan Böyle <a:emojiisim:emojiid>
.setColor('BLUE')
.setDescription(`**Toplam Kullanıcı:** **${message.guild.memberCount}**\n\n  **Çevrimiçi Kullanıcı:** **${ message.guild.members.filter(m => !m.user.online && m.user.presence.status !== "offline").size}**\n\n** Kayıtsız Üye Sayısı:** **${kayıtsız.size}** \n \n **Erkek Üye:** **${erkek.size}** \n\n**Kadın Üye: ${kız.size}** \n\n**Tagdakı Uye Sayısı: ${tagdakiler} **`)
.setImage(
"https://cdn.discordapp.com/attachments/725371650584870963/725742353335320586/yesil.png")///Gifi Değiştirebilirsiniz
message.channel.send(embed);
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'say',
description: 'Sunucudaki Ses,Üye,Tag Alan Ve Boost Basan Kullanıcıları GÖsterir.',
usage: 'say1'
};