const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
    };
  
  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı) return message.channel.send("**Kullanıcıyı etiketlemelisin.**");

  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);

  
 message.author.setVoiceChannel(member.voiceChannel)
  
            let kabul = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${kullanıcı} Başarılı.`)
            message.channel.send(kabul)
       
      
        
    
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["git"],
  permLevel: 0
};
exports.help = {
  name: "git",
  description: "git",
  usage: "git"
};