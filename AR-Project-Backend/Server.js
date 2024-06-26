require('dotenv').config(); 

const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

app.get('/', (req, res) => res.send("API working!"));

module.exports = app;