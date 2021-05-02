// Accesses the OpenWeather API

module.exports = class openweather {

    async main(city) {
        let results;
        await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city  + "&appid=APIKEY")
            .then(response => response.json())
            .then(
                (result) => {
                    const r = {
                        temp: (result.main.temp - 273.15).toFixed(1),
                        weather_decription: result.weather[0].description,
                        pressure: result.weather[0].temperature,
                        humidity: result.weather[0].humidity,
    
                        wind_speed: result.wind.speed,
                        wind_gust: result.wind.gust,
                        wind_deg: result.wind.deg,
                    }
                    
                    results = r;
                }
            );

            return results;
    }
}
