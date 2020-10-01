const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('YetkiliRolİD')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin : `rôl adı`')
   let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send('Bir kişi etiketlemelisin')
   }
   let kız = message.guild.roles.cache.find(r => r.id === 'ErkekRolİD')
   let kayıtsız = message.guild.roles.cache.find(r => r.id === 'KayıtsızRol')

   if(!kız) {
       return message.channel.send('Erkek rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et')
   }
   if(!kayıtsız) {
       return message.channel.send('kayıtsız rolü ayarlanmamış veya rol aranırken bir hata oluştu logu kontrol et')
   }
   let kayıt = message.guild.member(member)
   let isim = args[1]
   let yas = args[2]

   if(!isim) return message.channel.send('İsim belirtmelisin')
   if(isNaN(yas)) return message.channel.send('Yaş belirtmelisin')

   kayıt.setNickname(`${isim} | ${yas}`)
   kayıt.roles.add(kız)
   kayıt.roles.remove(kayıtsız)
   let embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('Kayıt Tamamlandı')
   .addField('Kayıt edilen kullanıcı',member)
   .addField('Adı :', isim)
   .addField('Yaşı :', yas)
   .addField('Kayıt eden yetkili', message.author)
   client.channels.cache.get('kayıt log kanal id').send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "kayıt-erkek"
}