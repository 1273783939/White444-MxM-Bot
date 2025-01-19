let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => icons) 
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
return conn.reply(m.chat, `*Elija una opción para configurar el grupo*\n\nEjemplo:\n*○ !${command} abrir*\n*○ !${command} cerrar*\n*○ !${command} bloquear*\n*○ !${command} desbloquear*`, m, rcanal)
await conn.groupSettingUpdate(m.chat, isClose)

if (isClose === 'not_announcement'){
m.reply(`🔓 *YA PUEDEN HABLAR ZORRAS.*`)
}

if (isClose === 'announcement'){
m.reply(`🔐 *SOLOS LOS LIDERES PUEDEN HABLAR.*`)
}}
handler.help = ['grupo *<abrir / cerrar>*']
handler.tags = ['group']
handler.command = ['group', 'grupo']
handler.admin = true
handler.botAdmin = true
export default handler
