const mongoose = require('mongoose');
require('dotenv').config();

const dbUri = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);

module.exports = () => {
    return mongoose.connect(dbUri);
};
