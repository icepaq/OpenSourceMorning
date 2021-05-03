// The application will only connect to the Mongo cluster with whitelisted IP addresses

module.exports = class getWeather {
    
    async run(city) {

        const { MongoClient } = require("mongodb");
        const uri =
            "mongodb+srv://my_username:my_password@cluster0.dgxwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        let result = {};
        
        try {
            await client.connect();

            const database = client.db('weatherdb');
            const collection = database.collection('weatherdb');
            
            const query = {
                city: city
            };

            result = await collection.findOne(query);
            return result;

        } finally {
            await client.close();
        }
    }

    async r() {
        run().catch(console.dir);
    }
    
}

