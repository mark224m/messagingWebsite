const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/test'; //connecting to database and test can be any name for the database!!
const db = monk(connectionString);

module.exports = db;