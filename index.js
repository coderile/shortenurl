const express = require('express');
const mongoose = require('mongoose');
const createHttpError = require('http-errors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost:27017',{dbName: 'url-shortner'})
.then(() => { console.log('Mongoose connected') })
.catch((err) => { console.log(err) })
const ShortURL = require('./models/url.model')
const router = require('./router/url.router')
app.use('/',router)
app.use((req,res,next)=>{
    next(createHttpError.NotFound())
})
app.use((errreq,res,next)=>{
    res.status(err.status || 500)
    res.json({"message":err.message})
})

const PORT = process.env.PORT || 8999;
app.listen(PORT, () => { console.log(`server running at port ${PORT}`) })