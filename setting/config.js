const fs = require('fs')

global.owner = "t.me/AndrazyyDev" //owner number
global.footer = "pfft" //footer section
global.status = true //"self/public" section of the bot

 // global by Andrazyy
global.andrazyy = "↯" // global simbol 🗿
global.teks = "❀ ✰ 𝐈𝐍𝐌𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 ✰ ❀"
global.versi = "18.0.0"
global.gen = "8 New Era"
global.cici = "Andrazyy¹⁹²²"
global.emoji1 = "💀"
global.emoji2 = "📵"
global.name = "𝐀𝐆͢𝐋𝐄𝐑͟π͟͞"
global.emoji3 = "🚫"
global.emoji4 = "💢"
global.emoji5 = "⭕"
global.emoji6 = "❌"
global.emoji7 = "🔴"

 // global bug name Andrazyy 
global.Andrazyy1 = "🐉𝐀𝐆𝐋𝐄𝐑͢ 𝐅𝐎𝐑𝐆𝐄𝐑͞͞🐉"
global.Andrazyy2 = "🐉𝐀𝐆𝐋𝐄𝐑͢ 𝐏𝐇𝐎𝐍𝐄͞͞🐉"
global.Andrazyy3 = "🐉𝐀𝐆𝐋𝐄𝐑͢ 𝐒𝐘𝐒𝐓𝐄𝐌͞͞🐉"
global.Andrazyy4 = "🐉𝐀𝐆𝐋𝐄𝐑͢ 𝐀𝐂𝐂𝐄𝐒𝐈𝐎𝐍͞͞🐉"
global.Andrazyy5 = "⪻ 🐉⃝⃝𝐂𝐡𝐚𝐧𝐧𝐞𝐥͢ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫͞͞🐉 ⪼"
global.Andrazyy6 = "https://whatsapp.com/channel/0029Vb30zLXLo4hWVPChF41q"
global.Andrazyyvip = "🐉𝐀𝐆𝐋𝐄𝐑͢ 𝐕𝐈𝐏•𝐁𝐔𝐆𝐒͞͞🐉"

global.lol = "";
global.mess = {
    owner: "lu bukan owner pantek"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
