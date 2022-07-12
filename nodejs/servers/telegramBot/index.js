const express = require('express');
const { Telegraf } = require('telegraf');

require('dotenv').config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Configuración
app.use(bot.webhookCallback('/url-telegram'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/url-telegram`);

app.post('/url-telegram', (req, res) => {
    res.send('Termina!');
});

// COMANDOS
bot.command('test', (ctx) => {
    console.log(ctx.message);
    ctx.reply('Estoy vivo!!');
    ctx.replyWithDice();
});
bot.command('tiempo', require('./commands/tiempo'));
bot.command('donde', require('./commands/donde'));
bot.command('dime', require('./commands/dime'));

bot.on('text', require('./nlu'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor escuchando en puerto ' + PORT);
});