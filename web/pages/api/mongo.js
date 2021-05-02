// The application will only connect to the Mongo cluster with whitelisted IP addresses


export default async function mongo(req, res) {

    const { MongoClient } = require("mongodb");
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
            const database = client.db('weatherdb');
            const weather = database.collection('weatherdb');
            // Query for a movie that has the title 'Back to the Future'
            const query = { city: 'toronto'};
            temps = await weather.findOne(query);
            console.log(temps);
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run().catch(console.dir).then(() => {
        res.status(200).json({data: temps});
    });

    

}

