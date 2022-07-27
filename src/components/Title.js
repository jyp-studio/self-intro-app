import { Box, Heading, VStack } from "@chakra-ui/react";

function Title(props) {
  return (
    <>
      <Box
        filter="auto"
        brightness="80%"
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={props.image}
        w={"full"}
        h={"xl"}
      >
        <Box
          as={VStack}
          w={"full"}
          h={"full"}
          backdropFilter="auto"
          backdropBlur="5px"
          alignContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          position="absolute"
          top="50%"
          transform="translate(0, -50%)"
        >
          <Heading fontSize={"6xl"} color="teal.300">
            {props.mainTitle}
          </Heading>
        </Box>
      </Box>
    </>
  );
}

export default Title;
