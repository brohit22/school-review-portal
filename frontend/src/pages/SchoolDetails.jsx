import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, StarIcon, EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Avatar, AvatarBadge, Text, Heading, Flex, IconButton, Progress, Textarea, Divider, Stack } from '@chakra-ui/react';

export default function SchoolCard() {
  const [showReviews, setShowReviews] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [newReview, setNewReview] = useState('');

  const reviews = [
    { id: 1, author: 'John D.', content: 'Great program!', likes: 10, dislikes: 2 },
    { id: 2, author: 'Sarah M.', content: 'Excellent faculty and resources.', likes: 15, dislikes: 1 },
  ];

  return (
    <Box maxW="4xl" mx="auto" p={6} bg="white" borderRadius="lg" shadow="lg">
      {/* School Information */}
      <Flex justify="space-between" align="center" mb={4}>
        <Box>
          <Heading size="lg" fontWeight="bold">Bachelor of Technology [B.Tech]</Heading>
          <Flex align="center" mt={2}>
            <StarIcon color="yellow.400" />
            <Text ml={1} fontSize="lg" fontWeight="semibold">4.3</Text>
            <Text ml={2} color="gray.600">(216 Reviews)</Text>
          </Flex>
        </Box>
        {/* School Logo */}
        <Avatar size="lg" src="/placeholder.svg">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
      </Flex>

      {/* Fee, Duration, Eligibility */}
      <Stack direction={['column', 'row']} spacing={4} mb={4}>
        <Box>
          <Text color="gray.600">1st Yr Fees:</Text>
          <Text fontSize="xl" fontWeight="bold" color="green.600">₹2,42,000</Text>
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
        <Button variant="outline" rightIcon={<ChevronDownIcon />}>Brochure</Button>
        <Button colorScheme="blue">Apply Now</Button>
      </Flex>

      {/* Insights */}
      <Box mb={4}>
        <Heading size="md" mb={2}>Insights Based on NIRF Ranking 2024</Heading>
        <Stack direction={['column', 'row']} spacing={4}>
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
        <Heading size="md" mb={2}>Rating Details</Heading>
        {[5, 4, 3, 2, 1].map((star) => (
          <Flex align="center" mb={2} key={star}>
            <Text w={4} mr={2}>{star}</Text>
            <StarIcon color="yellow.400" mr={2} />
            <Progress value={star * 20} flex="1" colorScheme="yellow" />
          </Flex>
        ))}
      </Box>

      {/* Reviews Section */}
      <Button variant="outline" w="full" mb={4} onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'} {showReviews ? <ChevronUpIcon ml={2} /> : <ChevronDownIcon ml={2} />}
      </Button>

      {showReviews && (
        <Box>
          {reviews.map((review) => (
            <Box key={review.id} borderTop="1px solid" borderColor="gray.200" py={4}>
              <Text fontWeight="semibold">{review.author}</Text>
              <Text color="gray.600" mb={2}>{review.content}</Text>
              <Flex align="center">
                <IconButton
                  aria-label="Like"
                  icon={<CheckIcon />}
                  variant="outline"
                  size="sm"
                  mr={2}
                >
                  {review.likes}
                </IconButton>
                <IconButton
                  aria-label="Dislike"
                  icon={<CloseIcon />}
                  variant="outline"
                  size="sm"
                >
                  {review.dislikes}
                </IconButton>
              </Flex>
            </Box>
          ))}

          {/* Write Review Button */}
          <Button onClick={() => setShowWriteReview(!showWriteReview)} mt={4}>
            Write a Review
          </Button>

          {showWriteReview && (
            <Box mt={4}>
              <Textarea
                placeholder="Write your review here..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                mb={2}
              />
              <Button
                onClick={() => {
                  // Submit review logic here
                  console.log('Submitting review:', newReview);
                  setNewReview('');
                  setShowWriteReview(false);
                }}
              >
                Submit Review
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
