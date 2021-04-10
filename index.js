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
const mongoose = require("mongoose");
const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
const dbhost = "localhost";
const dbport = "27017";
const database = "d2(r2)-project";

//DatabaseModels
const Product = require("./models/product");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Ruta API EndPoint para obtener el listado de todos los productos almacenados en la B.D.
 * @method: GET
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.get("/demo/product", (req, res) => {
    Product.find({}, (err, products) => {
        if (!err){
            if (!products){
                return res.status(404).send({
                    code: 404,
                    data: null,
                    message: `Not Found`
                });
            }
            res.status(200).send({
                code: 200,
                data: products,
                message: 'Operacion Exitosa'
            });
        }
        else{
            return res.status(400).send({
                code: 400,
                data: null,
                message: `Bad Request`
            });
        }
    });
});

/**
 * Ruta API EndPoint para obtener el registro de un unico producto almacenado en la B.D.
 * @method: GET
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.get("/demo/product/:productId", (req, res) => {
    let productId = req.params.productId;
    Product.findById(productId, (err, stored) => {
        if (!err){
            if (!stored) { 
                return res.status(404).send({
                    code: 404,
                    data: null,
                    message: `Not Found`
                }); 
            }
            res.status(200).send({
                code: 200,
                data: stored,
                message: 'Operacion Exitosa'
            });
        }  
        else{
            return res.status(400).send({
                code: 400,
                data: null,
                message: `Bad Request`
            });
        }
    });
});

/**
 * Ruta API EndPoint para insertar (registrar)un producto dentro de la B.D.
 * @method: POST
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.post("/demo/product", (req, res) => {
    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;
    product.save((err, stored) => {
        if (!err){ 
            res.status(200).send({
                code: 200,
                data: stored,
                message: "Producto registrado exitosamente."
            });
        }
        else{
            res.status(500).send({
                code: 500,
                data: null,
                message: `No se ha podido almacenar el producto en la base de datos. ${err}`
            });
        }
    });
});

/**
 * Ruta API EndPoint para editar (actualizar) un producto almacenado de la B.D.
 * @method: PUT
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.put("/demo/product/:productId", (req, res) => {
    let productId = req.params.productId;
    let update = req.body;
    Product.findByIdAndUpdate(productId, update, (err, updated) => {
        if (!err){
            if (!update){
                return res.status(400).send({
                    code: 400,
                    data: null,
                    message: `Bad Request`
                });
            }
            else{
                res.status(200).send({
                    code: 200,
                    data: updated,
                    message: 'Operacion Exitosa'
                });
            }
        }
        else{
            return res.status(500).send({
                code: 500,
                data: null,
                message: `No se ha podido actualizar el producto en la base de datos. ${err}`
            });
        }
    });
});

/**
 * Ruta API EndPoint para borrar (eliminar) un producto almacenado en la B.D.
 * @method: DELETE
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.delete("/demo/product/:productId", (req, res) => {
    let productId = req.params.productId;
    Product.findById(productId, (err, product) => {
        if (!err){
            if (!product){
                return res.status(404).send({
                    code: 404,
                    data: null,
                    message: `Not Found`
                });
            }
            product.remove(err => {
                res.status(200).send({
                    code: 200,
                    data: null,
                    message: 'Operacion Exitosa'
                });
            });
        }  
        else{
            return res.status(500).send({
                code: 500,
                data: null,
                message: `No se ha podido eliminar el producto en la base de datos. ${err}`
            });
        }
    });
});


mongoose.connect(`mongodb://${dbhost}:${dbport}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err){
        return console.error(`D2(RS) Project - MongoDB Server Running on mongodb://${dbhost}:${dbport}/${database} ...... (ERROR)\n${err}`);
    }
    else{
        console.log(`D2(RS) Project - MongoDB Server Running on mongodb://${dbhost}:${dbport}/${database} ...... (OK)`);
        app.listen(port, () => {
            console.log(`D2(RS) Project - API RESTFull Running on http://${host}:${port} ........................... (OK)`);
        });
    }    
});

