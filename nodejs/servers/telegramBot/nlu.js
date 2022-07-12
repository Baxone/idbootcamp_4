const { Wit, log } = require('node-wit');
const fs = require('fs');

module.exports = async (ctx) => {
    const client = new Wit({
        accessToken: process.env.WIT_API_KEY,
        logger: new log.Logger(log.DEBUG)
    })

    const res = await client.message(ctx.message.text);

    if (res.intents.length > 0 && res.intents[0].confidence > 0.8) {
        const { intents: [{ name }] } = res;
        const content = fs.readFileSync(`./frases/${name}.txt`, 'utf-8');

        const frases = content.split('\n');

        const num = Math.floor(Math.random() * frases.length);
        ctx.reply(frases[num]);
    } else {
        ctx.reply('Mi no entiende...');
    }

}