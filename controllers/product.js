/**
 * D2(RS) Project 
 * RESTFull API
 * Controller /demo/products
 * Fucking Coronavirus (Covid-19) - Wash your hands
 * @author: @d4nd14z
 * @since: Apr 10 / 2021
 */


'use strict'

const Product = require("../models/product");  //Incluir database models

function getProductsAll(req, res){
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
}

function getProductById(req, res){
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
}

function insertProduct(req, res){
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
}

function updateProduct(req, res){
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
}

function deleteProduct(req, res){
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
}

module.exports = {
    getProductsAll,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}