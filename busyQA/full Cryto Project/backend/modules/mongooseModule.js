const  WatchItem  = require("../models/watchItem");

const getWatchItemSymbols = async() => {
    // fetch all watchlist docs from MongoDb
    const watchItems = await WatchItem.find({});
    // we need to filter on symbol only..
    const watchSymbols = watchItems.map(item => item.symbol);
    return watchSymbols;
}

module.exports = {
    getWatchItemSymbols
}