import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/audios/bot.mp3';
  const chat = global.db.data.chats[m.chat];

  if (/^bot$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
conn.reply(m.chat, `[🩸] 愛 ────㌃ Hola, soy 𝕯𝐄𝐌Ọ𝐍 𝐁Ọ𝐓. ¿En qué puedo ayudarte?
\n\n> ✐ No olvides usar *#help* si necesitas algo o !menu para ver mis comandos.`, m, rcanal, )
}
if (/^sexo$/i.test(m.text)) {
conn.reply(m.chat, `*pervertido* 🫣`, m, rcanal, )
}
if (/^tetas|teta$/i.test(m.text)) {
conn.reply(m.chat, `*que caliente eres* 🥵`, m, rcanal, )
}
if (/^bug$/i.test(m.text)) {
conn.reply(m.chat, `*tu mamá we* 😹`, m, rcanal, )
}
if (/^pene$/i.test(m.text)) {
conn.reply(m.chat, `*comes* 😹`, m, rcanal, )
}
  return !0;
};
export default handler;