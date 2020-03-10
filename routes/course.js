const express = require('express')

const { getCourses, getACourse, deleteACourse} = require('../controllers/courses')

const router = express.Router({ mergeParams : true })


router.route('/').get(getCourses)

router.route('/:id').get(getACourse)
                    .delete(deleteACourse)



module.exports = router                