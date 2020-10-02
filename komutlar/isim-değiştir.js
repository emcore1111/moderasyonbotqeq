const Discord = require("discord.js")

module.exports.run = async function(client, message, args) {


// Komutu Kullanabilecek Rol ID aşağıya girilecektir.
if (!message.member.roles.cache.has("YetkiliRolİD")) return message.reply("Bunu Kullanmak İçin Belirtilen Role Sahip Olman Gerekli")

const user = message.mentions.users.first()

if (!user) return message.reply("Bir kullanıcı etiketlemelisin.")

const nick = args.join(" ")

if (!nick) return message.reply("Ayarlanacak İsmi Gir")

user.setNickname(nick).then(() => {
return message.channel.send(`Başarıyla, ${user} kullanıcısının ismi \`${nick}\` olarak ayarlandı.`)
}).catch(err => message.channel.send("Isim değiştirirken hata meydana geldi."))
}
module.exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
}
module.exports.help = {
name: "isim",
usage: "isim"
}