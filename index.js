const schedule = require("node-schedule")
const func = require("./func.js");
const {Global} = require("./global.js");
const package = require("./package.json");
const {WebSite} = require("./website.js");

global.local = process.env.COMPUTERNAME == "CAT2-D"

if (global.local) {
    const config = require('./config.json'); // Подключаем файл с параметрами и информацией
    global.token  = config.token 
    global.vk_token  = config.vk_token
}
else {
    global.token  = process.env.token 
    global.vk_token  = process.env.vk_token
}
console.log("++++++++ Start ++++++++")
global.vk_version = package.vk_version;
global.prefix = package.prefix;

console.log(package.vk_version)

schedule.scheduleJob(
    { minute: new schedule.Range(0, 55, 5), second: 15, tz: "Europe/Moscow" },
    async function () {
        console.log(func.mscDate())

    })
    WebSite.Start()