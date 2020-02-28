const express = require('express')
const dotenv  = require('dotenv')

// Import bootcamp routes file
const bootcamp = require('./routes/bootcamp')



// Load env variables

dotenv.config({ path:'./config/config.env' }) ;


const app = express()

app.use('/api/v1/bootcamps' , bootcamp)




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`))