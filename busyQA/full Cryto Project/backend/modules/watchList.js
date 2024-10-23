// temporary cache, until we add the database;
const { getWatchItemSymbols } = require("./mongooseModule");
const { getCryptoCoins } = require("./cryptoCoinModule");
const { WatchItem } = require("../models/watchItem")

const addItem = async(symbol) => {
    try {
        if (!symbol) {
            console.log(`symbol is not valid`);
        }
        console.log(`Item ${symbol} has been added to watchlist`);
        // add symbol to watchlist 
        const item = new WatchItem({
            symbol: symbol,
            dataCreated: Date.now()
        })
        await item.save();
    } catch (err) {
        console.log(`There is an error adding ${symbol}: ${err}`);
    }  
}

const removeItem = async(symbol) => {  
    try {
        if (!symbol) {
            console.log(`symbol not valid`);
        }    
        console.log(`Item ${symbol} has been removed from watchlist`);
        await WatchItem.deleteOne({symbol: symbol});
    } catch (err) {
        console.log(`Couldn't remove ${symbol} from watchlist: ${err}`);
    }  
}

const getItems = async() => {
    try {
        console.log(`watch list items fetched` );

        // move from front end logic for filtering coins to server side/backend
        const coins = await getCryptoCoins();
        
        // we need to filter on symbol only..
        const watchSymbols = await getWatchItemSymbols();
        const filteredCoinData = coins.filter(coin => watchSymbols.includes(coin.symbol))
         
        return filteredCoinData;
    } catch (err){
        console.log(`couldn't get items: ${err}`);
    }  
}

module.exports = {
    addItem,
    removeItem,
    getItems,
}