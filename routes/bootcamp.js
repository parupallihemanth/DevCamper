const express = require('express');
const {getBootcamps, getABootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampsInRadius} = require('../controllers/bootcamps')

const courseRouter = require('./course')
const router = express.Router();

router.use('/:bootcampId/courses', courseRouter)

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/')
        .get(getBootcamps)
        .post(createBootcamp)

router.route('/:id')
        .get(getABootcamp)        
        .put(updateBootcamp)
        .delete(deleteBootcamp)



module.exports = router