const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
require("isomorphic-fetch");
const dotenv = require("dotenv");
const Koa = require("koa");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = requier("@shopify/koa-shopify-auth");
const session = require("koa-session");
dotenv.config();
const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
    .connect(
        process.env.MONGO_URI || db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport") (passport);
app.use("/api/users", users);

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server up on port ${port} !`));
