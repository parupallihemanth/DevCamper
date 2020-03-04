const Bootcamp = require('../models/Bootcamp')
const errResponse = require('../utils/errResponse')
const asyncHandler = require('../middlewares/asyncMiddleware')

// @desc  :   get all bootcamps
// @route :   api/v1/bootcamps
// @access :  public

exports.getBootcamps = asyncHandler(async (req, res, next) =>{
    
    const bootcamps =  await Bootcamp.find()
        
        if(!bootcamps){
            return next( new errResponse(`Bootcammmp not found with ${req.params.id} `, 404))
        }

        res.status(200).json({success: true, data:bootcamps})
});

// @desc  :   get a bootcamp
// @route :   api/v1/bootcamps/:id
// @access :  public
exports.getABootcamp = asyncHandler(async (req, res, next) =>{
    
        const bootcamp = await Bootcamp.findById(req.params.id)

        if(!bootcamp){
            return next( new errResponse(`Bootcammmp not found with ${req.params.id} `, 404))
        }
        res.status(200).json({success:true, data : bootcamp })
})

// @desc  :   create a bootcamp
// @route :   api/v1/bootcamps
// @access :  public

exports.createBootcamp = asyncHandler(async (req, res, next) =>{
   
        const bootcamp = await Bootcamp.create(req.body);

        if(!bootcamp){
            return next( new errResponse(`Bootcammmp not found with ${req.params.id} `, 404))
        }

        res.status(201).json({
            success : true,
            body : bootcamp
        });
   
});

// @desc  :   update a bootcamp
// @route :   api/v1/bootcamps/:id
// @access :  public
exports.updateBootcamp = asyncHandler(async(req, res, next) =>{
    
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators  : true
        })
        if(!bootcamp){
            return next( new errResponse(`Bootcammmp not found with ${req.params.id} `, 404))
        }
        res.status(200).json({ success:  true, body : bootcamp})
    

})

// @desc  :   delete a bootcamp
// @route :   api/v1/bootcamps/:id
// @access :  public
exports.deleteBootcamp = asyncHandler(async (req, res, next) =>{
    
        const bootcamp =  await Bootcamp.findByIdAndDelete(req.params.id)
        
        if(!bootcamp){
            return next( new errResponse(`Bootcammmp not found with ${req.params.id} `, 404))
        }
        res.status(200).json({ success:true, data : {} })
  

     
    
})