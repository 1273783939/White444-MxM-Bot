import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.ibb.co/YDGYRhx/file.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D*

1- Demon bot-2.2🩸
*✰* https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Enlace anulado? entre aquí! 

♡ Canal Demon :
*✰* https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24

♡ Canal Demon :
*✰* https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24

> ${dev}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, fake)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler