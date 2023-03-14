const express = require('express')
const router = express.Router()
const { validationError } = require('@hapi/joi/lib/errors');

const review = require('../controllers/reviewController');
const validation = require('../validation/review/review_validation');


router.post('/addReview', validation.addReviewValidation, review.addReview)
router.patch('/updateReview/:_id',review.updateReview)
router.delete('/deleteReview/:_id',review.deleteReview)
router.get('/listReview/:_id',review.reviewList)
router.get('/reviewDetail/:company_id',review.reviewDetails)

module.exports = router;
