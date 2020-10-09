const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('762306051336437800')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `rôl adı`')

  ///OLMSSA SYLE BISEYLER DAHA YAPICAM "!" GİBİ
  
  if(!message.member.voiceChannel) return message.channel.send("Sese Gir.")
  
  let member = message.mentions.members.first()
  
  if(!member) return message.channel.send("Bir Üye Etiketle.")
  
  if(!member.voiceChannel) return message.channel.send("Etiketlenen Üye Sesde Yok.")
  
  if(member.voiceChannel.id = message.member.voiceChannel.id) return message.channel.send("Zaten Aynı Kanaldasınız.")
  
 let rochelle = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(
      `${member} , ${message.author} Senin Yanına Gelmek İstiyor Kabul Ediyormusun.?`
    );
  message.channel.send(rochelle).then(async (m) => {
    await m.react("✅").then((r) => {
      const tamam = (reaction, user) =>
        reaction.emoji.name == "✅" && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam);

      tamam2.on("collect", async (r) => {
        let embed = new Discord.MessageEmbed()
          .setColor("0x36393E")
          .setTitle(" Başarılı")
          .setDescription(`✅ **|** Başarıyla Odaya Gittin MORUQ.`);
        message.channel.send(embed);
        await member.setVoiceChannel(message.member.voiceChannel);
      });
    });
    m.react("❌").then((r) => {
      const tamam = (reaction, user) =>
        reaction.emoji.name == "❌" && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam);

      tamam2.on("collect", async (r) => {
        m.delete();
        message.channel.send("Gitme İşlemi İptal Edildi.");
      });
    });
  });
  
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