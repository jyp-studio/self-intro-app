import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/nunito-sans/700.css";

function Title(props) {
  return (
    <>
      <Box
        filter="auto"
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
          backdropBrightness={props.brightness ?? "80%"}
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
            fontFamily={`"Nunito Sans", "Open Sans", sans-serif`}
            letterSpacing={"5px"}
            fontSize={{ base: "12vw", md: "6xl" }}
            color={props.mainColor}
          >
            {props.mainTitle}
          </Heading>
          <Text
            letterSpacing={"5px"}
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
