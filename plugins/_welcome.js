/* 
- Código Creado y modificado por Prak-harper
- Welcome con imagen Card
- https://whatsapp.com/channel/0029Vb03dv95a23v1gG0gT24
*/
import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import canvafy from 'canvafy';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let chat = global.db.data.chats[m.chat];
  let web = 'https://genesis-support.vercel.app/';
  let webb = 'https://izumikzx.vercel.app/';
  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];
  let userName = user ? user.name : await conn.getName(who);

  const getUserAvatar = async () => {
    try {
      return await conn.profilePictureUrl(m.messageStubParameters[0], 'image');
    } catch (err) {
      return 'https://files.catbox.moe/ciy0l1.jpg';
    }
  };

  const generateImage = async (title, description) => {
    const userAvatar = await getUserAvatar();
    const img = await new canvafy.WelcomeLeave()
      .setAvatar(userAvatar)
      .setBackground(
        'image',
        'https://files.catbox.moe/ciy0l1.jpg'
      )
      .setTitle(title)
      .setDescription(description)
      .setBorder('#2a2e35')
      .setAvatarBorder('#2a2e35')
      .setOverlayOpacity(0.3)
      .build();

    return img;
  };

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `🩸 *Se unió* al grupo *${groupMetadata.subject.trim()}*\n     ㌃ @${m.messageStubParameters[0].split`@`[0]} \n\n    愛 ────㌃ Bienvenido al infierno. Esperamos que tengas una estadía amena dentro de las profundidades del inframundo, no seas sensible o vas fuera.\n\n> > ✐ No olvides usar *#help* si necesitas algo.\n> 🜸 ¡Disfruta de tu tiempo con nosotros!`;

    let img = await generateImage(
      '¡BIENVENIDO!',
      `¡Hola Bienvenido al grupo!`
    );

    await conn.sendAi(m.chat, botname, dev, bienvenida, img, img, web, null);
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `🩸 *Se salió* del grupo   *${groupMetadata.subject.trim()}*\n  ㌃ @${m.messageStubParameters[0].split`@`[0]}\n\n    愛 ────㌃ Un inútil más que se sale del grupo, esperemos nunca vuelva.\n\n> ✐ No olvides usar *#help* si necesitas algo.\n> 🜸 No eres bienvenido.`;

    let img = await generateImage(
      '¡ADIOS!',
      `¡Hasta pronto Usuario!`
    );

    await conn.sendAi(m.chat, botname, dev, bye, img, img, webb, null);
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `❀ *Se salió* del grupo  *${groupMetadata.subject.trim()}*\n    ✰ @${m.messageStubParameters[0].split`@`[0]}\n\n    Ꮚ⁠˘⁠ ⁠ꈊ⁠ ⁠˘⁠ ⁠Ꮚ ¡Nos vemos pronto! ¡Que tengas un buen día!\n\n> ✐ No olvides usar *#help* si necesitas algo.\n> 🜸 Adiós...`;

    let img = await generateImage(
      '¡ADIOS!',
      `¡Hasta pronto Usuario!`
    );

    await conn.sendAi(m.chat, botname, dev, kick, img, img, web, null);
  }
}