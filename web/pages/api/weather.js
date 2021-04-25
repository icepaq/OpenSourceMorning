// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// If someone could add asynchronous support that would be great
export default  (req, res) => {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=toronto&appid={API KEY HERE}")
      .then(response => response.json())
      .then(
        (result) => {
          var temp = (result.main.temp - 273.15).toFixed(1);
          res.status(200).json({temp: temp});
        }
      );
}
