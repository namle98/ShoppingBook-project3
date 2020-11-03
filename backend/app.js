const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const cors = require('cors')
require('dotenv').config()

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
app.use(expressValidator());
app.use(cors());

//routes middleware
app.use("/api", userRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})