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
import img_design from "../assets/pencil.png";
import img_uml from "../assets/uml.png";
import img_tool from "../assets/gear.png";
import img_idea from "../assets/lamp.png";

function TowerDefense() {
  const detailBoxStyle = {
    bg: "teal.200",
    borderRadius: "lg",
    p: "2",
    boxShadow: "dark-lg",
    boxSize: { base: "3em", md: "6vw", lg: "6vw" },
  };
  const textBoxStyle = {
    px: "4",
    w: { base: "70vw", md: "20vw", lg: "20vw" },
  };
  const headingStyle = {
    fontSize: { base: "sm", md: "xl", lg: "xl" },
    color: { base: "teal.900", md: "teal.600", lg: "teal.400" },
  };

  const textStyle = {
    fontSize: { base: "sm", md: "xl", lg: "xl" },
    color: { base: "teal.900", md: "teal.600", lg: "teal.400" },
  };

  return (
    <div>
      <Box
        bgImage={img_bg}
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        h="3500px"
      >
        <Center>
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

        <Flex flexWrap="wrap" py="10" justify="center">
          <WrapItem py="1">
            <Box>
              <Center>
                <Box sx={detailBoxStyle}>
                  <Image src={img_tool} />
                </Box>
              </Center>
            </Box>
            <Center>
              <Box sx={textBoxStyle}>
                <Heading sx={headingStyle}>Tool</Heading>
                <Text sx={textStyle}>Python, pygame module, git</Text>
              </Box>
            </Center>
          </WrapItem>

          <WrapItem py="1">
            <Box>
              <Center>
                <Box sx={detailBoxStyle}>
                  <Image src={img_design} />
                </Box>
              </Center>
            </Box>
            <Center>
              <Box sx={textBoxStyle}>
                <Heading sx={headingStyle}>Design Pattern</Heading>
                <Text sx={textStyle}>MVC & Observer pattern</Text>
              </Box>
            </Center>
          </WrapItem>

          <WrapItem py="1">
            <Box>
              <Center>
                <Box sx={detailBoxStyle}>
                  <Image src={img_idea} p="2" />
                </Box>
              </Center>
            </Box>
            <Center>
              <Box sx={textBoxStyle}>
                <Heading sx={headingStyle}>設計理念</Heading>
                <Text sx={textStyle}>
                  用遊戲的方式來告訴大眾Covid-19的危險性
                </Text>
              </Box>
            </Center>
          </WrapItem>
        </Flex>

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

        <Box px="10vw" py="10">
          <Heading color="black">程式架構(Simple):</Heading>
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

        <Box px="10vw" py="10">
          <Heading color="white">心得:</Heading>
        </Box>
        <Box px="10vw" w="100vw">
          <Text fontSize="xl" color="teal.50">
            &emsp;&emsp;在設計思維工作坊中，我擔任組長的職位，引領兩位組員分工合作完成這個遊戲。
            其中遇到最大的難題是其中有一位組員沒有學過程式，使得整個程式幾乎由我和剩下一位組員共同完成。
          </Text>
          <Text fontSize="xl">&emsp;&emsp;</Text>
        </Box>
      </Box>
    </div>
  );
}

export default TowerDefense;
