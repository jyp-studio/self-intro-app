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
            bgGradient={props.bgGradient}
            bg={props.bg}
            borderRadius={"lg"}
            boxShadow={"dark-lg"}
            boxSize={props.iconBoxSize}
          >
            <Icon
              p={"1vw"}
              as={props.icon}
              boxSize={props.iconBoxSize}
              color={useColorModeValue("teal.500", "gray.800")}
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
