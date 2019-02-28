"use strict";
const express = require("express");
const cartItems = express.Router();
const pool = require("./pg-connection-pool")

function selectAll(req, res) {
    pool.query("select * from shoppingcart").then(function(result) {
        res.send(result.rows);
});
};
cartItems.get("/cart-items", function(req, res) {
    selectAll(req, res);
        });

cartItems.post("/cart-items", function(req, res) { 
        pool.query("insert into shoppingcart (product, price, quantity) values($1::text, $2::int, $3::int)",
         [req.body.product, req.body.price, req.body.quantity]).then(function() {
            selectAll(req, res);
             })
});

cartItems.put("/cart-items/:id", function(req, res) { 
    pool.query("update shoppingcart set quantity=$1::int where id=$2::int",
    [req.body.quantity, req.params.id]).then(function() {
        selectAll(req, res)
        })
    })
cartItems.delete("/cart-items/:id", function(req, res) {
        pool.query("delete from shoppingcart where id=$1::int", 
        [req.params.id]).then(function() {
             selectAll(req, res);
            })
        })
module.exports = cartItems;