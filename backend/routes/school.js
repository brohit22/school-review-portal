const express = require('express');
const router = express.Router();
const School = require('../models/School');
const auth = require('../middlewares/auth');

// Add a review to a school
router.post('/:schoolId/review', auth, async (req, res) => {
  const { schoolId } = req.params;
  const { rating, comment } = req.body;

  try {
    const school = await School.findById(schoolId);
    const newReview = { author: req.user.id, rating, comment };
    school.reviews.push(newReview);
    await school.save();
    res.json(school);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Like a review
router.post('/:schoolId/review/:reviewId/like', auth, async (req, res) => {
  try {
    const school = await School.findById(req.params.schoolId);
    const review = school.reviews.id(req.params.reviewId);
    if (!review.likes.includes(req.user.id)) {
      review.likes.push(req.user.id);
    } else {
      review.likes = review.likes.filter((userId) => userId.toString() !== req.user.id);
    }
    await school.save();
    res.json(school);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
