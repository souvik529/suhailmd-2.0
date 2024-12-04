const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://suhailmd-2-0-9dkx.onrender.com"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_33_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDczLFxuICAgICAgICA5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgMzksXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMyxcbiAgICAgICAgNjksXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNTYjNRQytJa1FpS3pMcTJ4WVBiSTl6aytlSFdDc1c3TWlxYi9vQis4RGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMyxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMyxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIld6Ym03eTZjUXFTX3JSVVpiVWZWbndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzQxZWE3NzYtYjJmNi00YjYzLTgwNjItYjAxMGNlYzAzNGQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMTE2LFxuICAgICAgMjIsXG4gICAgICAzNCxcbiAgICAgIDgsXG4gICAgICAyNDQsXG4gICAgICAxMDIsXG4gICAgICAyMixcbiAgICAgIDMyLFxuICAgICAgMjQxLFxuICAgICAgNjMsXG4gICAgICAxMCxcbiAgICAgIDE5NCxcbiAgICAgIDEzNyxcbiAgICAgIDMwLFxuICAgICAgMTc2LFxuICAgICAgMjIxLFxuICAgICAgMTA5LFxuICAgICAgMTE1LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgOTEsXG4gICAgICAxMDEsXG4gICAgICAxNzMsXG4gICAgICAyMDcsXG4gICAgICAxODMsXG4gICAgICAxMjMsXG4gICAgICAxNyxcbiAgICAgIDIyMSxcbiAgICAgIDE4MyxcbiAgICAgIDI1MCxcbiAgICAgIDAsXG4gICAgICAxNzEsXG4gICAgICAyNTAsXG4gICAgICAxNTIsXG4gICAgICA1NyxcbiAgICAgIDE3MSxcbiAgICAgIDI1MSxcbiAgICAgIDM5LFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE4RE04UkU4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg5MDI3OTQyNzg6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEQUlSWSBNSUxLXCIsXG4gICAgXCJsaWRcIjogXCIxNDMxOTQ3NjMzNTAwMzQ6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZ2K29FSEVOaWd1N29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMVE5wQ2JCRDFZREFlcG5SZGV1Q0FxS2E0RlFUQUE1dXVieWV3dCs4V0NRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJBYmRZZFYyMGtEaFVlNkYxSDQwUDd2cHNoSU9JRzJqZjJHTnA5QjF1Q1VOMjhOZU01QlNWajE3S3Z2SlA3VDFobG9nd0Q1SnVwK0M2WG9SZC96dENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdYU201Rjd2WmpKUzlGd1FOY2VDMnkxK0tyK2MxdEdGWGdkdTV3Wm5JMFVUMnJnZDdPQjloOTBydHBBbWFKckdQWG9nTW1rWlErMVp2OFlLVEczREJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODkwMjc5NDI3ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMyMTgzOTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKY2xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpjbC5qc29uIjogIntcImtleURhdGFcIjpcIjZZL1R2b1BjbzMwZkFDczJCT1YrRWRtU0lWRXZKNXZRbzBRVkRQczlLVEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg4MzE1MDIyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMTU3NDY1NjI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
