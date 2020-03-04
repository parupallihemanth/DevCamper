const express = require('express')
const dotenv  = require('dotenv')
const connectDB = require('./config/db')
const errHandler = require('./middlewares/err')
// Load env variables

dotenv.config({ path:'./config/config.env' }) ;

// Connect to database
connectDB();



// Import bootcamp routes file
const bootcamp = require('./routes/bootcamp')






const app = express()

// body parser middleware

app.use(express.json());

app.use('/api/v1/bootcamps' , bootcamp)

// Error handler middleware

app.use(errHandler)


const PORT = process.env.PORT || 5000

const server = app.listen(PORT, 
                console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`))


process.on('unhandledRejection', (err, promise) =>{
   console.log(`Error: ${err.message} `);
   server.close(() =>process.exit(1))
});
