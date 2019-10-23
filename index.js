const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

//Set Globals
const path = require("path");
global.dbConfig = path.resolve(__dirname + "/data/dbConfig");
console.log(dbConfig)

// Import Routes
const primaryRouter = require('./api/server')
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', primaryRouter);
server.use("/*", (req, res) => {
    const docs = [

        {url:'./api/watchlist', method:'POST', expects:{"coin-id": "1e31218a-e44e-4285-820c-8282ee222035","user-id": 2}},
        {url:'./api/:id/watchlist', method:'GET', returns:'[coin-object]'},
        {url:'./api/register', method:'POST', expects:{"Username": "", "Password":'notpassword', "Email":'nice@try.com'}},
        {url:'./api/login', method:'POST', expects:{"Username": "", "Password":'notpassword'}}
    ]
    res.status(404).json(docs)
  });

const PORT = process.env.PORT ||5000;

server.listen(PORT, () => {
    console.log(process.env.STAGE)
    console.log(`\n===Server listening on port ${PORT} ===\n`);
});