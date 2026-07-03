/* global __dirname */

const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(morgan("combined"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})


app.get("/api/info", (req, res) => {
    res.json({
        application: "DevOps Internship Assignment",
        version: "1.0.0",
        status: "running"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

