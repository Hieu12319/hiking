require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')



//middleware 
app.use(express.urlencoded({extended: true}))
