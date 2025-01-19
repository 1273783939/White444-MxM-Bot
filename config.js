import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = '' //Ejemplo: +584241836217
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['584241836217', 'Creador 👑', true],
   ['584241836217', 'Owner 🍭', true],
   ['', 'Owner ☁️', true],
   ['', 'Owner 🍭', true],
   [''],
   [''],
   ['5219983694618']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.5'
global.vs = '2.0.7'
global.vsJB = '5.0'
global.nameqr = 'Demon-2.2'
global.namebot = 'Demon 2.2 ᰔᩚ'
global.sessions = 'DemomSession'
global.jadi = 'DemonJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '⪛✰ Demon 2.0 - Ultra ✰⪜'
global.botname = 'Demon-2.0'
global.wm = 'Demon-Ultra 🤍'
global.author = 'mᥲძᥱ ᑲᥡ : Prak.harper ☕'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ Prak.harper'
global.textbot = 'Demon 2.0 : prak.harper 🤍'
global.namebot = 'Demon 2.0'
global.stickpack = `© ⍴᥆ᥕᥱrᥱძ ᑲᥡ Prak.harper`
global.titulowm = '-❀ᩙ̈͟༚̮ ⡞᪲=͟͟͞🄶𝚎᪶۫۫𝚗᪶۫۫𝚎᪶۫۫𝚜᪶۫۫𝚒᪶۫۫𝚜᪶۫ 𝚊᪶۫𝚒᪶۫͜ ≼᳞ׄ ᵎ ˚꙳꤬ꨪ'
global.titulowm2 = '.‧·ீ੭ ¡ ᗃᮢ፝֟͡Demon B۵ᴛ el ᴍᴇᴊ꧔ʀ !˚̩̩̥͙°̩̥༅˚'
global.igfg = '@usxr_angelito0'
global.titu = '©️ ρσωε૨ ɓყ ɠαℓαאყ ƭεαɱ'
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*'
global.vs = '2.0.7'
global.namechannel = '𝑫𝒆𝒎𝒐𝒏-𝑩𝒐𝒕 - 𝑪𝒉𝒂𝒏𝒏𝒆𝒍'
global.stickauth = `© Demon 2.2 By prakharper-OFC`
global.dis = ':⁖֟⊱┈֟፝❥'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.png')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = 'https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24'
global.group2 = 'https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24'
global.canal = 'https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24'
global.github = 'https://github.com/Prakharper/Demon-2.2.git' 
global.instagram = 'https://www.instagram.com/harperprak' 
global.whatsApp = 'https://wa.me/584241836217'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ᰔᩚ 𝙳𝙴𝙼𝙾𝙽 ᥕһᥲ𝗍sᥲ⍴⍴ ᑲ᥆𝗍', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}};

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'GenesisBot-MD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𖥔.𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨❞ ꔷ──᜔◇⃟̣̣⃕✨', jpegThumbnail: catalogo }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'GenesisBot-MD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𝙳 𝙴 𝙼 𝙾 𝙽 ☠︎︎', jpegThumbnail: catalogo }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'GenesisBot-MD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘݄𖠵⃕⁖𝐒𝐭𝐢𝐜𝐤𝐞𝐫 (^_^♪) 🤍', jpegThumbnail: catalogo }}};

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363220939514640@newsletter',
ch2: '120363343366246815@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
