const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/inotebook?directConnection=true&tls=false&readPreference=primary';

const connectToMongo = async () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo")
    })
}

module.exports = connectToMongo;