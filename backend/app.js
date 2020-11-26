require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const session = require('express-session')
const cors = require('cors')
// import router
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const braintreeRoutes = require('./routes/braintree')
const orderRoutes = require('./routes/order')

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
app.use(session({
    secret: 'my secret string',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 6 * 60 * 60 } // 12hs
}))
app.use(cookieParser())
app.use(expressValidator());
app.use(cors());

//routes middleware
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", braintreeRoutes)
app.use("/api", orderRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})