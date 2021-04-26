import Openweather from './openweather.js'


// For some reason main() is returning undefined
// I've tried with and without the .then() functions. Notion seems to work.
// Spent some time tinkering and reading different articles/forums. Can't seem to get this to work.


export default async function cacheWeather(req, res) {
    var openweather = new Openweather();
    await openweather.main("")
        .then((result) => {
            console.log(result);
            res.status(200).json({temp: result});
        });
    
    
    
}