const Openweather = require('./openweather.js');

export default async function cacheWeather(req, res) {

    let openweather = await new Openweather();
    let response = await openweather.main(req.query.weather);    
    
    res.status(200).json({data: response});
}