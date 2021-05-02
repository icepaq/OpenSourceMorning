const Openweather = require('./openweather.js');
const getWeather = require('./getWeather');
const UpdateWeather = require('./updateweather.js');

export default async function cacheWeather(req, res) {

    let openweather = await new Openweather();
    let response = await openweather.main(req.query.weather);   

    let weather = new getWeather();
    let data = await weather.run();
    
    if (data == null) {
        updateweather = new UpdateWeather();
    }

    res.status(200).json({data: response});
}