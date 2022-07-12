'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

// Add your code here

function findStockBySymbol(company) {
     return Object.keys(stocks).includes(company);
}

function findStockByPrice(price) {
    const userChoice = undefined;
    if(price === high)
    {
    for(let i = 0; i < stocks.length; i++) {
            if(stocks.price[i] > stocks.price[i+1]) {
            userChoice = stocks[i];
            }
        }
    }

    else {
        for(let j = 0; j < stocks.length; j++) {
            if(stocks.price[i] < stocks.price[i+1]) {
                userChoice = stocks[i];
            }
        }
    }
    return userChoice
}

app.post("/", (req, res) => {
    const stockChoice = findStockBySymbol(req.body.companyName);
    res.send(`You placed an order to buy ` + req.body.query + ` stocks of ${stockChoice.company}. The price of one stock is ${stockChoice.price}. The total for this order is `);
});

app.post("/", (req, res) => {
    const priceChoice = findStockByPrice(req.body.price);
    res.send(`${priceChoice}`);
 })

// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});