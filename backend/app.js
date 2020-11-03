const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// app
const app = express()

// DB

mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true
})
.then(() => console.log('MONGODB CONNECTED'))

// middleware

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//routes middleware
app.use("/api", userRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})