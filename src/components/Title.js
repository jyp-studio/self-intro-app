import { Box, Heading, VStack, Text } from "@chakra-ui/react";

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
        backgroundImage={`url(${props.image})`}
        w={"full"}
        h={"xl"}
      >
        <Box
          as={VStack}
          w={"full"}
          h={"full"}
          spacing={"8"}
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
          <Heading
            fontSize={{ base: "12vw", md: "6xl" }}
            color={props.mainColor}
          >
            {props.mainTitle}
          </Heading>
          <Text
            fontSize={"xl"}
            color={props.subColor}
            fontWeight={"bold"}
            px={"5"}
          >
            {props.subTitle}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Title;
