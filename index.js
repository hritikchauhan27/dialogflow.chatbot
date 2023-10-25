const dialogflow = require('dialogflow');
const express = require('express');
const bodyParser = require('body-parser');
const chatbot = require('./chatbot/responses')
require('dotenv').config();
const app = express();
const axios = require('axios');
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/df/server', (req, res) => {
    res.send("hii , server here ")
})

app.post('/chat', async (req, res) => {
    console.log(req.body);
    const { text, userId } = req.body;

    if (text.startsWith('Search Google: ')) {
        const query = text.substring('Search Google: '.length);
        const googleLink = await chatbot.searchGoogle(query);
        res.send(googleLink);
    } else {
        const resultQuery = await chatbot.textQuery(text, userId);
        console.log(resultQuery.fulfillmentText);
        res.send(resultQuery.fulfillmentText);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
