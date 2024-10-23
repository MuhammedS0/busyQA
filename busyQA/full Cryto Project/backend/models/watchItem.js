const mongoose = require("mongoose");

const watchItemSchema = mongoose.Schema({
    symbol: String,
    dateCreated: Date,
});

const WatchItem = mongoose.model("watchItem", watchItemSchema);

module.exports = WatchItem;