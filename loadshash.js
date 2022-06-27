const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: ["GUILDS"]
})

let bot = {
    client
}

const guildID = "989162095767592970"

client.slashcommands = new Discord.Collection()

client.loadSlashcommands = (bot, reload) => require(".handlets/slashcommands")(bot, reload)
client.loadSlashcommands(bot, false)

client.on("ready", async () => {
    const guild = client.guilds.cache.get(guildID)
    if (!guild)
        return console.error("Target guild not found")
    
    await guilds.commands.set([...client.slashcommands.values()])
    console.log(`Successfully loaded in ${client.shashcommands.size}`)
    process.exit(0)
})

client.login(process.env.CLIENT_TOKEN)