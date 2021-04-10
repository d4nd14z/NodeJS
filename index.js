/**
 * D2(RS) Project 
 * RESTFull API
 * Love or Hate It
 * Fucking Coronavirus (Covid-19) - Wash your hands
 * @author: @d4nd14z
 * @since: Apr 10 / 2021
 */

'use strict'

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

mongoose.connect(config.dbase, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err){
        return console.error(`D2(RS) Project - MongoDB Server Running on ${config.dbase} ...... (ERROR)\n${err}`);
    }
    else{
        console.log(`D2(RS) Project - MongoDB Server Running on ${config.dbase} ...... (OK)`);
        app.listen(config.port, () => {
            console.log(`D2(RS) Project - API RESTFull Running on http://${config.host}:${config.port} ........................... (OK)`);
        });
    }    
});