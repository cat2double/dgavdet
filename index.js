const schedule = require("node-schedule")
const func = require("./func.js");

console.log("++++++++ Start ++++++++")

schedule.scheduleJob(
    { minute: new schedule.Range(0, 55, 5), second: 15, tz: "Europe/Moscow" },
    async function () {
        console.log(func.mscDate())

    })

