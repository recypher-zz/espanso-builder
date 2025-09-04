const mongoose = require('mongoose');
const user = process.env.MONGO_USER;
const pass = encodeURIComponent(process.env.MONGO_PASS);
const dbName = process.env.MONGO_DB;
const host = process.env.MONGO_HOST;

async function connectToMongoDB() {
    return mongoose.connect(
        `mongodb://${user}:${pass}@${host}:27017/${dbName}?authSource=admin`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
}

module.exports = connectToMongoDB;