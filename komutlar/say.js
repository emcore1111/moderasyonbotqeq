const Discord = require('discord.js');

exports.run = async (client, message, args) => {
var tagdakiler = 0;
  let tag = "Kobs";
message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  
  
let erkek = message.guild.members.cache.filter("762306051999531068").members
let kız = message.guild.members.cache.filter("762306052699324446").members
let kayıtsız = message.guild.members.cache.filter("762306275916644372").members

    
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const kobs  = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(`https://media1.tenor.com/images/54cc77830f82ef67471d8d868d09ad2f/tenor.gif?itemid=11230336`)
        .addField(` **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
        .addField(` **Toplam Çevrimiçi Üye Sayısı**`, `**\`\`\`${çevrimiçi}\`\`\`**`) 
        .addField(`**Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`)
        .addField(`  **Yazı Kanalları**`, `» **${textChannels}**`)
        .addField(`  **Ses Kanalları**`, `» **${voiceChannels.size}**`)
        .addField(` **Kullanıcılar**`, ` Çevrimiçi : **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n Rahatsız Etmeyin : **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n Görünmez/Çevrimdışı : **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n  Botlar : **${botlar}**`, true)
        .addField(`Kayıtsız Üye Sayısı:** **${kayıtsız.size}** \n \n **Erkek Üye:** **${erkek.size}** \n\n**Kadın Üye: ${kız.size}** \n\n**Tagdakı Uye Sayısı: ${tagdakiler} **`)
        .setTitle(`${message.author.tag} - Tarafından Kullanıldı`)
        .setFooter(`istediğinizi yazın`, client.user.avatarURL())
    message.channel.send(kobs);

} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kobs',
    description: 'Say',
    usage: 'say'
}