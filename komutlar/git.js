const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!message.member.roles.has("YetkiliRolİD")) return message.channel.send(`**Bu komutu kullanabilmek için\`YetkiliİsmiKoy \` yetkisine sahip olmasınız.**`);
    if (!message.member.voiceChannel) return message.channel.send("Bir ses kanalında olman gerek")
    let Gullanici = message.mentions.members.first();
    if (!Gullanici.voiceChannel) return message.channel.send("Bu kullanıcı herhangi bir ses kanalında değil")
    if (!Gullanici) return message.channel.send("Kullanıcı belirtmedin")
    if (message.member.voiceChannel.id === Gullanici.voiceChannel.id) return message.channel.send("Zaten aynı kanaldasınız")
    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === Gullanici.id;
    };
    let kobs = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${Gullanici}, ${message.author} seni ${Gullanici.voiceChannel.name} odasına çekmek istiyor. Kabul ediyormusun?`)
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
            let kabul = new Discord.RichEmbed()
                .setColor("GREEN")
                .setDescription(`${Gullanici} odaya çekildi`)
            message.channel.send(kabul)
           Gullanici.setVoiceChannel(message.member.voiceChannel)
        } else {
            let kobs = new Discord.RichEmbed()
                .setColor("RED")
                .setDescription(`${Gullanici} odaya çekilme teklifini reddetti`)
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