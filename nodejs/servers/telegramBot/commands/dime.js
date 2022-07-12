const googleTTS = require('google-tts-api');

module.exports = (ctx) => {
    // /dime frase a decir
    const frase = ctx.message.text.split('/dime ')[1];

    const url = googleTTS.getAudioUrl(frase, {
        lang: 'es',
        slow: false
    });

    ctx.replyWithAudio(url);
}