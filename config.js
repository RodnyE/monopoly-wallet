
// get env file
require('dotenv').config({path: __dirname + '/.env'});

const config = { 
    // directories
    DIR: __dirname, 
    CLIENT_DIR: __dirname + '/dist', 
    PORT: process.env.PORT || 3000, 
};

module.exports = config;