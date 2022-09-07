import { Stack, HStack, Badge, Text, Icon } from "@chakra-ui/react";

// feature component
function Feature(props) {
  return (
    <Stack direction={"row"} align={"center"} spacing={4}>
      <HStack
        px={2}
        py={2}
        rounded={"lg"}
        color={props.color}
        bg={props.bgColor}
      >
        <Badge color={props.color} bg={props.bgColor}>
          <Text as={"span"} fontSize={"md"}>
            {props.name}
          </Text>
        </Badge>
        <Icon as={props.icon} ml={2} w={4} h={4} />
      </HStack>

      <Text fontWeight={600} textAlign={"justify"} overflow={"hidden"}>
        {props.text}
      </Text>
    </Stack>
  );
}

export default Feature;
