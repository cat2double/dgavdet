const schedule = require("node-schedule")
//const axios = require("axios")
const func = require("./func.js");
const { Global } = require("./global.js");
const package = require("./package.json");
const { WebSite } = require("./website.js");
const { Client,
    IntentsBitField,
    Events,
    Partials,
    ModalBuilder,
    PermissionsBitField,
    Attachment,
    AttachmentBuilder,
    GuildMemberManager,
    Permissions,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    GatewayIntentBits,
    InteractionType,
    TextInputBuilder,
    TextInputStyle,
    StringSelectMenuBuilder,
} = require('discord.js');

const robot = new Client({
    intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
    ]
    ,
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});
global.Robot = robot
global.local = process.env.COMPUTERNAME == "CAT2-D"

if (global.local) {
    const config = require('./config.json'); // Подключаем файл с параметрами и информацией
    global.token = config.token
    global.vk_token = config.vk_token
}
else {
    global.token = process.env.token
    global.vk_token = process.env.vk_token
}
console.log("++++++++ Start ++++++++")
global.vk_version = package.vk_version;
global.prefix = package.prefix;

console.log(package.vk_version)

schedule.scheduleJob(
    { minute: new schedule.Range(0, 56, 4), second: 15, tz: "Europe/Moscow" },
    async function () {
        console.log(func.mscDate())
        /*
        axios.get('https://dgavdet.glitch.me')
            .catch()
*/
    })
robot.login(global.token)
WebSite.Start()
