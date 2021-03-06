const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clandetail",
  aliases: ['claninfo'],
  description: "get clan detail",
 execute(client, message, args) {

    // Errors
    if(!args.length){
      return message.channel.send({content: "Provide The Clan Prefix\n Usage: *^claninfo <prefix>* \n first 3 letter of a clan name is its prefix"})
    }

// Clan Info's as Objects
let bed = {
  name: 'Bedroom Community [SEA]',
  clanid: '851302141499015208',
  logo: 'https://cdn.discordapp.com/icons/869217076466835506/c4593d64d987054def3c427ad9de330a.webp?size=96',
  level: '74',
  link: 'https://discord.gg/Xq67vfWmzT',
  title: `Winner of BBO Clan Battle Season One!`
}
let per = {
  name: 'Persistence [SEA]',
  clanid: '877450177991020584',
  logo: '',
  level: '',
  link: `Winner of BBO Clan Battle Season two!`
}
let khu = {
  name: 'Khudarto [SEA]',
  clanid: '850939055872147456',
  logo: '',
  level: '',
  link: ''
}
let fiv = {
  name: 'Five Fingers n Extra [SEA]',
  clanid: '799676323948920902',
  logo: '',
  level: '',
  link: ''
}
let _7t1 = {
  name: '7t1 Bangladesh [SEA]',
  clanid: '772444761906348052',
  logo: 'https://media.discordapp.net/attachments/903874086160191493/982970626694316032/5_METALIC.jpg',
  level: '82',
  link: 'https://discord.gg/PUSNgnCVjR'
}
let azu = {
  name: 'Azure Spirit [SEA]',
  clanid: '838085789841752134',
  logo: '',
  level: '100',
  link: 'https://discord.gg/mFB59MeuKf'
}
let str = {
  name: 'Strawberry Fields [SEA]',
  clanid: '1000623144786198548',
  logo: '',
  level: '31+',
  link: ''
}

// Created Embed
let embed = new MessageEmbed().setColor('#FFFFFF');

// Get Targeted Clan
     if(args[0] == 'bed'.toLowerCase()) var target = bed;
else if(args[0] == 'per'.toLowerCase()) var target = per;
else if(args[0] == 'khu'.toLowerCase()) var target = khu;
else if(args[0] == 'fiv'.toLowerCase()) var target = fiv;
else if(args[0] == '7t1'.toLowerCase()) var target = _7t1;
else if(args[0] == 'azu'.toLowerCase()) var target = azu;
else if(args[0] == 'str'.toLowerCase()) var target = str;
else{ return message.channel.send({content: 'cant find the clan \n Usage: *^claninfo <prefix>* \n first 3 letter of a clan name is its prefix.'})}

// Get Clan Name
embed.setTitle(target.name)
// Get all clan members
var memberList = [];
let targetRole = message.guild.roles.cache.get(target.clanid);
targetRole.members.forEach(mmbr => 
  {memberList.push(mmbr.id)})

// Mark Leaders
let leaderString = '';
targetRole.members.forEach(mmbr => {

if(mmbr.roles.cache.has('851722247206600704')) leaderString = leaderString + ` <@!${mmbr.id}>`;
})

  // Leaders Field
  embed.addField('??? Clan Leaders', leaderString)
// Mark Members
let memberString = '';
memberList.forEach(element => {
  memberString = memberString + ` <@!${element}>`;
});

  // Members Field
  embed.addField(`??? Clan Members [${memberList.length}]`, memberString)

// check if logo, level, Discord Server and set it in description

if (target.level.length) {
  embed.addField(`Clan level`, target.level, true)
}
if (target.link.length) {
  embed.addField(`Discord Server`, target.link, true)
}
if (target.logo.length) {
  embed.setThumbnail(target.logo)
}
if (target.title) {
  embed.addField(`Titles`, target.title)
}


// Send Result
message.channel.send({embeds: [embed]})
  }}