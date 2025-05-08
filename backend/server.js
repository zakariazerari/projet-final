let express = require('express')
let dotenv = require ('dotenv').config()
let {errorHandler} = require('./middleware/errorMiddleware')
let port = process.env.PORT || 5002

let app = express()

app.use(express.json());

app.use(express.urlencoded({extended: false}))



app.use('/api/medicals', require('./routes/medicalRoutes'))
app.use(errorHandler)
 app.listen(port, () => console.log(`server started on port ${port} `))