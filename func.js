//const { Attachment, AttachmentBuilder }    = require('discord.js');
const consts = require("./consts.json");
const base = require("./mnt.json");
const axios = require('axios');  
//const fs = require('fs');
//const path = require('path');
//const request = require('request');

this.mscDate = function ()
{
    return (new Date()).toLocaleString("ru-RU", { timeZone: 'Europe/Moscow' })
}

this.randomInt = function (min, max) {
    return min + parseInt(Math.random() * (max - min))
}

this.sqlqueryfetch = async function (sql) {
    var param = {
        type: "sqlquery",
        sql: sql
    }
    
    //const command = `${consts.app_server}sql.php`;
    const command = `${consts.app_server}sql.php?type=sqlquery&sql=${sql}`;
    //console.log(command)
    let response = await axios.get( command)

    let ret = await response.data;
    //console.log(ret)
    return ret
}

/*
this.sqlquery = function (sql) {
    sql = encodeURIComponent(sql)
    let query = `${consts.app_server}sql.php?type=sqlquery&sql=${sql}`;

    return query;
}

this.sqlQuery = async function (ssql) {
    var param = {
        type: "sqlquery",
        sql: ssql
    }
    ssql = encodeURIComponent(ssql)
    const command = `${consts.app_server}sql.php?type=sqlquery&sql=${ssql}`;

    return fetch(command, {})
}

this.sqlqueryfetch = async function (ssql) {
    var param = {
        type: "sqlquery",
        sql: ssql
    }
    ssql = encodeURIComponent(ssql)
    const command = `${consts.app_server}sql.php?type=sqlquery&sql=${ssql}`;
    //console.log(command)
    let rjson = await fetch(command, {})

    let ret = await rjson.json();
    //console.log(ret)
    return ret
}

this.sqlqueryfetch_post = async function (ssql) {
    var param = {
        type: "sqlquery",
        sql: ssql
    }
    const command = `${consts.app_server}sql.php`;
    //console.log(command)
    let rjson = await fetch(command, {
        method: 'POST',
        body: JSON.stringify(param),
        headers: { 'Content-Type': 'application/json' }
    })

    let ret = await rjson.json();
    console.log(ret)
    return ret
  
}



this.sqlexec = async function (_sql) {
    let params = {
        sql: _sql,
        type: "exec"
    }

}

this.getChannel = async function (robot, id) {
    return robot.channels.fetch(id)
}


this.sqlexecvk = async function (commid, funcname, Start) {
    const sql = `${consts.app_server}vk.php?funcname=${funcname}&commid=${commid}&Start=${Start}`;
    console.log(sql);
    return fetch(sql)
}
*/

this.sleep = function (milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

this.getMNT = function () {
    let n = parseInt(Math.random() * (base.mnt.length))
    let row = base.mnt[n]

    let k = 1 + parseInt(Math.random() * (row[2]-1))
    let ret = new Object()
    ret.title = row[0]
    ret.src = `https://mnt.cattus2.ru/${base.mnt[n][1]}/${base.mnt[n][1]}-${k}.jpg`

    return ret


}