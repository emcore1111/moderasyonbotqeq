const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has("727099612418146314")) return message.channel.send(`**Bu komutu kullanabilmek için\`YetkiliİsmiKoy \` yetkisine sahip olmasınız.**`);
    if (!message.member.voiceChannel) return message.channel.send("Bir ses kanalında olman gerek")
    let kullanici = message.mentions.members.first();
    if (!kullanici.voiceChannel) return message.channel.send("Bu kullanıcı herhangi bir ses kanalında değil")
    if (!kullanici) return message.channel.send("Kullanıcı belirtmedin")
    if (message.member.voiceChannel.id === kullanici.voiceChannel.id) return message.channel.send("Zaten aynı kanaldasınız")
    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanici.id;
    };
    let kobs = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${kullanici}, ${message.author} seni ${kullanici.voiceChannel.name} odasına çekmek istiyor. Kabul ediyormusun?`)
            .setFooter('test') 

    let mesaj = await message.channel.send(kobs)
    await mesaj.react("✅")
    await mesaj.react("❌")
    mesaj.awaitReactions(filter, {
        max: 1,
        time: 60000,
        errors: ['time']
    }).then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '✅') {
            let kabul = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${kullanici} odaya çekildi`)
            message.channel.send(kabul)
           kullanici.setVoiceChannel(message.member.voiceChannel)
        } else {
            let kobs = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(`${kullanici} odaya çekilme teklifini reddetti`)
            message.channel.send()
        }
    })
}

exports.conf = {
    enabled: true,
    aliases: ['çek'],
    permLevel: 0
};

exports.help = {
    name: "çek",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: ".çek @kullanıcı"

};