const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_00_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICA4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NixcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSnJNOTFScDd0R3RpMEFETUpYaDdjd01KZzc1L0V6cnlMRnpEdjRIaXROcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOGpXV2w0ZlJTNWE5VFlfdmNmSXdTd1wiLFxuICBcInBob25lSWRcIjogXCJjOTlhOGU2ZC00MDE3LTRiMjEtYmIwNy05MjAwMmNiNGU4YTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMjAyLFxuICAgICAgMTQ2LFxuICAgICAgMzksXG4gICAgICAxMDMsXG4gICAgICAyMzIsXG4gICAgICAyMTUsXG4gICAgICAxNTIsXG4gICAgICA3NCxcbiAgICAgIDIwMixcbiAgICAgIDE1MixcbiAgICAgIDExOSxcbiAgICAgIDIyOCxcbiAgICAgIDUxLFxuICAgICAgNzEsXG4gICAgICA4NyxcbiAgICAgIDE0NixcbiAgICAgIDg2LFxuICAgICAgMjQsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAxNDAsXG4gICAgICAxNDUsXG4gICAgICAxOTMsXG4gICAgICAxMTEsXG4gICAgICA5NCxcbiAgICAgIDQ5LFxuICAgICAgMjEyLFxuICAgICAgMjI1LFxuICAgICAgODgsXG4gICAgICAxMjgsXG4gICAgICAyMDksXG4gICAgICA0NCxcbiAgICAgIDEyMixcbiAgICAgIDIxLFxuICAgICAgNDMsXG4gICAgICAxNzYsXG4gICAgICA2LFxuICAgICAgMixcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWk5aNDU5MThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzcxODIzMDgwOToxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxMjU1NDQ3Mzg0MTE5OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t1SXJaa0RFSTd6cUxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOStteUhFbTRGdVNiMFBCc3d6UDF0U0ZZZytBT0ExeVR2cE8xVXZqSzJEOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZSEZFWGs4ZWRxbDc3SEFyK09zdVd0MEYxRkhyQUpOSlFydUNtSGs3R3JBVXFmNXA4RU01b2xXOHhCWjV6Vk11cnNhU052cXY5aWI1cDhLajZPNDFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJdkFZYTFZcXZnVXhwSUFyUUpJWXV2emthNHd4SGhPODRQSnNJSmQrZmxGU25uTEhCL1FUR3djQ3pMYzBnMGlLUi9VVGpSVmhhZHViZHhSTUhiai9oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc3MTgyMzA4MDk6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI5MTc2NDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
