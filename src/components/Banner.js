import { Box } from "@chakra-ui/react";
import "@fontsource/open-sans";

function Banner(props) {
  return (
    <Box
      id={props.id}
      scrollMargin={props.scrollMargin}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bgImage={props.bgImage}
      fit={"cover"}
      w={"full"}
      marginTop={props.marginTop ?? "0"}
      h={"500px"}
      justify={"center"}
    >
      <Box
        w={"full"}
        h={"full"}
        position={"relative"}
        backdropFilter={"auto"}
        backdropBrightness={props.brightness ?? "30%"}
        backdropBlur={"4px"}
        textAlign={"center"}
      >
        <Box
          fontFamily={`"Open Sans", sans-serif`}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          py={"100"}
          w={{ base: "80vw", md: "50vw" }}
          border={"2px"}
          borderColor={props.color ?? "gray.100"}
          color={props.color ?? "gray.50"}
          fontWeight={"bold"}
          fontSize={"4xl"}
        >
          {props.title}
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
