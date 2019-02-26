"use strict";
const express = require("express");
const cartItems = express.Router();
const cartList = [
    {
    id: 0,
    product: "Bat",
    price: 50,
    quantity: 1
    },
    
    {
    id: 1,
    product: "Cat",
    price: 100,
    quantity: 1
    },
    
    {
    id: 2,
    product: "Dog",
    price: 900,
    quantity: 1
    }
];
cartItems.get("/cart-items", function(req, res) {
    res.send(cartList);
    console.log("GET request made");
});

cartItems.post("/cart-items", function(req, res) { 
    cartList.push(req.body); // 
    console.log("POST method made");
    res.send(cartList); 
});

cartItems.put("/cart-items/:id", function(req, res) { 
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].id == req.params.id) {
            cartList.splice(i, 1, req.body);
            console.log(req.body)
            console.log(req.params.id);
            res.send(cartList);
            break;
        } 
    } 
    console.log("PUT request made");
})
cartItems.delete("/cart-items/:id", function(req, res) {
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].id == req.params.id) {
            cartList.splice(i, 1);
            console.log(req.params.id);
            res.send(cartList);
            break;
        }
    }
    console.log("DELETE request made");
});
module.exports = cartItems;