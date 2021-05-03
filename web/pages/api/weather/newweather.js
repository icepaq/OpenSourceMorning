// The application will only connect to the Mongo cluster with whitelisted IP addresses
const OpenWeather = require('./openweather.js');

module.exports = class UpdateWeather {

    async run(city) {
        const { MongoClient } = require("mongodb");
        const open = new OpenWeather();

        const uri =
            "mongodb+srv://my_username:my_password@cluster0.dgxwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        let temps = {};


        try {
            await client.connect();

            let weather = await open.main(city);

            const database = client.db('weatherdb');
            const collection = database.collection('weatherdb');

            const query = weather;
            temps = await collection.insertOne(query);

        } finally {
            await client.close();
        }

        return temps;
    }

}