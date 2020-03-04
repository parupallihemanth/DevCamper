const ErrorResponse = require('../utils/errResponse')

const errHandler = ( err, req, res, next) =>{
    let error = { ...err };
    error.message = err.message;
   
    console.log(err)

    // Mongoose bad objectID
    // console.log(err.name)
    if(err.name === 'CastError'){
        const message =   `Bootcampppp not found with the id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }
    // Mongoose already exists error
    if(err.code === 11000){
        const message = 'Bootcamp name already exists, please select another name';
        error = new ErrorResponse(message, 404)
    }

     if(err.name === 'ValidationError'){
         const message = Object.values(err.errors).map(val => val.message);
         error = new ErrorResponse(message, 404)
     }

    res.status(error.statusCode || 500).json({ 
        succuess : false,
        error : error.message || 'server error'
    })
};



module.exports = errHandler