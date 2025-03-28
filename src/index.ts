import {Bot} from "grammy";

const bot = new Bot("6910950593:AAENnF9L4Hu6S7F3roaDrAps3Kxz5z7YaJ4")

bot.on("message", (ctx) => ctx.reply("Ваша ссылка", {reply_markup: {inline_keyboard: [[{text: "Ссылка", web_app: {url: ctx.message.text || 'http://localhost:8080'}}]]}}));

bot.start();
