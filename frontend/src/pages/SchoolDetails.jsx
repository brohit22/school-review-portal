import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs for reviews

const SchoolDetails = () => {
  const { id } = useParams();

  // Static demo data for a single school
  const [school, setSchool] = useState({
    _id: id,
    name: "Greenwood High School",
    city: "Bangalore",
    state: "Karnataka",
    fees: 75000,
    categoryRatings: {
      academic: 4.8,
      faculty: 4.7,
      infrastructure: 4.5,
      placement: 4.6,
    },
    reviews: [
      {
        id: uuidv4(),
        author: "John Doe",
        rating: 5,
        comment: "Great school with excellent facilities and teachers.",
        avatar: "https://i.pravatar.cc/150?img=3", // Random user avatar
        likes: 3,
      },
      {
        id: uuidv4(),
        author: "Jane Smith",
        rating: 4,
        comment: "Good academics but extracurricular activities could be better.",
        avatar: "https://i.pravatar.cc/150?img=4",
        likes: 1,
      },
    ],
  });

  // States for new review input
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [avatar, setAvatar] = useState(''); // Avatar URL

  // Function to handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: uuidv4(),
      author,
      rating: parseInt(rating),
      comment,
      avatar: avatar || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10) + 1}`,
      likes: 0,
    };
    setSchool({ ...school, reviews: [...school.reviews, newReview] });
    setAuthor(''); // Reset form
    setRating(5);
    setComment('');
    setAvatar('');
  };

  // Function to handle likes on reviews
  const handleLikeReview = (reviewId) => {
    const updatedReviews = school.reviews.map((review) =>
      review.id === reviewId ? { ...review, likes: review.likes + 1 } : review
    );
    setSchool({ ...school, reviews: updatedReviews });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{school.name}</h1>
      <p>{school.city}, {school.state}</p>
      <p>Fees: ₹{school.fees}/year</p>

      {/* Render reviews */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {school.reviews.length > 0 ? (
          school.reviews.map((review) => (
            <div key={review.id} className="border-t pt-4 mt-4 flex items-start">
              <img src={review.avatar} alt={`${review.author} avatar`} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold">{review.author}</p>
                <p className="text-sm">Rating: {review.rating}/5</p>
                <p>{review.comment}</p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleLikeReview(review.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Like ({review.likes})
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {/* Add Review Form */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label htmlFor="author" className="block font-semibold">Your Name</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="rating" className="block font-semibold">Rating</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((rate) => (
                <option key={rate} value={rate}>
                  {rate} Star{rate > 1 && 's'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="comment" className="block font-semibold">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border rounded-lg"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="avatar" className="block font-semibold">Avatar URL (optional)</label>
            <input
              type="text"
              id="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="https://example.com/avatar.jpg"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default SchoolDetails;
