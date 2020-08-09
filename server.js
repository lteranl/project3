const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
const path = require("path");



app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")));
  }
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
app.use("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server up on port ${port} !`));
