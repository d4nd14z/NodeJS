'use strict'

const express = require("express");
const app = express();
const productRouter = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/demo", productRouter);

module.exports = app