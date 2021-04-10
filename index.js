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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Ruta API EndPoint para obtener el listado de todos los productos almacenados en la B.D.
 * @method: GET
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.get("/demo/product", (req, res) => {
    res.status(200).send({ products: [] });
});

/**
 * Ruta API EndPoint para obtener el registro de un unico producto almacenado en la B.D.
 * @method: GET
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.get("/demo/product/:productId", (req, res) => {

});

/**
 * Ruta API EndPoint para insertar (registrar)un producto dentro de la B.D.
 * @method: POST
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.post("/demo/product", (req, res) => {
    console.log(req.body);
    res.status(200).send({ message: 'El producto se ha recibido' });
});

/**
 * Ruta API EndPoint para editar (actualizar) un producto almacenado de la B.D.
 * @method: PUT
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.put("/demo/product/:productId", (req, res) => {

});

/**
 * Ruta API EndPoint para borrar (eliminar) un producto almacenado en la B.D.
 * @method: DELETE
 * @author: @d4nd14z
 * @since: 2021-04-10
 */
app.delete("/demo/product/:productId", (req, res) => {

});


mongoose.connect(`mongodb://${dbhost}:${dbport}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err){
        return console.error(`D2(R2) Project - ERROR: No se ha podido establecer la conexion con la base de datos mongodb://${dbhost}:${dbport}/${database}.\n${err}`);
    }
    else{
        console.log(`D2(RS) Project - MongoDB Server Running on mongodb://${dbhost}:${dbport}/${database} ...... (OK)`);
        app.listen(port, () => {
            console.log(`D2(RS) Project - API RESTFull Running on http://${host}:${port} ........................... (OK)`);
        });
    }    
});

