const fs = require('fs');
const { join } = require('path');

var jwt = require(`jsonwebtoken`);

var privateKey = fs.readFileSync(join(__dirname, `./keys/private.key`), `utf8`);
var publicKey = fs.readFileSync(join(__dirname, `./keys/public.key`), `utf8`);

var payload = {
    name: `John Doe`,
    id: 123,
    role: `admin`,
};

console.log("Payload: ", JSON.stringify(payload));

 var signInOption = {
    algorithm: `RS256`,
    expiresIn: `1h`,
    issuer: `localhost`,
    audience: `http://localhost:8080`,
};

var token = jwt.sign(payload, privateKey, signInOption);
console.log("Token: ", token);

var verifyOption = {
    algorithm: `RS256`,
    issuer: `localhost`,
    audience: `http://localhost:8080`,
};

var verified = jwt.verify(token, publicKey, verifyOption);
console.log("Verified: ", verified);

var decode = jwt.decode(token);
console.log("Decoded: ", decode);

