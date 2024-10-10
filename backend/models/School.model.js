import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  fees: { type: Number, required: true },
  categoryRatings: {
    academic: { type: Number, required: true },
    sports: { type: Number, required: true },
    extraCurricular: { type: Number, required: true },
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
});

const School = mongoose.model('School', schoolSchema);
export default School;
