require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const morgan = require('morgan')
const hikesController = require('./controllers/hikes.js')



//middleware 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(morgan("dev"));

app.use("/", hikesController);

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + " is mongo not running?"));
db.on('connected', ()=> console.log('mongoose connected'));
db.on('disconnected', () => console.log("mongo disconnected"));

app.get("/", (req, res)=> {
    console.log('hello')
    res.redirect('/hikes')
})

// listener
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
        })