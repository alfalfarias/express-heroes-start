const mongoose = require('mongoose');
const { HOST, PORT, USERNAME, PASSWORD, DATABASE } = require('./config/database');

const connect = async () => {
    const CREDENTIAL = (USERNAME && PASSWORD) ? `${USERNAME}:${PASSWORD}@` : '';
    const URL = `mongodb://${CREDENTIAL}${HOST}:${PORT}/${DATABASE}`;
    const connection = await mongoose.connect(URL);
    return connection;
};

const query = async (callback) => {
    const connection = await connect();
    const data = await callback();
   // await connection.disconnect();
    return data;
};

module.exports = {
    connect,
    query
};