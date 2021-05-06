module.exports = class Registration {

    async run(username, email, password) {

        const CheckUser = require('./checkuser.js');
        const check = new CheckUser();

        // Is email already registered
        if (await check.run(email)) { return "EMAIL_TAKEN" }

        
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
                username: username,
                email: email,
                password: password
            };

            r = await collection.insertOne(query);
            console.log(r);
        }
        finally {
            await client.close();
        }

        return r;
    }
}