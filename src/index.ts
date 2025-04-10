import startTelegram from "@/telegram";
import dotenv from 'dotenv'

dotenv.config()


Promise.all([startTelegram()]).catch(error => {
    console.log(error)
})
