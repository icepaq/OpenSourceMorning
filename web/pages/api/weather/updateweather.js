// The application will only connect to the Mongo cluster with whitelisted IP addresses
const OpenWeather = require('./openweather.js');

module.exports = class UpdateWeather {

    async main() {
        const { MongoClient } = require("mongodb");
        const open = new OpenWeather();
        // Replace the uri string with your MongoDB deployment's connection string.
        const uri =
            "mongodb+srv://my_username:my_password@cluster0.dgxwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        let temps = {};
        async function run() {
            try {
                await client.connect();

                let weather = await open.main('toronto');

                const database = client.db('weatherdb');
                const collection = database.collection('weatherdb');

                const query = weather;
                temps = await collection.insertOne(query);

                console.log(temps);
            } finally {
                // Ensures that the client will close when you finish/error
                await client.close();
            }
        }
        return temps;
    }

}