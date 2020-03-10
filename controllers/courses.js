const Course = require('../models/courses')
const errResponse = require('../utils/errResponse')
const asyncHandler = require('../middlewares/asyncMiddleware')

// @desc  :   get all bootcamps
// @route :   api/v1/courses
// @route :   api/v1/bootcamps/:bootcampsId/courses
// @access :  public


exports.getCourses = asyncHandler( async(req, res, next) =>{
    let query;

    if(req.params.bootcampId){
        query = Course.find( {bootcamp : req.params.bootcampId} )
    }
    else{
        query = Course.find().populate({
            path : 'bootcamp',
            select : 'name description'
        })
    }

    const courses = await query

    res.status(200).json({
        success :  true,
        count : courses.length,
        data : courses
    })

})

// @desc  :   get a course
// @route :   api/v1/courses/:id
// @access :  public

exports.getACourse = asyncHandler( async(req, res, next) =>{
    const course = await Course.findById(req.params.id)

    if(!course){
        return next(new errResponse(`Course not found with id ${req.params.id}`), 404)
    }
    res.status(200).json({
        success : true,
        count : course.length,
        data : course
    })
})

// @desc  :   delete a course
// @route :   api/v1/courses/:id
// @access :  public
exports.deleteACourse = asyncHandler( async(req, res, next) =>{
    const course = await Course.findByIdAndDelete(req.params.id)

    if(!course){
        return next(new errResponse(`Course not found with id ${req.params.id}`), 404)
    }
    res.status(200).json({
        success : true,
        count : course.length,
        data : course
    })
})
