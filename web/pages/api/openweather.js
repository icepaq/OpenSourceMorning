// Accesses the OpenWeather API

class openweather {

    async main(city) {

        console.log("OpenWeather.main() has been called");

        await fetch("http://api.openweathermap.org/data/2.5/weather?q=toronto&appid=cd840df68a157b4918f2e9e35b9f343e")
            .then(response => response.json())
            .then(
                (result) => {
                    var temp = (result.main.temp - 273.15).toFixed(1);
                    
                    var weather = result.weather.main;  // Sunny, clouds, rain etc.
                    var weather_decription = result.weather.description;
                    var pressure = result.weather.temperature;
                    var humidity = result.weather.humidity;
    
                    var wind_speed = result.wind.speed;
                    var wind_gust = result.wind.gust;
                    var wind_deg = result.wind.deg;
    
                    const r = {
                        temp: temp,
                        weather: weather,
                        weather_decription: weather_decription,
                        pressure: pressure,
                        humidity: humidity,
    
                        wind_speed: wind_speed,
                        wind_gust: wind_gust,
                        wind_deg: wind_deg,
                    }
                    
                    console.log("Returning Value R");
                    console.log(r);  // You can see in the console that this is outputting a value 
                    return r;  // But for some reason when r is returned, it's undefined...
                }
            );
    }
}
export default openweather;