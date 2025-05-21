const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFoMWtKakUxUkNMZzRNajNVNnRNWlo4bmwxdEpXMVU3dzBSYlRoeG1XOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGxvT1FTNlNiV3VjU3RFZEpURFNIeCtvd0Q4ZThpV1JwNVlZbDU3VmFXND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SXduUHBSZldpTXRWT2R4TURjMVJlZXRoM2lMVlI2cERndnNDRzgzRzNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyWEFXSWtOQy9lY3FpeGNFRFpBZ3hnT20vRlVWY1BLbXY5YUlYbEMwSjJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IQUl5a0s0RnhNOWhya0lzMTJ6Z3doUldKVEo1N0w5ZFlRem9NVEVuSFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl1NDM2NGFhdFMzbUVHVDUyUWJ5ZzMxeWN2NU11enplUGlmZHNxVktURTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0p2NmFORStSY1pDTWZwd1B5UnBpYStvcmpHZ0pVS1pkcXI4YUVEVlMxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU1JeXRWUkptdGkxK0gvbDlUSHM3aXcxME80NEFEOG05bDNlMFNZSWQxZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik04TmlTRkxtZ0xLNGJrdXVRTmlON2Q4SlZVUFZwbDEwcFRKemd6QW50MnliZVV3MDJVZEx2ME8wN0xXMFVGL1Z3Z0d4NmNjcEk2RS94VVk5cFJnVENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiMElmTEozd2hHZUxsZEhPZHc5eEVISzY2Y1ZBbENCSjFlU2JOTGgxOStSQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUUxEMVhEWVAiLCJtZSI6eyJpZCI6IjI2MzcxOTQ5NTA2NzoyMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjgwMjU2MzEyNTg2Mjg0OjIxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlAyMHZvSEVQYk10c0VHR0MwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieGNaWStDUDFvc3NZcXVBZmdMNDdSekY0WHJwaHVKbVE1aW05Z21sTitIRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNVFWMzU5NjRjMGlUWnMzSS9laERSVVIzWnhLcUR6bHlOMHd6MVhsdXlVTGF4eENSUTZYSTAwRlJSck1UMzBlR3o5cUM1d0xhY2RPc3EzaEFTME8yQUE9PSIsImRldmljZVNpZ25hdHVyZSI6InZuS3I4R0RPbFpPSzN1OW5CbEtVUkRxOUVVVlJXYm9sVmF0YzZDNlpQZ3FVek5zcWhyL3huRU95U2RVMnVEY01jY0Y2c3JVNFFiV3liRHFRTElraERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE5NDk1MDY3OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNYR1dQZ2o5YUxMR0tyZ0g0QytPMGN4ZUY2NlliaVprT1lwdllKcFRmaHgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzgyMjIxMywibGFzdFByb3BIYXNoIjoiMlAxWWhmIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NEXUS-XMD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/70d7ut.jpeg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "NEXUS-XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "NEXUS-XMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254794146821",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "pkdriller",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© powered by Nexus-xmd*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lr95at.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> AM ACTIVE *NEXUS-XMD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "254794146821",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
