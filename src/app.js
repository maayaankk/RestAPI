const express = require("express");
require("../src/db/conn");
require('dotenv').config;

const router = require("./routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router)
// Routes

app.get("/", async(req,res) => {
    res.send('Hello from the server');
})
// Server listening on port 300

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

