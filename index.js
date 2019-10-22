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

const PORT = process.env.PORT ||5000;

server.listen(PORT, () => {
    console.log(`\n===Server listening on port ${PORT} ===\n`);
});