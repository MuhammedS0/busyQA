const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/crypto-coin-tracker";


const connectToDb = async() => {

    const dbConnection = mongoose.connection;

    // set event handlers
    dbConnection.on("open", () => {
        console.log(`Connected to MongoDB`)
    })

    dbConnection.on("error", (err) => {
        console.log(`Mongoose connection error: ${err}`)
    })

    await mongoose.connect(dbUrl);
}

module.exports = {
    connectToDb
}