/* 
- tagall By Angel-OFC  
- etiqueta en un grupo a todos
- https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y
*/
const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const customEmoji = global.db.data.chats[m.chat]?.customEmoji || '❏◢ •.';
  m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const pesan = args.join` `;
  const oi = `*» INFO :* ${pesan}`;
  let teks = `*!     ꯭꯭𝗗𝗘𝗦𝗣𝗜𝗘𝗥𝗧𝗘𝗡  !*\n  *❲ 𝝦 𝗘 Ⲥ 𝖠 𝖣 𝝤 𝙍 𝗘 𝗦 貝 ❳ ₊ ${participants.length} =͟͟͞͞  *𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙴𝚂𝙲𝙻𝙰𝚅𝙾𝚂.* * 🩸\n\n ${oi}\n\n╭───㌃ 𝕯𝐄𝐌Ọ𝐍 𝐁Ọ𝐓- 𖩣ꪾ  ──愛 ᜒ𝅄'┄\n`;
  for (const mem of participants) {
    teks += `┊${customEmoji} @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰───┈┈┈•(❪ 🩸 ❫)•┈┈┈`;

  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ['todos *<mensaje opcional>*'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;

export default handler;