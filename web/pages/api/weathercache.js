const Openweather = require('./openweather.js');
const sqlite3 = require('sqlite3').verbose();


export default async function cacheWeather(req, res) {
    
    var openweather = await new Openweather();
    var response = await openweather.main("");

    res.status(200).json({data: response});
}