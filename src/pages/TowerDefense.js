import {
  Box,
  Center,
  Flex,
  Text,
  Button,
  IconButton,
  Image,
  Heading,
  HStack,
  AspectRatio,
  Wrap,
  WrapItem,
  Badge,
  Divider,
} from "@chakra-ui/react";
import img_bg from "../assets/background_pc.jpg";
import img_bg1 from "../assets/bg.png";
import img_design from "../assets/design1.png";
import img_uml from "../assets/uml.png";

function TowerDefense() {
  return (
    <div>
      <Box
        bgColor="white"
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        h="3500px"
      >
        <Center borderRadius="lg" backdropFilter="auto" backdropBlur="8px">
          <Heading
            fontSize={{ base: "50", md: "100", lg: "150" }}
            color="teal.300"
            p="5"
          >
            Tower Defense
          </Heading>
        </Center>
        <Box px="10vw" py="10">
          <Heading color="black">摘要:</Heading>
        </Box>
        <Box px="10vw" w="100vw">
          <Text fontSize="xl">
            &emsp;&emsp;2019年，Covid-19突然大流行造成許多人死亡。然而，部分大眾卻仍對其抱持懷疑與不信的態度。
            為了讓民眾了解Covid-19的危險性。因此決定以衛教的核心思想設計塔防遊戲。
            玩家所要守護的家園即代表個人、家人與朋友的健康，而受病毒所感染的變種人類則試圖感染正常人類。
            每一波的病毒都會越發增加代表著病毒的變種性與流行性。
            期許大眾在遊玩遊戲之後能了解並重視Covid-19的危險性。
          </Text>
          <Text fontSize="xl">
            &emsp;&emsp;本遊戲使用Python-pygame製作，遊戲主要使用MVC(Model-View-Controller)當做主架構，
            玩家事件則是使用observer pattern以方便增修觸發事件。
          </Text>
        </Box>
        <Divider py="2" />
        <Box px="10vw" py="10">
          <Heading color="black">前導片:</Heading>
        </Box>
        <Flex justify="center" w="100vw">
          <AspectRatio
            w={{ base: "70vw", md: "60vw", lg: "50vw" }}
            ratio={4 / 3}
          >
            <iframe
              title="tower defense demo video"
              src="https://www.youtube.com/embed/gTNaXtLUB8s"
              allowFullScreen
            />
          </AspectRatio>
        </Flex>
        <Divider py="2" />
        <Box px="10vw" py="10">
          <Heading color="black">程式簡單架構:</Heading>
        </Box>
        <Center>
          <Box
            bg="teal.50"
            boxShadow="dark-lg"
            borderRadius="2xl"
            w={{ base: "90vw", md: "70vw", lg: "70vw" }}
          >
            <Image src={img_uml} p={{ base: "2", md: "5", lg: "8" }} />
          </Box>
        </Center>
        <Flex py="10" px={{ base: "10vw", md: "20vw", lg: "30vw" }}>
          <Box>
            <Center>
              <Box
                bg="teal.200"
                borderRadius="lg"
                p="2"
                boxShadow="dark-lg"
                boxSize={{ base: "4em", md: "10vw", lg: "10vw" }}
              >
                <Image src={img_design} />
              </Box>
            </Center>
          </Box>
          <Center>
            <Box px="4" w={{ base: "60vw", md: "50vw", lg: "30vw" }}>
              <Heading
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color="teal.300"
              >
                Design Pattern
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color="teal.300"
              >
                MVC & Observer pattern
              </Text>
            </Box>
          </Center>
        </Flex>
        <Flex py="10" px={{ base: "10vw", md: "20vw", lg: "30vw" }}>
          <Box>
            <Center>
              <Box
                bg="cyan.300"
                borderRadius="lg"
                p="2"
                boxShadow="dark-lg"
                boxSize={{ base: "4em", md: "10vw", lg: "10vw" }}
              >
                <Image src={img_bg1} />
              </Box>
            </Center>
          </Box>
          <Center>
            <Box px="4" w={{ base: "60vw", md: "50vw", lg: "30vw" }}>
              <Heading
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color="teal.300"
              >
                設計理念
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
                color="teal.300"
              >
                用遊戲的方式來告訴大眾Covid-19的危險性
              </Text>
            </Box>
          </Center>
        </Flex>
      </Box>
    </div>
  );
}

export default TowerDefense;
