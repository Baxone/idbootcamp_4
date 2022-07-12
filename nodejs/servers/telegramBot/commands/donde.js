const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',
    apiKey: process.env.GOOGLE_API_KEY
};

module.exports = async (ctx) => {
    const ciudad = ctx.message.text.split('/donde ')[1];

    const geocoder = NodeGeocoder(options);

    const res = await geocoder.geocode(ciudad);

    const imgMap = `https://maps.googleapis.com/maps/api/staticmap?center=${res[0].latitude},${res[0].longitude}&zoom=17&size=600x300&maptype=hybrid&markers=color:blue%7Clabel:S%7C${res[0].latitude},${res[0].longitude}&key=${process.env.GOOGLE_API_KEY}`;

    ctx.replyWithPhoto(imgMap);
    ctx.replyWithLocation(res[0].latitude, res[0].longitude);
}