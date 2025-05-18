// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "QUEEN~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pLMWZERjEwVDVGZ2pvSHdFWHdRL2pRTVF4Y0Q2OHlKYktxK1FSOGtFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU42cjZHUFVXdmZTNFJUQno5b2FJNEJtMFplOW5kUWxOVkZYTGdwUmp6Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT2hRY3gwQ2VLK3ZwVmxZdlpwcUpybjZERWdmanRvTmpwci91bmN2VTN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQTI0MTVpOE1Ud2R6ckZYSm9BRUxBbmJtSncrbGd3M3FCak13ZzBoZVg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQRGdvY3Qxb3dXajhOMUh2VktLMWxySFlxVFgydktEVmRBd2hhWDdaMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncxcGFhVG41MXpUdWFrbTUzU2FkQjBBWERRWmNmRmxOZWZsa2JuQlUwU0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUMrOHRSOWYzYnNMR1gxQWdKbFJLZXpxMzhBZW9BZ1ZMT3QrRVAyRTkzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0RPSnVMUWljUkwvS25oM2x3MVNnT0FYNlVIWWN0TVZjQnEyaHBablBRUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFiMnVNN1Z1dFNYSWxnbkdkRFh1Q2I2VlFtU0xRODEzSTNSRkU0bTR5bExNTTVIUkpEc1NEYTlTUTRWc0xaT2Q4NitqNXB0emdNMkttUmVlbHlaZ2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiIwTTY5QkY4blRuSnBIMGYzc0ltdlBvT1IrK3BBOThhaWE1Tk5LUTM4ZFFFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNOMnN0VVlRd29PbndRWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkbENhQmFtNDFFTXlWa251N25FQnIybko1OElocVQ0SThtTS91ZEY2Y1ZBPSIsImFjY291bnRTaWduYXR1cmUiOiI1dTZzTlRYeEZlNjFJRGdNWkZJQzFPM3IreVpjRDkzTEhUL29OMU0xaUVxUzZuajlJQk8zaVhTSjJhN2RVWmhYSFBlZmVWWEVrbjFmWHJRMGEyTE9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoick9GaDVwcVc4cXdjQnU4TEptSmxEc2czd3BpaHI5eUUxTytFS2xzT242bDZLU284QzJ0RWZoVnRja01uQk1aOThUb3RwcCsrekxFVFlYSHpGdWtQanc9PSJ9LCJtZSI6eyJpZCI6IjI1NDEwNzA2NTY0NjozNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZGA8J2RhV/wnZGG8J2RgPCdkLzwnZC/8J2QuPCdkYYg4oCi4oCiIiwibGlkIjoiNTA1MzUxODkyMDA5ODY6MzRAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDEwNzA2NTY0NjozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYWlFtZ1dwdU5SRE1sWko3dTV4QWE5cHllZkNJYWsrQ1BKalA3blJlbkZRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDc1NjcwNjAsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCTHEifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : true,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  BOT_NAME: process.env.BOT_NAME || "XΞNØCRYPT-XD",
  MENU_IMAGE: process.env.MENU_IMAGE || "https://i.ibb.co/vChw8N9b/IMG-20250424-WA0042.jpg",
  DESCRIPTION: process.env.DESCRIPTION || "© 𝐑𝐄𝐆𝐀𝐑𝐃𝐒 𝐃𝐀𝐑𝐊 𝐓𝐄𝐂𝐇",
  OWNER_NAME: process.env.OWNER_NAME || "XΞNØCRYPT",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "25407065646",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
