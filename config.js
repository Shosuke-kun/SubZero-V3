const fs = require('fs')

const { existsSync } = require('fs')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("263719647303")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'darrelmucheri@gmail.com'
global.github = 'https://github.com/Mr Fr3nk/SubZero V3'
global.location = 'Sultanpur IN'
global.sudo = process.env.SUDO || '263719647303'
global.website = 'https://mrfrank-ofc.vercel.app' //wa.me/+6288296172396
module.exports = {
  botname: process.env.BOT_NAME || 'SubZero V3',
  ownername:process.env.OWNER_NAME || 'Mr Frank',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0], 
  packname: process.env.PACK_INFO.split(";")[1],
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || '62',
  antifake : process.env.FAKE_COUNTRY_CODE || '50',
  readmessage: process.env.READ_MESSAGE || true,
  prefix: process.env.PREFIX || ['.'],
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'true',
  pmpermit: process.env.PMPERMIT || "false",
  mongodb_url: process.env.MONGODB_URI || "Enter-Mongo-URI-HERE",
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'kick',
  HEROKU: {
        HEROKU: process.env.HEROKU || `true`,
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
    },
  BRANCH: 'main',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
 LANG: process.env.THEME|| 'SECKTOR',
 WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
