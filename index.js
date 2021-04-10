/**
 * D2(RS) Project 
 * RESTFull API
 * Love or Hate It
 * Fucking Coronavirus (Covid-19) - Wash your hands
 * @author: @d4nd14z
 * @since: Apr 10 / 2021
 */

'use strict'

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log(`D2(RS) Project - API RESTFull Running on http://localhost:${port} .......................... (OK)`);
});