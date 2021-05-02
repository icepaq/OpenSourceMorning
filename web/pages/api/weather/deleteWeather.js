// The application will only connect to the Mongo cluster with whitelisted IP addresses
const OpenWeather = require('./openweather.js'); 

export default async function deleteWeather(req, res) {

    const { MongoClient } = require("mongodb");
    
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
            
            const query = {
                common: 'ABC'
            };

            const result = await collection.deleteMany(query);
            console.log("Deleted " + result.deletedCount + " documents");

        } finally {
            await client.close();
        }
    }
    run().catch(console.dir).then(() => {
        res.status(200).json({data: temps});
    });
}

