import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  AspectRatio,
  WrapItem,
  Container,
  VStack,
  Divider,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import {
  FiHome,
  FiCompass,
  FiCommand,
  FiMessageCircle,
  FiFile,
} from "react-icons/fi";
import { BsGearFill, BsLightbulbFill } from "react-icons/bs";

import "@fontsource/open-sans";
import "@fontsource/nunito-sans";

import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Rating from "../components/Rating";

import img_uml from "../assets/pollution_uml.png";
import img_bg from "../assets/bg_pollution.jpg";
import img_abstract from "../assets/pollution_abstract.jpg";
import img_reward from "../assets/reward.jpg";
import img_bg_reward from "../assets/bg_reward.jpg";

import pdf_project from "../assets/pollution_project.pdf";

function PollutionModel() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Abstract", icon: FiCompass, href: "#abstract" },
    { name: "Architecture", icon: FiCommand, href: "#architecture" },
    { name: "Thoughts", icon: FiMessageCircle, href: "#thoughts" },
    { name: "Project report", icon: FiFile, href: "#project-report" },
  ];
  // Icon box infomation
  const IconBoxItems = [
    {
      icon: BsGearFill,
      title: "Tool",
      text: "Verilog",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "將邏輯設計概念應用於探查汙染擴散",
    },
  ];

  // what I learn im class with name and rating.
  const Gain = [
    {
      name: "Verilog",
      rating: "5",
    },
    {
      name: "邏輯設計",
      rating: "5",
    },
  ];

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        {/* title banner */}
        <Title
          brightness={"50%"}
          image={img_bg}
          mainTitle={"汙染擴散模型"}
          mainColor={"pink.300"}
          subColor={"red.100"}
          subTitle={"利用verilog模擬covid-19的擴散方式"}
        />

        {/* icon box */}
        <Flex
          px={{ base: "0", md: "8vw" }}
          flexWrap={"wrap"}
          justify={"center"}
          justifyContent={"space-around"}
          marginTop={"100px"}
        >
          {IconBoxItems.map((item, index) => (
            <WrapItem key={index} py={{ base: "3", md: "3", lg: "5" }}>
              <IconBox
                bgColor={"red.100"}
                iconColor={"red.900"}
                iconBoxSize={{ base: "3em", md: "3em", lg: "5vw" }}
                textBoxSize={{ base: "60vw", md: "40vw", lg: "17vw" }}
                textSize={{ base: "sm", md: "lg", lg: "lg" }}
                {...item}
              />
            </WrapItem>
          ))}
        </Flex>

        <Box marginTop={"100px"} px={"50"}>
          <Divider />
        </Box>

        <Container maxW={"6xl"} marginTop={"120"} centerContent>
          <Box
            w={"full"}
            border={"1px"}
            borderColor={useColorModeValue("gray.100", "gray.700")}
            rounded={"2xl"}
          >
            <Heading
              py={"4"}
              px={"5"}
              scrollMargin="100px"
              id={"abstract"}
              w={{ base: "auto", lg: "full" }}
              textAlign={{ base: "center", lg: "left" }}
              fontFamily={`"Open Sans", sans-serif`}
            >
              摘要{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Abstract
            </Heading>
            <Image src={img_abstract} w={"full"} h={"400px"} fit={"cover"} />
            <Flex flexWrap={"wrap"} py="10" justify={"center"}>
              <Text
                fontFamily={`"Open Sans", sans-serif`}
                fontSize="xl"
                w={"full"}
                px={{ base: "5", md: "5", lg: "10" }}
                textAlign={"justify"}
              >
                &emsp;&emsp;Covid-19大爆發，首先是雙北，緊接著周遭和交通方便的縣市也跟著爆發。
                {""}
                為了有效追蹤感染新冠肺炎的人路徑。本研究使用邏輯設計的思考，運用Verilog模擬汙染擴散的樣式。
                {""}
                藉由選定投放汙染地點後，觀察其擴散位置，來得知汙染所可能擴散的位置。未來可再加入更多細節，以更精確模擬現況。
              </Text>
            </Flex>
          </Box>
        </Container>

        <Box
          bg={useColorModeValue("gray.50", "blackAlpha.500")}
          w={"full"}
          mt={"120"}
          py={"10"}
        >
          <Container maxW={"8xl"} marginTop={"100"} centerContent>
            <Box marginBottom={"150"}>
              <Heading
                fontFamily={`"Open Sans", sans-serif`}
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
                bg="red.100"
                boxShadow="lg"
                w={{ base: "90vw", md: "70vw", lg: "67vw" }}
                py={"10"}
              >
                <Image src={img_uml} p={{ base: "2", md: "5", lg: "8" }} />
              </Box>
            </Box>
          </Container>
        </Box>

        <Container maxW={"6xl"} py="3" marginTop={"150"} centerContent>
          <Heading
            fontFamily={`"Open Sans", sans-serif`}
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
        </Container>

        {/* 3. gain */}
        <Banner
          title={"獲得收穫"}
          bgImage={img_bg_reward}
          brightness={"25%"}
          marginTop={"150"}
        />
        <Box
          bg={useColorModeValue("gray.900", "blackAlpha.500")}
          w={"full"}
          py={"200"}
        >
          <Container maxW={"7xl"} py="3" centerContent>
            {/* box of gain */}
            <Stack
              direction={{ base: "column", lg: "row" }}
              bgColor={"gray.800"}
              border={"1px"}
              borderRadius={"lg"}
              overflow={"hidden"}
              borderColor={"gray.700"}
              spacing={{ base: "50", lg: "0" }}
              alignItems={"center"}
            >
              <Box
                bgImage={img_reward}
                w={{ base: "80vw", md: "60vw", lg: "400px" }}
                h={"500px"}
                bgPosition={"center"}
                bgSize={"cover"}
              />
              {/* words */}
              <VStack
                py={"10"}
                textAlign={"left"}
                px={"10"}
                spacing={"10"}
                color={"white"}
              >
                <Heading>收穫</Heading>
                {/* Rating of gain */}
                <Rating Gain={Gain} />
              </VStack>
            </Stack>
            <Text
              fontFamily={`"Open Sans", sans-serif`}
              fontSize={"xl"}
              textAlign={"justify"}
              color={"gray.200"}
              mt={"150"}
              px={{ base: "5", md: "10", lg: "200" }}
            >
              &emsp;&emsp;學習邏輯設計和使用Verilog設計decoder和encoder等，不但讓我更加了解電腦的基礎架構、運行過程，
              {""}
              也讓我日後設計程式時，更加有邏輯性。
              <br />
              &emsp;&emsp;而製作期末專題的過程中，運用許多邏輯閘與正反器，使我更加知道他們的功能與作用；
              {""}
              構想專題的過程，更讓我學習到獨立思考，自己解決問題的能力。
            </Text>
          </Container>
        </Box>

        <Container maxW={"8xl"} py="3" mt={"100"} centerContent>
          <Box marginTop={"10"}>
            <Heading
              fontFamily={`"Open Sans", sans-serif`}
              scrollMargin="100px"
              py={"4"}
              px={"5"}
              id={"project-report"}
              w={{ base: "auto", lg: "full" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              專題報告書{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Project Report
            </Heading>

            <AspectRatio w={{ base: "auto", lg: "50vw" }} ratio={3 / 4}>
              <iframe
                title="numerical opt pdf"
                src={pdf_project}
                position="absolute"
                width={"100%"}
                height={"100%"}
                allow="autoplay"
              />
            </AspectRatio>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default PollutionModel;
