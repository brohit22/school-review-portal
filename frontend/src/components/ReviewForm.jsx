import React, { useState } from 'react';

const ReviewForm = ({ schoolId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, comment };
    onSubmit(newReview);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
      <div>
        <label className="block text-sm font-medium">Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          max={5}
          min={1}
          className="mt-1 block w-full border p-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 block w-full border p-2 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
