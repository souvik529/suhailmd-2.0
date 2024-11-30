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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_25_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDMwLFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSSXNCSGVjU0JNL25NZmZBcHZSakRVRFE1UkQ3RTJQTHp6MzhUZlhJTTFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6UWllVkVlVlRvaTF3MVpEcmxVMFhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1MjQ5YTg3LTEwNzYtNGQyYi05NmRiLWRjYTZmZjYwYjZjMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDE1LFxuICAgICAgNTcsXG4gICAgICA2MixcbiAgICAgIDUwLFxuICAgICAgMTcyLFxuICAgICAgMTAsXG4gICAgICAxOTEsXG4gICAgICAxMDMsXG4gICAgICAxLFxuICAgICAgODYsXG4gICAgICA3NSxcbiAgICAgIDkwLFxuICAgICAgMTkxLFxuICAgICAgMTg2LFxuICAgICAgMTY5LFxuICAgICAgMTM2LFxuICAgICAgMTI1LFxuICAgICAgMjA5LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA1OSxcbiAgICAgIDE2NyxcbiAgICAgIDk0LFxuICAgICAgMjAsXG4gICAgICAyOCxcbiAgICAgIDk5LFxuICAgICAgMzgsXG4gICAgICAyNTIsXG4gICAgICA5NixcbiAgICAgIDEyMixcbiAgICAgIDIyOCxcbiAgICAgIDEwNixcbiAgICAgIDc1LFxuICAgICAgMTQ5LFxuICAgICAgMTIxLFxuICAgICAgNTgsXG4gICAgICAxOTEsXG4gICAgICAyMjYsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkNUVktXTDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODkwMjc5NDI3ODoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQzMTk0NzYzMzUwMDM0OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xHSXJaa0RFT1dVcmJvR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOStteUhFbTRGdVNiMFBCc3d6UDF0U0ZZZytBT0ExeVR2cE8xVXZqSzJEOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtWlZkZlVCVHRUS1ZKMEtobWwyd1g2NGk1Z1d2czJza1ljZTBGWnNlYUFrNWxJQmdlbG15TVZ0d0JyNDZ0Zmk0bGtBRTdKZDZOeEFHWURzWnZkTWtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyU2pkUzY0cmpLdkM4S2JBb1FpSHNiYld6UVE3MUh2M0tBNjhBbFU1V2tVSjlSM1lZdC9PZUszZFZBREZOSDFWQnI2QnpPUFBBMm9sUEs3QXhsRkdEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg5MDI3OTQyNzg6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI5ODc0OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZExcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVkTC5qc29uIjogIntcImtleURhdGFcIjpcIlNyY1NGeFVTdFRIZHdSU1JDVmpiWjdVdFhiRklFZlRSY1Z4VFA5dmJkRXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODU4NDczNTIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyOTYyNjczMzYyXCJ9Igp9"  // PUT your SESSION_ID 


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
