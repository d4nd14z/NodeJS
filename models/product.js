/**
 * D2(RS) Project 
 * Schema Models
 * MongoDB Database Connection
 * Fucking Coronavirus (Covid-19) - Wash your hands
 * @author: @d4nd14z
 * @since: Apr 10 / 2021
 */

'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    description: String
});



module.exports = mongoose.model('Product', ProductSchema);


