import School from '../models/School.model.js';
import Review from '../models/Review.model.js';

// Add a new school
export const addSchool = async (req, res) => {
  const { name, address, city, state, fees, categoryRatings } = req.body;

  try {
    const school = new School({
      name,
      address,
      city,
      state,
      fees,
      categoryRatings,
    });

    await school.save();
    res.status(201).json(school);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all schools
export const getSchools = async (req, res) => {
  try {
    const schools = await School.find().populate('reviews');
    res.json(schools);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a review to a school
export const addReview = async (req, res) => {
  const { schoolId } = req.params;
  const { rating, comment } = req.body;

  try {
    const school = await School.findById(schoolId);
    if (!school) {
      return res.status(404).json({ msg: 'School not found' });
    }

    const newReview = new Review({
      school: schoolId,
      user: req.user.id,
      rating,
      comment,
    });

    await newReview.save();

    // Add the review to the school's reviews array
    school.reviews.push(newReview._id);
    await school.save();

    res.status(201).json(newReview);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Like or unlike a review
export const likeReview = async (req, res) => {
  const { schoolId, reviewId } = req.params;

  try {
    const school = await School.findById(schoolId);
    if (!school) {
      return res.status(404).json({ msg: 'School not found' });
    }

    const review = await Review.findById(reviewId);
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

    await review.save();
    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
