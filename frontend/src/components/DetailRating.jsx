// DetailedRating.js
import React from "react";
import { Box, Text, Progress } from "@chakra-ui/react";
import StarRating from "./StarRating.jsx"; // Import the StarRating component

const DetailedRating = ({ school }) => {
  const { rating, reviewCount } = school; // Assuming these props are passed down

  return (
    <Box mb={4} borderWidth={1} borderRadius="md" p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Average Rating: {rating} / 5
      </Text>
      <StarRating rating={rating} />
      <Text color="gray.600">{reviewCount} Reviews</Text>

      {/* Displaying a dummy progress bar for each star rating */}
      <Text mt={4} fontWeight="bold">
        Rating Distribution:
      </Text>
      {[5, 4, 3, 2, 1].map((star) => (
        <Box key={star} display="flex" alignItems="center" mt={1}>
          <Text w={4}>{star}</Text>
          <StarRating rating={star} />
          <Progress
            value={(star / 5) * 100} // Dummy value for demonstration
            colorScheme="yellow"
            flex="1"
            ml={2}
          />
        </Box>
      ))}
    </Box>
  );
};

export default DetailedRating;
