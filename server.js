const express = require("express");
const app = express();

const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000

app.get('/api/users', (req, res) => {
    res.send('These are the users')
})

app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'home.html'))
})

app.listen(port, () => {
    console.log("Server is Running")
})


module.exports = app;