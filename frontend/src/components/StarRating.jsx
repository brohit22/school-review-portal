// StarRating.js
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";

const StarRating = ({ rating }) => {
  return (
    <HStack spacing={1}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          boxSize={5}
          color={index < rating ? "yellow.400" : "gray.300"}
        />
      ))}
    </HStack>
  );
};

export default StarRating;
