import {
  Box,
  Center,
  Heading,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

function IconBox(props) {
  return (
    <>
      <Box>
        <Center>
          <Box
            bgGradient={props.bgGradient ?? undefined}
            bg={props.bgColor ?? "gray.100"}
            borderRadius={"lg"}
            boxShadow={"lg"}
            boxSize={props.iconBoxSize}
          >
            <Icon
              p={{ base: "3", md: "1.3vw" }}
              as={props.icon}
              boxSize={props.iconBoxSize}
              color={props.iconColor ?? "teal.100"}
            />
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
