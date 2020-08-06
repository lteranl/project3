const Products = require("../../models/Products");
const router = express.Router();
const express = require("express");
const { db } = require("../../models/Products");
const { default: Product } = require("../../client/src/components/shopify/Product");
const app = express()

router.get("/products_by_id", (req, res) => {
    Product.find({ })
    .then((data) => {
        console.log("data:", data);
        res.json(data);

    })
    .catch((error) => {
        console.log('error:', error)
    })
})

router.post("/dashboard", (req, res) => {
    const data = req.body;
    const addProduct = new Product(data);

    addProduct.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Error"})
            return;
        }
        return res.json({
            msg: "added to cart"
        })
    })
})

router.get('/name', (req, res) => {
    const data = {
        name: "blouse",
        description: "Blue Blouse 1970s",
        price: "$100"
    }
})

module.exports = router;