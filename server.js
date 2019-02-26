"use strict";
const express = require("express");
const app = express();
const cartItems = require("./routes");

app.use(express.static("./public")); 

app.use(express.json()); 

app.use("/", cartItems); 

app.listen(8080, () => { 
    console.log("Server is running!");
});