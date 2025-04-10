import {Bot} from "grammy";

const urlRegex = /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$/

const startTelegram = async () => {

    const bot = new Bot(process.env.BOT_TOKEN!)
    try {
        bot.on("message", (ctx) => {

            if (!ctx.message.text)
                ctx.reply('Где ваше сообщение??? 🤔')
            else {
                if (urlRegex.test(ctx.message.text))
                    ctx.reply("Ваша ссылка для открытия в web_app(это нужно чтоб получить контекст телеграмма без внутренних изменений бота)", {
                        reply_markup: {
                            inline_keyboard: [[{
                                text: "Ссылка",
                                web_app: {url: ctx.message.text || 'http://localhost:8080'}
                            }]]
                        }
                    })
                else
                    ctx.reply('Ссылка не прошла регекс')
            }
        })
    } catch (e) {
        void e
    }
    

    await bot.start()
}

export default startTelegram
