import { Box, Text, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import "@fontsource/open-sans";
import "@fontsource/nunito-sans";

function Rating(property) {
  return (
    <Box fontFamily={`"Open Sans", sans-serif`}>
      {property.Gain.map((props, index) => (
        <Flex
          py={"2"}
          key={index}
          textAlign={"left"}
          w={"full"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"xl"}>{props.name}</Text>
          <Box ml={{ base: "2", md: "10", lg: "10" }}>
            {Array(5)
              .fill("")
              .map((_, index) => (
                <StarIcon
                  ml={"1"}
                  key={index}
                  color={index < props.rating ? "gold" : "gray.300"}
                />
              ))}
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

export default Rating;
