const Registration = require('./registration.js')
const crypto = require('crypto');

// Handler takes username, email and password. Hashes password using SHA512 
// Then calls the registration class to add the user to the database
export default async function registration(req, res) {

    let username = req.query.username;
    let email = req.query.email;
    let password = 'S4LT123' + req.query.password;  // Salting password with a constant. Will add randomized salts.

    password = crypto.createHash('sha512').update(password).digest('hex');

    let registration = new Registration();
    const result = await registration.run(username, email, password);

    res.status(200).json({ data: result});
}