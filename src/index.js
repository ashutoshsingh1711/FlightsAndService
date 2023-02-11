const bodyParser = require('body-parser');
const express = require('express');
const dotenv =   require('dotenv').config()
const {PORT} = require('./config/serverConfig')
const setupAndStartServer = async () => {

    //create express object
    const app = express();

    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}))

    app.listen(PORT, () => { 
        console.log(`Server started at ${PORT}`);
    })
 }  
 setupAndStartServer(); 