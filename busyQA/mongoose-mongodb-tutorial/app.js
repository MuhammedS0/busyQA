// app.js

const mongoose = require("mongoose");
const User = require("./user");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/User",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

db.once("open", async() => {
    console.log("Connected to MongoDB");

    try {
        //create a new user instance
        const newUser = new User({
            name: "John Doe",
            email: "john@example.com",
            age: 30,
        });
        // Save the user to the database using asnc/await
        await newUser.save();
        console.log("User saved successfully");
    } catch (error) {
        console.error("Error saving user:", error);
    } finally {
        // Close the MongoDB connection
        mongoose.connectino.close();
    }
})