// Verify email doens't already exist

module.exports = class CheckUser {

    async run(email) {
        const { MongoClient } = require("mongodb");

        const uri =
            "mongodb+srv://my_username:my_password@cluster0.dgxwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        let r;
        try {

            await client.connect();

            const database = client.db('weatherdb');
            const collection = database.collection('users');

            let query = {
                email: email,
            };

            r = await collection.countDocuments(query);
            
            console.log(r);
        }
        finally {
            await client.close();
        }

        if( r > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}