const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require ('dotenv').config()

//app
const app = express()

//db

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

}).then (() => console.log('Db connected'))

//middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(cookieParser())


//routes middlewares

app.use("/api", userRoutes)


const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})