const Openweather = require('./openweather.js');

export default async function cacheWeather(req, res) {

    var openweather = await new Openweather();
    var response = await openweather.main(req.query.weather);    
    
    res.status(200).json({data: response});
}