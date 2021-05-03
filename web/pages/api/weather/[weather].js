const GetWeather = require('./getWeather');
const NewWeather = require('./newweather.js');
const DeleteWeather = require('./deleteWeather.js');

export default async function cacheWeather(req, res) {

    let getWeather = new GetWeather();
    let newweather = new NewWeather();
    let deleteweather = new DeleteWeather();

    let city = req.query.weather;

    let data = await getWeather.run(city);

    if (data == null) {  // If result is empy
        console.log('Result is empty. Adding New Entry');

        await newweather.run(city);
        data = await getWeather.run(city);
    }
    else if (Date.now() - data.epoch > 300000) {  // Update every 5 minutes
        console.log("Updating Weather Value");

        await deleteweather.run(city);
        await newweather.run(city);
    }
    else {
        console.log('Using Cached Value')
    }

    res.status(200).json({ data: data });
}