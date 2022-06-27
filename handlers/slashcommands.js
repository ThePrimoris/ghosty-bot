const fs = require("fs")

const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(file => file.endsWith(ending))
}

module.exports = (bot, reload) => {
    const {client} = bot

    let slashcommands = getFiles("./slashcommands/", ".js")

    if (slashcommands.length === 0)
        console.log("No slash commands loaded")

    slashcommands.forEach(f => {
        if (reload) delete require.cache[require.resolve(`../slashcommands/${f}`)]
        const slashmd = require(`../slashcommands/${f}`)
        client.slashcommands.set(slashcmd.name, shashcmd)
    })
}