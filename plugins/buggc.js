let handler  = async (m, { conn }) => {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "groupInviteMessage": {
"groupJid": "120363025461390219@g.us",
"inviteCode": "z0JcSBd3mAhIfSSY",
"inviteExpiration": ` ᴀᴍꜱᴀʟ⿻ꫂ`,
"groupName": `ᴀᴍꜱᴀʟ⿻ꫂ`,
"caption": `ᴀᴍꜱᴀʟ⿻ꫂ`
 }
   }
}

await conn.reply(m.chat, `ᴀᴍꜱᴀʟ⿻ꫂ`, main)
}
handler.help = ['buggc']
handler.tags = ['bugmenu']
handler.command = /^buggc$/

handler.owner = true

export default handler