// @desc  :   get all bootcamps
// @route :   api/v1/bootcamps
// @access :  public

exports.getBootcamps = (req, res, next) =>{
    res.status(200).send({success: true, data:"All bootcamps are here"})
}

// @desc  :   get a bootcamp
// @route :   api/v1/bootcamps/:id
// @access :  public
exports.getABootcamp = (req, res, next) =>{
    res.status(200).send({success:true, data:`Bootcamp ${req.params.id}`})
}

// @desc  :   create a bootcamp
// @route :   api/v1/bootcamps
// @access :  public

exports.createBootcamp = (req, res, next) =>{
    res.status(200).send({success:true, data:"Create a new bootcamp"})
} 

// @desc  :   update a bootcamp
// @route :   api/v1/bootcamps/:id
// @access :  public
exports.updateBootcamp = (req, res, next) =>{
    res.status(200).send({success:true, data:`updated ${req.params.id} bootcamp`})
}

// @desc  :   delete a bootcamp
// @route :   api/v1/bootcamps/:id
// @access :  public
exports.deleteBootcamp = (req, res, next) =>{
    res.status(200).send({success:true, data:`deleted ${req.params.id} bootcamp`})
}