const tg = require('node-telegram-bot-api');
require('dotenv').config();
const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token){
    console.error('Token: Not found tg bot token');
    process.exit(1);
}


const bot = new tg(token, {polling: true})

bot.on('text', async msg => {
    if(msg.text == '/start'){
        await bot.sendMessage(msg.chat.id, `Hello, ${msg.chat.username}`)
    }
})

module.exports = bot