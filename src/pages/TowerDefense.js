import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  AspectRatio,
  WrapItem,
  Container,
  Button,
  VStack,
  useColorMode,
  Divider,
  useColorModeValue,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import img_uml from "../assets/uml.png";
import img_bg from "../assets/bg_tower.jpg";
import img_covid from "../assets/covid.jpg";
import img_miro from "../assets/miro.png";
import img_miro1 from "../assets/miro1.png";

import {
  FiHome,
  FiCompass,
  FiYoutube,
  FiCommand,
  FiMessageCircle,
  FiBox,
} from "react-icons/fi";
import {
  BsGearFill,
  BsLightbulbFill,
  BsPinAngleFill,
  BsPenFill,
} from "react-icons/bs";

function TowerDefense() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Abstract", icon: FiCompass, href: "#abstract" },
    { name: "Trailer", icon: FiYoutube, href: "#trailer" },
    { name: "Architecture", icon: FiCommand, href: "#architecture" },
    { name: "Thoughts", icon: FiMessageCircle, href: "#thoughts" },
    { name: "Demo", icon: FiBox, href: "#demo" },
  ];
  // Icon box infomation
  const IconBoxItems = [
    {
      icon: BsGearFill,
      title: "Tool",
      text: "Python, pygame module, git",
      bg: "teal.200",
    },
    {
      icon: BsPenFill,
      title: "Design Pattern",
      text: "MVC & Observer pattern",
      bg: "teal.200",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "用遊戲的方式來告訴大眾Covid-19的危險性",
      bg: "teal.200",
    },
  ];

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        <Title
          image={img_bg}
          mainTitle={"Tower Defense"}
          mainColor={"whiteAlpha.900"}
          subColor={"whiteAlpha.700"}
          subTitle={"用python從0打造自己的塔防遊戲"}
        />
        <Container maxW={"8xl"} py="3" centerContent>
          <Box
            border={"1px"}
            borderColor={useColorModeValue("gray.300", "gray.600")}
            rounded={"2xl"}
            marginTop={"10"}
          >
            <Heading
              py={"4"}
              px={"5"}
              scrollMargin="100px"
              id={"abstract"}
              w={{ base: "auto", lg: "full" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              摘要{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Abstract
            </Heading>
            <Divider
              w={"full"}
              color={useColorModeValue("gray.300", "gray.600")}
            />
            <Image src={img_covid} w={"full"} h={"400px"} fit={"cover"} />
            <Flex flexWrap={"wrap"} py="10" justify={"center"}>
              <Text
                fontSize="2xl"
                w={{ base: "95vw", md: "70vw", lg: "45vw" }}
                px={{ base: "5", md: "5", lg: "10" }}
                textAlign={"justify"}
              >
                &emsp;&emsp;2019年，Covid-19突然大流行造成許多人死亡。然而，部分大眾卻仍對其抱持懷疑與不信的態度。
                <Text as={"span"} fontWeight={"bold"}>
                  為了讓民眾了解Covid-19的危險性。因此決定以衛教的核心思想設計塔防遊戲。
                </Text>
                玩家所要守護的家園即代表個人、家人與朋友的健康，而受病毒所感染的變種人類則試圖感染正常人類。每一波的病毒都會越發增強代表著病毒的變種性與流行性。
                <Text as={"span"} fontWeight={"bold"}>
                  期許大眾在遊玩遊戲之後能了解並更加重視Covid-19的危害。
                </Text>
                <br />
                &emsp;&emsp;本遊戲使用Python-pygame製作，遊戲主要使用
                <Text as={"span"} fontWeight={"bold"}>
                  MVC{"("}
                  Model-View-Controller{")"}
                </Text>
                當做主架構，玩家事件則是使用
                <Text as={"span"} fontWeight={"bold"}>
                  observer pattern
                </Text>
                以方便增修觸發事件。
              </Text>

              {/* icon box */}
              <VStack mt={{ base: "10", lg: "0" }}>
                {IconBoxItems.map((item, index) => (
                  <WrapItem py="1" key={index}>
                    <IconBox
                      bgColor={"gray.200"}
                      iconColor={"gray.800"}
                      iconBoxSize={{ base: "3em", md: "3em", lg: "5vw" }}
                      textBoxSize={{ base: "50vw", md: "40vw", lg: "17vw" }}
                      textSize={{ base: "sm", md: "lg", lg: "lg" }}
                      {...item}
                    />
                  </WrapItem>
                ))}
              </VStack>
            </Flex>
          </Box>
        </Container>

        <Box bg={"teal.400"} w={"full"} mt={"10"} py={"10"}>
          <Container maxW={"8xl"} centerContent>
            <Box marginTop={"10"}>
              <Heading
                scrollMargin="100px"
                py={"4"}
                px={"5"}
                id={"trailer"}
                w={{ base: "auto", lg: "full" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                前導片{" "}
                <Text as={"span"} fontWeight={"thin"}>
                  |
                </Text>{" "}
                Trailer
              </Heading>

              <AspectRatio
                w={{ base: "70vw", md: "60vw", lg: "67vw" }}
                ratio={16 / 9}
              >
                <iframe
                  title="tower defense demo video"
                  src="https://www.youtube.com/embed/gTNaXtLUB8s"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
            <Box marginTop={"10"} marginBottom={"20"}>
              <Heading
                scrollMargin="100px"
                py={"4"}
                px={"5"}
                id={"architecture"}
                w={{ base: "auto", lg: "full" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                程式架構{" "}
                <Text as={"span"} fontWeight={"thin"}>
                  |
                </Text>{" "}
                Architecture
              </Heading>

              <Box
                bg="teal.50"
                boxShadow="dark-lg"
                borderRadius="2xl"
                w={{ base: "90vw", md: "70vw", lg: "67vw" }}
              >
                <Image src={img_uml} p={{ base: "2", md: "5", lg: "8" }} />
              </Box>
            </Box>
          </Container>
        </Box>

        <Container maxW={"8xl"} py="3" centerContent>
          <Box marginTop={"10"}>
            <Heading
              scrollMargin="100px"
              py={"4"}
              px={"5"}
              id={"thoughts"}
              w={{ base: "auto", lg: "full" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              心得{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Thoughts
            </Heading>
            <Box fontSize="2xl" marginTop={"5"} textAlign={"justify"}>
              <Box
                bgColor={useColorModeValue("gray.100", "gray.700")}
                border={"1px"}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                rounded={"2xl"}
                shadow={"lg"}
                p={"10"}
              >
                <Text fontSize={"3xl"} fontWeight={"bold"} color={"teal.400"}>
                  分工狀態
                </Text>
                <Flex
                  flexWrap={"wrap"}
                  w={"full"}
                  spacing={"10"}
                  justify={"center"}
                >
                  <VStack>
                    <Text w={"40vw"}>
                      &emsp;&emsp;在數週的設計思維工作坊中，我擔任組長的職位，引領兩位組員
                      {""}
                      藉由Miro便利貼的功能對新冠肺炎進行聯想與解構，並將其與塔防遊戲做結合。
                      {""}
                      工作分配為我做Tower和Enemy相關的動畫、運作模式和錨點選單等；另一位則是做選單以及遊戲介面；
                      {""}
                      最後一位則是做Map與Potion相關運作方式。
                    </Text>
                    <HStack>
                      <FiChevronsRight size={"50px"} color={"#81E6D9"} />
                      <Text
                        fontWeight={"bold"}
                        fontSize={"4xl"}
                        color={"teal.300"}
                      >
                        設計思考 Design Thinking
                      </Text>
                      <FiChevronsLeft size={"50px"} color={"#81E6D9"} />
                    </HStack>
                  </VStack>
                  <Box
                    bgColor={"yellow.400"}
                    w={"20vw"}
                    marginLeft={"8"}
                    p={"5"}
                    boxShadow={"xl"}
                    fontWeight={"bold"}
                  >
                    <VStack spacing={"3"} w={"full"} color={"black"}>
                      <Heading>分工表</Heading>
                      <Text>
                        我：所有遊戲物件相關
                        <Box
                          bgColor={"yellow.600"}
                          w={"full"}
                          h={"4px"}
                          px={"5"}
                        />
                        組員A：選單介面
                        <Box
                          bgColor={"yellow.600"}
                          w={"full"}
                          h={"4px"}
                          px={"5"}
                        />
                        組員B：地圖、藥水相關
                        <Box
                          bgColor={"yellow.600"}
                          w={"full"}
                          h={"4px"}
                          px={"5"}
                          marginBottom={"2"}
                        />
                      </Text>
                    </VStack>
                  </Box>
                </Flex>
                <Flex
                  justify={"center"}
                  w={"full"}
                  flexWrap={"wrap"}
                  marginTop={"8"}
                >
                  <Image src={img_miro} w={"31vw"} px={"2"} />
                  <Image src={img_miro1} w={"31vw"} px={"2"} />
                </Flex>
              </Box>
              <Box
                bgColor={useColorModeValue("gray.300", "gray.700")}
                marginTop={"5"}
                marginBottom={"5"}
                w={"full"}
                h={"1px"}
              />
              <Text fontSize={"3xl"} fontWeight={"bold"} color={"teal.400"}>
                遇到困難
              </Text>
              &emsp;&emsp;然而，正當一切運作妥當時，遇到整個開發中最大的難題
              {""}
              ：其中有一位組員在快截止日期時，突然說他沒有學過程式，甚麼都沒做。
              {""}
              因此，身為組長的我只好臨時改變工作分配，將較不需要coding的遊戲平衡與圖片蒐集交給他，
              {""}
              而他原先所需做的Map和Potion則平分給其他人。所幸最後仍順利完成，並且被
              {""}
              教授點評進入選單、 遊戲流程與動畫做的很完善與順暢 。他稱讚我們是
              {""}
              「遊戲整體最完整的。」
              <Box
                bgColor={useColorModeValue("gray.300", "gray.700")}
                marginTop={"5"}
                marginBottom={"5"}
                w={"full"}
                h={"1px"}
              />
              <Text fontSize={"3xl"} fontWeight={"bold"} color={"teal.400"}>
                獲得收穫
              </Text>
              &emsp;&emsp;雖然過程曲折，卻也讓我收穫許多。在整個工作坊期間，由於時間非常緊迫，
              <Text as={"span"} fontWeight={"bold"}>
                提升我的抗壓性
              </Text>
              外， 也我
              <Text as={"span"} fontWeight={"bold"}>
                python能力也跟著增強
              </Text>
              。除此之外， 我學到最重要的是
              <Text as={"span"} fontWeight={"bold"}>
                畫UML的重要性
              </Text>
              。
              以往我們coding時，時常注意的是語法以及效率。然而在大型企劃，數萬行的程式碼中，
              {""}
              語法和效率只是基本，更重要的是架構。舉例來說，當開發一個鳥的class，
              {""}
              可能很理所當然的新增名字、種類等屬性，並新增fly的method來描述飛行方式。
              {""}
              然而這時卻很容易使得日後開發遇到窘境，因為企鵝和鴕鳥不會飛。{""}
              這便是一個簡單的例子來闡述架構、格局的重要性。
              <br />
              &emsp;&emsp;同時， 學習使用一些
              <Text as={"span"} fontWeight={"bold"}>
                design pattern
              </Text>
              也使架構更加明確，開發時也更加方便。如使用obsever pattern在user{" "}
              requests時，當要新增觸發事件時，只要新增一個class寫功能，{""}
              再到controller中新增這個class就完成了。不必到每個程式碼中新增或修改變數，省去許多繁瑣步驟。
            </Box>
          </Box>
        </Container>

        <Container maxW={"8xl"} py="3" centerContent>
          <Box marginTop={"10"}>
            <Heading
              scrollMargin="100px"
              py={"4"}
              px={"5"}
              id={"demo"}
              w={{ base: "auto", lg: "full" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              成果展示{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Demo
            </Heading>

            <AspectRatio
              w={{ base: "70vw", md: "60vw", lg: "67vw" }}
              ratio={16 / 9}
            >
              <iframe
                title="tower defense demo video"
                src="https://www.youtube.com/embed/mkjUvo7B_K8"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default TowerDefense;
