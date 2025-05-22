let express = require('express')
let colors = require('colors')
let dotenv = require ('dotenv').config()
let {errorHandler} = require('./middleware/errorMiddleware')
let connectDB = require('./config/db')
let port = process.env.PORT || 5002

connectDB()

let app = express()

app.use(express.json());

app.use(express.urlencoded({extended: false}))



app.use('/api/medicals', require('./routes/medicalRoutes'))

app.use(errorHandler)
 app.listen(port, () => console.log(`server started on port ${port} `))