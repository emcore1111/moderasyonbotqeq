const Discord = require('discord.js')

exports.run = async (client ,message, args) =>{


let tag = message.guild.members.cache.filter().then(u => { 
u.username.includes("tag").size || 0 

})
let bayan = message.guild.members.cache.filter().then(u => { 
u.roles.cache.has("rol id").size || 0

})
let erkek = message.guild.members.cache.filter().then(u => { 
u.roles.cache.has("rol id").size || 0

})
 

message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`
    
    Tagdaki Üye Sayısı : ${tag}

    Bayan Üye Sayısı : ${bayan}

    Erkek Üye Sayısı : ${erkek}

    Toplam Üye Sayısı : ${message.guild.memberCount}
    
    `)
)


}
//OSKOBS
exports.conf = { 
enabled: true,
guildOnly: true, 
aliases: ['say'], 
permLevel: 0
 }; 
//OSKOBS
exports.help = { 
name: 'say', 
description: '', 
usage: 'say' 
};