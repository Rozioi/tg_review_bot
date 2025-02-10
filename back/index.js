const express = require('express');
const cors = require('cors');
const bot= require('./src/config/telegram');
require("dotenv").config();

const app = express();
app.set('trust proxy', 1);

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT

app.get('/', (req,res) => {
    res.status(200).json({success: true, message: 'Something went wrong!'})
})
app.use((err,req,res,next)=> {
    console.error(err.stack);
    res.status(500).json({success: false, message: 'Something went wrong!'})
})

app.listen(PORT,() => {
    console.log('Server start for port:', PORT)
})