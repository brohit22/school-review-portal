import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "@chakra-ui/icons";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import {
  Box,
  Button,
  Avatar,
  Text,
  Heading,
  Flex,
  Input,
  IconButton,
  Progress,
  Textarea,
  Stack,
  Select,
} from "@chakra-ui/react";

export default function SchoolCard() {
  const [showReviews, setShowReviews] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [grade, setGrade] = useState("");
  const [division, setDivision] = useState("");
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "John D.",
      content: "Great program!",
      rating: 4,
      likes: 2,
      dislikes: 0,
    },
    {
      id: 2,
      author: "Sarah M.",
      content: "Excellent faculty and resources.",
      rating: 5,
      likes: 5,
      dislikes: 1,
    },
  ]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (
      newReview.trim() === "" ||
      author.trim() === "" ||
      rating === "" ||
      grade.trim() === "" ||
      division.trim() === ""
    )
      return;

    const newReviewObject = {
      id: reviews.length + 1,
      author: author,
      content: newReview,
      rating: parseInt(rating, 10),
      likes: 0,
      dislikes: 0,
    };

    setReviews([...reviews, newReviewObject]);
    setNewReview("");
    setAuthor("");
    setRating("");
    setGrade("");
    setDivision("");
    setShowReviewForm(false);
  };

  const handleLike = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, likes: review.likes + 1 } : review
      )
    );
  };

  const handleDislike = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, dislikes: review.dislikes + 1 } : review
      )
    );
  };

  return (
    <Box maxW="4xl" mx="auto" p={6} bg="white" borderRadius="lg" shadow="lg">
      {/* School Information */}
      <Flex justify="space-between" align="center" mb={4}>
        <Box>
          <Heading size="lg" fontWeight="bold">
            Bachelor of Technology [B.Tech]
          </Heading>
          <Flex align="center" mt={2}>
            <StarIcon color="yellow.400" />
            <Text ml={1} fontSize="lg" fontWeight="semibold">
              4.3
            </Text>
            <Text ml={2} color="gray.600">
              (216 Reviews)
            </Text>
          </Flex>
        </Box>
        {/* School Logo */}
        <Avatar size="lg" src="/placeholder.svg" />
      </Flex>

      {/* Fee, Duration, Eligibility */}
      <Stack direction={["column", "row"]} spacing={4} mb={4}>
        <Box>
          <Text color="gray.600">1st Yr Fees:</Text>
          <Text fontSize="xl" fontWeight="bold" color="green.600">
            ₹2,42,000
          </Text>
        </Box>
        <Box>
          <Text color="gray.600">Duration:</Text>
          <Text fontWeight="semibold">4 Years | Full Time</Text>
        </Box>
        <Box>
          <Text color="gray.600">Eligibility:</Text>
          <Text fontWeight="semibold">10+2 with 75% + JEE Advanced</Text>
        </Box>
        <Box>
          <Text color="gray.600">Application Date:</Text>
          <Text fontWeight="semibold">27 Apr - 18 Jun 2024</Text>
        </Box>
      </Stack>

      {/* Brochure and Apply Now Buttons */}
      <Flex justify="space-between" mb={4}>
        <Button variant="outline" rightIcon={<ChevronDownIcon />}>
          Brochure
        </Button>
        <Button colorScheme="blue">Apply Now</Button>
      </Flex>

      {/* Insights Based on NIRF Ranking 2024 */}
      <Box mb={4}>
        <Heading size="md" mb={2}>
          Insights Based on NIRF Ranking 2024
        </Heading>
        <Stack direction={["column", "row"]} spacing={4}>
          <Box>
            <Text color="gray.600">Student Intake:</Text>
            <Text fontWeight="semibold">3440 (Male: 2739, Female: 701)</Text>
          </Box>
          <Box>
            <Text color="gray.600">Median Salary:</Text>
            <Text fontWeight="semibold">₹16,63,440</Text>
          </Box>
          <Box>
            <Text color="gray.600">Passing %:</Text>
            <Text fontWeight="semibold">79%</Text>
          </Box>
          <Box>
            <Text color="gray.600">Placement %:</Text>
            <Text fontWeight="semibold">62%</Text>
          </Box>
        </Stack>
      </Box>

      {/* Rating Progress */}
      <Box mb={4}>
        <Heading size="md" mb={2}>
          Rating Details
        </Heading>
        {[5, 4, 3, 2, 1].map((star) => (
          <Flex align="center" mb={2} key={star}>
            <Text w={4} mr={2}>
              {star}
            </Text>
            <StarIcon color="yellow.400" mr={2} />
            <Progress value={star * 20} flex="1" colorScheme="yellow" />
          </Flex>
        ))}
      </Box>

      {/* Reviews Section */}
      <Button
        variant="outline"
        w="full"
        mb={4}
        onClick={() => setShowReviews(!showReviews)}
      >
        {showReviews ? "Hide Reviews" : "Show Reviews"}{" "}
        {showReviews ? <ChevronUpIcon ml={2} /> : <ChevronDownIcon ml={2} />}
      </Button>

      {showReviews && (
        <Box>
          {reviews.map((review) => (
            <Box
              key={review.id}
              borderTop="1px solid"
              borderColor="gray.200"
              py={4}
            >
              <Text fontWeight="semibold">{review.author}</Text>
              <Text color="gray.600" mb={2}>
                {review.content}
              </Text>
              <Flex align="center">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <StarIcon key={index} color="yellow.400" />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, index) => (
                  <StarIcon key={index} color="gray.300" />
                ))}
              </Flex>

              {/* Like and Dislike Section */}
              <Flex mt={2} align="center">
                <IconButton
                  icon={<FaThumbsUp />}
                  aria-label="Like"
                  onClick={() => handleLike(review.id)}
                  variant="outline"
                  colorScheme="green"
                  size="sm"
                  mr={2}
                />
                <Text>{review.likes}</Text>
                <IconButton
                  icon={<FaThumbsDown />}
                  aria-label="Dislike"
                  onClick={() => handleDislike(review.id)}
                  variant="outline"
                  colorScheme="red"
                  size="sm"
                  ml={4}
                />
                <Text>{review.dislikes}</Text>
              </Flex>
            </Box>
          ))}

          {/* Write Review Button */}
          <Button onClick={() => setShowReviewForm(!showReviewForm)} mt={4}>
            {showReviewForm ? "Cancel" : "Write a Review"}
          </Button>

          {showReviewForm && (
            <Box mt={4}>
              <form onSubmit={handleReviewSubmit}>
                <Text mb={2} fontSize="lg" fontWeight="semibold">
                  Submit a Review
                </Text>
                <Textarea
                  placeholder="Write your review here..."
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  mb={2}
                  required
                />
                <Input
                  placeholder="Your Name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  mb={2}
                  required
                />
                <Select
                  placeholder="Select Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  mb={2}
                  required
                >
                  {[5, 4, 3, 2, 1].map((star) => (
                    <option key={star} value={star}>
                      {star} Star
                    </option>
                  ))}
                </Select>
                <Input
                  placeholder="Grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  mb={2}
                  required
                />
                <Input
                  placeholder="Division"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  mb={4}
                  required
                />
                <Button type="submit" colorScheme="blue">
                  Submit Review
                </Button>
              </form>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
