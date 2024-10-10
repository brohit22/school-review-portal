import express from 'express';
import {
  addSchool,
  getSchools,
  addReview,
  likeReview,
} from '../controllers/schoolController.js';
import auth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', auth, addSchool);
router.get('/', getSchools);
router.post('/:schoolId/review', auth, addReview);
router.post('/:schoolId/review/:reviewId/like', auth, likeReview);

export default router;
