import {
  Box,
  Stack,
  Flex,
  Heading,
  HStack,
  AspectRatio,
  Badge,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

function SideProjectCard(props) {
  return (
    <Box
      w={"full"}
      bgColor={useColorModeValue("gray.50", "gray.900")}
      rounded={"2xl"}
      boxShadow={"sm"}
      py={10}
      px={{ base: 5, md: 10 }}
    >
      <Stack spacing={10} w={"full"}>
        <Flex w={"full"}>
          <Heading
            flex={1}
            scrollMargin="150px"
            id={props.id}
            w={{ base: "full", lg: "auto" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            {props.name}
          </Heading>
          <HStack
            spacing={"2"}
            marginLeft={{ base: "0", lg: "10" }}
            py={{ base: "3", lg: "0" }}
          >
            <Badge
              bgColor={useColorModeValue("gray.200", "gray.800")}
              color={useColorModeValue("gray.400", "gray.600")}
              fontSize={"xl"}
              borderRadius="full"
              px={"2"}
            >
              {props.badge[0]}
            </Badge>
            <Badge
              bgColor={useColorModeValue("gray.300", "gray.600")}
              color={useColorModeValue("gray.50", "gray.900")}
              fontSize={"xl"}
              borderRadius="full"
              px={"2"}
            >
              {props.badge[1]}
            </Badge>
            <Badge
              bgColor={useColorModeValue("gray.200", "gray.700")}
              color={useColorModeValue("gray.500", "gray.500")}
              fontSize={"xl"}
              borderRadius="full"
              px={"2"}
            >
              {props.badge[2]}
            </Badge>
          </HStack>
        </Flex>

        {props.text}

        {props.image && <Image src={props.image} />}

        {props.video && (
          <AspectRatio justify={"center"} ratio={16 / 9}>
            <iframe
              title="flappy bird video"
              src={props.video}
              allowFullScreen
              controls="0"
              autoplay="0" // disable video from auto playing; however, not working:(
              volume="0"
            />
          </AspectRatio>
        )}
      </Stack>
    </Box>
  );
}

export default SideProjectCard;
