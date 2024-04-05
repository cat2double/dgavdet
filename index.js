const schedule = require("node-schedule")
const func = require("./func.js");
const {Global} = require("./global.js");


global.local = process.env.COMPUTERNAME == "CAT2-D"
let token, vk_token
if (global.local) {
    const config = require('./config.json'); // Подключаем файл с параметрами и информацией
    token  = config.token 
    vk_token  = config.vk_token
}
else {
    token  = process.env.token 
    vk_token  = process.env.vk_token
}
console.log("++++++++ Start ++++++++")

console.log(token)
/*
schedule.scheduleJob(
    { minute: new schedule.Range(0, 55, 5), second: 15, tz: "Europe/Moscow" },
    async function () {
        console.log(func.mscDate())

    })

*/