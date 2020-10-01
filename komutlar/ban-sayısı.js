const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
 let tanercodareli = message.guild;
    tanercodareli.fetchBans()
        .then(yasinbum => message.channel.send(`Sunucuda toplam \` ${yasinbum.cache.size} \` yasaklı kişi bulunmaktadır!`))
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