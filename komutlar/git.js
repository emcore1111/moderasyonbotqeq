const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!message.member.roles.has("727099612418146314")) return message.channel.send(`**Bu komutu kullanabilmek için \`YetkiliİsimiKoy\` yetkisine sahip olmasınız.**`);
    if (!message.member.voiceChannel) return message.channel.send("Bir ses kanalında olman gerek")
    let kullanici = message.mentions.members.first();
    if (!kullanici.voiceChannel) return message.channel.send("Bu kullanıcı herhangi bir ses kanalında değil")
    if (!kullanici) return message.channel.send("Kullanıcı belirtmedin")
    if (message.member.voiceChannel.id === kullanici.voiceChannel.id) return message.channel.send("Zaten aynı kanaldasınız")
    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanici.id;
    };
    let kobs = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${kullanici}, ${message.author}  ${kullanici.voiceChannel.name} Yanına Gelmek İstiyor,Kabul Ediyormusun?`)
            .setFooter('kobs') 

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
            let sama = new Discord.RichEmbed()
                .setColor("GREEN")
                .setDescription(`${kullanici} odaya çekildi`)
            message.channel.send(sama).then(msg => msg.delete(5000));
           message.member.setVoiceChannel(kullanici.voiceChannel)
        } else {
            let kobs = new Discord.RichEmbed()
                .setColor("RED")
                .setDescription(`${kullanici} odaya çekilme teklifini reddetti`)
            message.channel.send(kobs).then(msg => msg.delete(5000));
        }
    })
  
}

exports.conf = {
    enabled: true,
    aliases: ['git'],
    permLevel: 0
};

exports.help = {
    name: "git",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: "git @kullanıcı"

};