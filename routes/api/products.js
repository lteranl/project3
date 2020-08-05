const express = require("express");
const router = express.Router();

const Product = require("../../models/Products");
const { db } = require("../../models/Products");

router.get("/", (req, res) =>{
    Product.findAll({}).toArray(function(err, result) {
        if(err) throw err;
        console.log(result);
        db.clost();
    })
})