const { stringify } = require("uuid");

const encode = (string) => {
    let buff = Buffer.from(string);
    return buff.toString('base64');
}

const decode = (string) => {
    let buff = Buffer.from(string, 'base64');
    return buff.toString('ascii');
}
module.exports = { encode, decode }