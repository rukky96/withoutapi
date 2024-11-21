const express = require("express");
const app = express();

const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000

app.get('/api/users', (req, res) => {
    res.send('These are the users')
})

app.listen(port, () => {
    console.log("Server is Running")
})

module.exports = app;