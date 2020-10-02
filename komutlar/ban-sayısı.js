const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
 let os = message.guild;
    os.fetchBans()
        .then(kobs => message.channel.send(`Sunucuda toplam \` ${kobs.cache.size} \` yasaklı kişi bulunmaktadır!`))
        .catch(console.error);
}


     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['bansayı'],
      permLevel: 0
};

exports.help = {
  name: 'ban-sayı',
  description: 'Sunucuda banlanan toplam kişi sayısını gösterir.',
  usage: 'ban-sayı'
};