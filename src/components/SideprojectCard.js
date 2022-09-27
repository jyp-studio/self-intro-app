import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  AspectRatio,
  Badge,
  Image,
  useColorModeValue,
  useBreakpointValue,
  Skeleton,
} from "@chakra-ui/react";

function SideProjectCard(props) {
  // dir of badge
  let dir = useBreakpointValue({ base: "column", md: "row" });

  // color of badge
  const b1Color = useColorModeValue("gray.400", "gray.600");
  const b1BgColor = useColorModeValue("gray.200", "gray.800");
  const b2BgColor = useColorModeValue("gray.300", "gray.600");
  const b2Color = useColorModeValue("gray.50", "gray.900");
  const b3BgColor = useColorModeValue("gray.200", "gray.700");
  const b3Color = useColorModeValue("gray.500", "gray.500");

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
        <Stack
          direction={{ base: "column", lg: "row" }}
          w={"full"}
          justify={"center"}
        >
          <Heading
            flex={1}
            scrollMargin="150px"
            id={props.id}
            w={{ base: "full", lg: "auto" }}
            textAlign={{ base: "center", lg: "left" }}
            display={{ base: "block", lg: "inline" }}
          >
            {props.name}
          </Heading>
          {dir === "row" && (
            <HStack
              spacing={"2"}
              marginLeft={{ base: "0", lg: "10" }}
              py={{ base: "3", lg: "0" }}
              justify={"center"}
            >
              <Badge
                bgColor={b1BgColor}
                color={b1Color}
                fontSize={"xl"}
                borderRadius="full"
                px={"2"}
              >
                {props.badge[0]}
              </Badge>
              <Badge
                bgColor={b2BgColor}
                color={b2Color}
                fontSize={"xl"}
                borderRadius="full"
                px={"2"}
              >
                {props.badge[1]}
              </Badge>
              <Badge
                bgColor={b3BgColor}
                color={b3Color}
                fontSize={"xl"}
                borderRadius="full"
                px={"2"}
              >
                {props.badge[2]}
              </Badge>
            </HStack>
          )}
          {dir === "column" && (
            <VStack
              spacing={"2"}
              marginLeft={{ base: "0", lg: "10" }}
              py={{ base: "3", lg: "0" }}
              justify={"center"}
            >
              <Badge
                bgColor={b1BgColor}
                color={b1Color}
                fontSize={"xl"}
                borderRadius="full"
                px={"2"}
              >
                {props.badge[0]}
              </Badge>
              <Badge
                bgColor={b2BgColor}
                color={b2Color}
                fontSize={"xl"}
                borderRadius="full"
                px={"2"}
              >
                {props.badge[1]}
              </Badge>
              <Badge
                bgColor={b3BgColor}
                color={b3Color}
                fontSize={"xl"}
                borderRadius="full"
                px={"2"}
              >
                {props.badge[2]}
              </Badge>
            </VStack>
          )}
        </Stack>

        {props.text}

        {props.image && (
          <Skeleton isLoaded>
            <Image src={props.image} />
          </Skeleton>
        )}

        {props.video && (
          <Skeleton isLoaded>
            <AspectRatio justify={"center"} ratio={16 / 9}>
              <iframe title="video" src={props.video} allowFullScreen />
            </AspectRatio>
          </Skeleton>
        )}
      </Stack>
    </Box>
  );
}

export default SideProjectCard;
