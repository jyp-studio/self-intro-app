import {
  Link,
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
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  FiHome,
  FiCompass,
  FiFile,
  FiCommand,
  FiMessageCircle,
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

import img_uml from "../assets/stock_frame.png";
import img_bg from "../assets/bg_opt.jpeg";
import img_abstract from "../assets/stock_market.jpg";
import img_bg_sticky from "../assets/bg_sticky_note.jpg";
import img_reward from "../assets/reward.jpg";
import img_bg_reward from "../assets/sunrise.jpg";
import img_numerical_poster1 from "../assets/numerical_poster1.png";
import img_numerical_poster2 from "../assets/numerical_poster2.png";
import img_numerical_poster3 from "../assets/numerical_poster3.png";
import img_numerical_poster4 from "../assets/numerical_poster4.png";
import img_Albert_Einstein from "../assets/Albert_Einstein.jpg";

import pdf_project from "../assets/numerical_paper.pdf";

function Opt() {
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
      text: "Python, pandas, matlabplot, tkinter, yfinance, multithreading",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "利用tkinter介面使大眾可以輕易操作和獲取股票資訊",
    },
  ];

  // what I learn im class with name and rating.
  const Gain = [
    {
      name: "Numerical method",
      rating: "5",
    },
    {
      name: "python-tkinter",
      rating: "5",
    },
    {
      name: "python-pandas",
      rating: "4",
    },
  ];

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        {/* title banner */}
        <Title
          image={img_bg}
          mainTitle={"數值最佳化投資"}
          mainColor={"orange.200"}
          subColor={"orange.300"}
          subTitle={"運用數值方法於python中來進行股票回測"}
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
                bgColor={"orange.200"}
                iconColor={"orange.900"}
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

            <Text
              py={"10"}
              fontFamily={`"Open Sans", sans-serif`}
              fontSize="xl"
              w={"full"}
              px={{ base: "5", md: "5", lg: "10" }}
              textAlign={"justify"}
            >
              &emsp;&emsp;在現今通貨膨脹率高漲而利息低迷的時代，若將資金存於銀行或郵局中，只會隨時間消磨其價值。為此，
              <Text as="span" fontWeight={"bold"}>
                許多人投資股票和 ETF，以對抗通貨膨脹
              </Text>
              。然而，眾所皆知水能載舟亦能覆舟，而股票市場亦如那滔滔浪江。若沒有準充分準備而隨意投資，
              只會落得「韭菜」，任人隨意宰割，的稱謂。因此，本研究藉由
              <Text as="span" fontWeight={"bold"}>
                蒐集 yfinance 的股票數據，利用 pandas 整理資料後，使用
                matlabplot 和 backtesting 繪出圖形和顯示回 測數據於用 tkinter
                建立的圖形介面上，供使用者使用
              </Text>
              。
            </Text>
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
                bg="gray.100"
                boxShadow="lg"
                w={{ base: "90vw", md: "70vw", lg: "67vw" }}
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

        {/* 1. design thinking */}
        <Banner
          title={"設計思考 ｜ Design thinking"}
          bgImage={img_bg_sticky}
          marginTop={"150"}
        />
        <VStack
          py={"200"}
          spacing={"150"}
          w={"full"}
          bgColor={"blackAlpha.800"}
          justify={"center"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={"10"}
            justify={"space-around"}
            textAlign={"justify"}
            alignItems={"center"}
          >
            <Box
              bgImage={img_Albert_Einstein}
              w={{ base: "80vw", md: "60vw", lg: "30vw" }}
              h={"600px"}
              bgPosition={"center"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
            />
            <Text
              w={{ base: "80vw", md: "60vw", lg: "30vw" }}
              px={{ base: "5", md: "30" }}
              fontSize={"3xl"}
              fontWeight={"extrabold"}
              color={"gray.100"}
              fontFamily={`"Open Sans", sans-serif`}
              textAlign={"justify"}
            >
              如果我有一小時拯救世界，我會花55分鐘去確認問題為何，只以5分鐘尋找解決方案。
              <Text textAlign={"right"}>— Albert Einstein</Text>
            </Text>
          </Stack>
          <Text
            w={{ base: "80vw", md: "60vw" }}
            px={{ base: "5", md: "30" }}
            fontSize={"xl"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
            textAlign={"justify"}
          >
            &emsp;&emsp;
            <Link
              href="https://www.laimm.net/about"
              textDecoration="underline"
              fontWeight="bolder"
              isExternal
            >
              游濟華
              <ExternalLinkIcon mx="2px" />
            </Link>
            教授曾對我們說：「
            <Text as={"span"} fontWeight={"bold"} color={"cyan.300"}>
              最好的學習方式便是將所學應用於生活中。
            </Text>
            」因此，為了理解學生是否有的理解數值方法這堂課的知識，教授要求我們將所學的工具應用於生活之中。
            {""}
            老實說這個問題讓我思索了好幾週，腦中都是工程應用，一點日常應用的影子都沒有。
            {""}
            然而所幸，在經過數週不眠不休地思索，以及參與設計思考工作坊，將思維發散並收束後，終於想出應用領域—「股票市場」。
          </Text>
          <Image
            src={img_numerical_poster1}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <Text
            px={{ base: "5", md: "10", lg: "30" }}
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"justify"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            工作坊中，藉由小組討論的方式來發散想法與構想可行性。
          </Text>
          <Image
            src={img_numerical_poster2}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <Text
            px={{ base: "5", md: "10", lg: "30" }}
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"justify"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            完成後，設計流程與GUI介面。
          </Text>
          <Image
            src={img_numerical_poster3}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <Text
            px={{ base: "5", md: "10", lg: "30" }}
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"justify"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            最後，撰寫摘要來向他人報告。
          </Text>
          <Image
            src={img_numerical_poster4}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <Text
            px={{ base: "5", md: "10", lg: "40" }}
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"justify"}
            color={"gray.200"}
            fontFamily={`"Open Sans", sans-serif`}
          >
            &emsp;&emsp;小組結束後，再各自以同樣的方式，發想自己的主題，也因此我後來決定製作股市回測。
          </Text>
        </VStack>

        {/* 2. gain */}
        <Banner title={"獲得收穫"} bgImage={img_bg_reward} brightness={"90%"} />
        <Box
          bg={useColorModeValue("gray.50", "blackAlpha.500")}
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
              mt={"150"}
              px={{ base: "5", md: "10", lg: "200" }}
            >
              &emsp;&emsp;這次的專題研究，我主要
              <Text as={"span"} fontWeight={"bold"}>
                複習pandas和學習tkinter套件
              </Text>
              。同時，在整學期的數值方法中，我從游濟華教授學到最重要的道理是：「
              <Text as={"span"} fontWeight={"bold"}>
                將所學結合電腦科學來解決生活問題。
              </Text>
              」原因是，現在科技突飛猛進，許多問題電腦都可以幫我們解決，甚至比我們手算的還精確。因此，
              {""}
              我們需要的已經不是使用老舊的工具，自己手算，而是將我們的工具，藉由coding的方式，讓電腦來幫我們計算。
            </Text>
          </Container>
        </Box>

        <Container maxW={"8xl"} py="3" mt={"100"} centerContent>
          <Box marginTop={"10"} justify={"center"}>
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
                //src={pdf_project}
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

export default Opt;
