import express from 'express';
import School from '../models/School.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

// Add a review to a school
router.post('/:schoolId/review', auth, async (req, res) => {
  const { schoolId } = req.params;
  const { rating, comment } = req.body;

  try {
    const school = await School.findById(schoolId);
    if (!school) {
      return res.status(404).json({ msg: 'School not found' });
    }

    const newReview = { author: req.user.id, rating, comment };
    school.reviews.push(newReview);
    await school.save();
    res.json(school);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Like or unlike a review
router.post('/:schoolId/review/:reviewId/like', auth, async (req, res) => {
  try {
    const school = await School.findById(req.params.schoolId);
    if (!school) {
      return res.status(404).json({ msg: 'School not found' });
    }

    const review = school.reviews.id(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ msg: 'Review not found' });
    }

    if (!review.likes.includes(req.user.id)) {
      review.likes.push(req.user.id);
    } else {
      review.likes = review.likes.filter(
        (userId) => userId.toString() !== req.user.id
      );
    }

    await school.save();
    res.json(school);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Export the router
export default router; // Use ES6 export
