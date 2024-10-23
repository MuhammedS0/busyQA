const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./database/connectionManager");
const bodyParser = require('body-parser');



connectToDb();

// create instance of express app
const app = new express();
app.use(bodyParser.json());
const watchList = require("./modules/watchList");
const { getCryptoCoins } = require("./modules/cryptoCoinModule");


const port = 3000;
// setup middleware
app.use(cors({
    origin: 'http://localhost:3000', // your frontend
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true
}));


//fetch watchlist
app.get('/watchlist', async(req, res) => {
    console.log(`GET - watchlist called`);

    const data = await watchList.getItems();
    // complete request, with response..
    res.send(data);
})

// add to watchlist
app.post('/watchlist', async(req, res) => {
    // updated express, uses request.query
    const { symbol } = req.body;
    console.log(JSON.stringify(req.body));
    await watchList.addItem(symbol);

    // no need to send back message, status 200 is enough
    res.send();
})

// delete from watchlist
app.delete('/watchlist', async(req, res) => {
    
    const { symbol } = req.body;
    await watchList.removeItem(symbol);

    res.send(`server delete received.`)
})


//fetch crypto coins
app.get('/cryptocoins', async(req, res) => {
    const data = await getCryptoCoins();
    res.send(data);
})

// ==> connect to mongoDb before express web server
connectToDb().then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
