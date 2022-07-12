const axios = require('axios').default;

module.exports = async (ctx) => {
    const ciudad = ctx.message.text.split('/tiempo ')[1];

    try {
        const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OWM_API_KEY}&units=metric`);

        ctx.reply(`El tiempo en ${ciudad} es:
    🌡 Temperatura: ${data.main.temp}
    🔥 Máxima: ${data.main.temp_max}
    ❄️ Mínima: ${data.main.temp_min}
    💧 Humedad: ${data.main.humidity}%`);
    } catch (err) {
        console.log(err.message);
        ctx.reply('Ha ocurrido un error!');
    }
}