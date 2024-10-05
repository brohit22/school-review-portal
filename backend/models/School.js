import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  fees: { type: Number, required: true },
  reviews: [ReviewSchema],
});

const School = mongoose.model('School', SchoolSchema);
export default School;
