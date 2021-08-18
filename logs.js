console.log('logs.js AKTIF!')

const TeleBot = require('telebot')
const delay = require('delay')
let fs = require('fs')
let dev = 'ID KAMU/OWNER BOT'

const bot = new TeleBot({
    token: process.env.TOKEN
})

module.exports = bot => {

    bot.on(['/showmonitorlogs'], async (msg, args) => {
        if (msg.from.id.toString().includes(dev)) {
           let readlogs = fs.readFileSync('userlogs.txt', {encoding:'utf-8'})
           if (readlogs.length < 4096) {
           return await bot.sendMessage(msg.from.id, `${readlogs}`)
           } else {
               return await bot.sendDocument(msg.from.id, './userlogs.txt')
           }
        } else {
            return bot.sendMessage(msg.from.id, `Maaf kamu bukan dev, aku tidak mengenal mu 🙁`)
        }
    })

}



