import { Box, Center, Image, Heading, Text } from "@chakra-ui/react";

function IconBox(props) {
  return (
    <>
      <Box>
        <Center>
          <Box
            bgGradient={props.bgGradient}
            bg={props.bg}
            borderRadius={"lg"}
            p={"2"}
            boxShadow={"dark-lg"}
            boxSize={props.iconBoxSize}
          >
            <Image src={props.image} />
          </Box>
        </Center>
      </Box>
      <Center>
        <Box px={"4"} w={props.textBoxSize}>
          <Heading fontSize={props.textSize} color={props.textColor}>
            {props.title}
          </Heading>
          <Text fontSize={props.textSize} color={props.textColor}>
            {props.text}
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default IconBox;
