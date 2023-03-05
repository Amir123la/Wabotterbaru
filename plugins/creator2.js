let handler = function (m) {
  // this.sendContact(m.chat, '6285832221893', 'Nurutomo', m)
  conn.sendContact(m.chat, '6285832221893', 'ᴀᴍꜱᴀʟ', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(kontak)$/i

module.exports = handler
