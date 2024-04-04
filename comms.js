const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const prefix = config.prefix; // «Вытаскиваем» префикс
//const fetch = import('node-fetch').then(mod => mod.default)
//const fetchP = import('node-fetch').then(mod => mod.default)
//const { Interim } = require('./interim.js');

// Команды //

async function test(robot, mess, args) {
  //let member = robot.users.cache.find(u => u.username === 'cat2double');
  const date = (new Date()).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' })

  let ret = {
    nickname: mess.member.nickname, flag: "", id: mess.author.id,
    globalName: mess.author.globalName,
    username: mess.author.username, avatarUrl: mess.author.displayAvatarURL()
  }

  //console.log(mess.member)

  let match = ret.nickname.match(/[\[\【](.+)[\】\]]/)
  if (match) {
    //console.log(match)
    ret.flag = match[1]
    //ret.username = ret.nickname.replace(match[0], "").trim()
  }
  else {

  }

  if (!ret.avatarUrl) {
    ret.avatarUrl = "https://cdn.discordapp.com/embed/avatars/4.png"
  }

  console.log(ret)

  let content = `
  nickname: \t${ret.nickname}
  username: \t${ret.username}
  globalName: \t${ret.globalName}
  flag: ${ret.flag}
  id: ${ret.id}
  avatarUrl: ${ret.avatarUrl}
  ${date}`
  mess.channel.send({ content: content })
  mess.react("👍");
  return
}

function hello(robot, mess, args) {

  const embed = {
    title: mess.member.nickname,
    thumbnail: {
      url: mess.author.displayAvatarURL(),
    },
    /*author: {
      name: mess.member.nickname,
      icon_url: mess.author.displayAvatarURL()
    },
    timestamp: new Date(),*/
  };
  console.log("hello")
  mess.reply({ content: "Привет!", embeds: [embed] });

}
function help(robot, mess, args) {

  let sender = new Array();
  sender.push("**Команды Джавдета**");
  sender.push("─────────────────");

  for (let c in comms_list) {
    if (comms_list[c].showhelp) {
      sender.push("**" + prefix + c + "**\n" + comms_list[c].about);
    }
  }
  sender.push("─────────────────");
  sender.push("**Грабь награбленное!**");
  let content = sender.join("\n");
  mess.channel.send({ content: content })
}
var comms_list = {
  "t": { out: test, about: "Test\nТест", deleteprev: false, showhelp: false },
  "hello": { out: hello, about: "Health check\nПроверка работоспособности", deleteprev: false, showhelp: true },
  "help": { out: help, about: "Help\nПомощь", deleteprev: false, showhelp: true },
};

module.exports.comms = comms_list;

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 