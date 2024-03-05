const express = require("express");
const postal = require('node-postal');

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).send('Working');
});

app.get("/expand", async (req, res) => {
    const { address } = req.query;

    const expandedAddress = postal.expand.expand_address(address);

    res.status(200).send(expandedAddress);
});

app.get("/parse", async (req, res) => {
    const { address } = req.query;

    const parsedAddress = postal.parser.parse_address(address);

    res.status(200).send(parsedAddress);
});

module.exports = app;
