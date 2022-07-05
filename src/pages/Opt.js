import {
  Box,
  Center,
  Flex,
  Text,
  Image,
  Heading,
  AspectRatio,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import img_bg from "../assets/bg.jpg";
import img_uml from "../assets/stock_frame.png";
import img_tool from "../assets/gear.png";
import img_idea from "../assets/lamp.png";

function Opt() {
  const detailBoxStyle = {
    bgGradient: "linear(to-l, #EDC967, #D2AC47, #F7EF8A, #AE8625)",
    borderRadius: "lg",
    p: "2",
    boxShadow: "dark-lg",
    boxSize: { base: "3em", md: "6vw", lg: "6vw" },
  };
  const textBoxStyle = {
    px: "4",
    w: { base: "70vw", md: "30vw", lg: "30vw" },
  };
  const headingStyle = {
    fontSize: { base: "sm", md: "xl", lg: "xl" },
    color: "yellow.400",
  };

  const textStyle = {
    fontSize: { base: "sm", md: "xl", lg: "xl" },
    color: "yellow.400",
  };

  return (
    <div>
      <Box
        bgColor="teal.700"
        bgImg={img_bg}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box backdropFilter="auto" backdropBlur="2px">
          <Center>
            <Heading
              fontSize={{ base: "50", md: "100", lg: "150" }}
              bgGradient="linear(to-l, #EDC967, #D2AC47, #F7EF8A, #AE8625)"
              bgClip="text"
              p="5"
            >
              數值最佳化股市投資
            </Heading>
          </Center>
          <Box px="10vw" py="10">
            <Heading color="teal.50">摘要:</Heading>
          </Box>
          <Box px="10vw" w="100vw">
            <Text fontSize="xl" color="teal.100">
              &emsp;&emsp;在現今通貨膨脹率高漲而利息低迷的時代，若將資金存於銀行或郵局中，只會隨時間消磨其價值。為此，
              <strong>
                <u>許多人投資股票和 ETF，以對抗通貨膨脹</u>
              </strong>
              。然而，眾所皆知水能載舟亦能覆舟，而股票市場亦如那滔滔浪江。若沒有準充分準備而隨意投資，
              只會落得「韭菜」，任人隨意宰割，的稱謂。因此，本研究藉由
              <strong>
                <u>
                  蒐集 yfinance 的股票數據，利用 pandas 整理資料後，使用
                  matlabplot 和 backtesting 繪出圖形和顯示回 測數據於用 tkinter
                  建立的圖形介面上，供使用者使用
                </u>
              </strong>
              。
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
                  <Text sx={textStyle}>
                    Python, pandas, matlabplot, tkinter, yfinance,
                    multithreading
                  </Text>
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
                    利用tkinter介面使大眾可以輕易操作和獲取股票資訊
                  </Text>
                </Box>
              </Center>
            </WrapItem>
          </Flex>

          <Box px="10vw" py="10">
            <Heading color="teal.50">程式架構與邏輯:</Heading>
          </Box>
          <Center>
            <Box
              bgGradient="linear(to-l, #EDC967, #D2AC47, #F7EF8A, #AE8625)"
              boxShadow="dark-lg"
              borderRadius="2xl"
              w={{ base: "90vw", md: "70vw", lg: "70vw" }}
            >
              <Image src={img_uml} p={{ base: "2", md: "5", lg: "8" }} />
            </Box>
          </Center>

          <Box px="10vw" py="10">
            <Heading color="teal.50">書面報告:</Heading>
          </Box>
          <Flex justify="center" w="100vw">
            <iframe
              title="numerical opt pdf"
              src="https://drive.google.com/file/d/15MRtr8mL9XtxG7JyL70cNwWiCeweTAIf/preview"
              width="800"
              height="1000"
              allow="autoplay"
            ></iframe>
          </Flex>

          <Box px="10vw" py="10">
            <Heading color="teal.50">心得:</Heading>
          </Box>
          <Box px="10vw" w="100vw">
            <Text fontSize="xl" color="teal.100">
              &emsp;&emsp;
              <Link href="https://www.laimm.net/about" isExternal>
                <strong>
                  <font color="#76E4F7">
                    <u>游濟華</u>
                    <ExternalLinkIcon mx="2px" />
                  </font>
                </strong>
              </Link>
              教授與
              <Link
                href="http://ncku.es/esncku/zh/page.teacher.query.action?id=2"
                isExternal
              >
                <strong>
                  <font color="#76E4F7">
                    <u>廖德祿</u>
                    <ExternalLinkIcon mx="2px" />
                  </font>
                </strong>
              </Link>
              教授曾對我說：「如何應用所學於生活中」
              如何把所學應用在日常生活中是我在數值方法中學到最重要的事情。
            </Text>
          </Box>
          <Box px="10vw" py="10">
            <Heading color="teal.50">Demo:</Heading>
          </Box>
          <Flex justify="center" w="100vw">
            <AspectRatio
              w={{ base: "70vw", md: "60vw", lg: "50vw" }}
              ratio={4 / 3}
            >
              <iframe
                title="tower defense demo video"
                src="https://www.youtube.com/embed/mkjUvo7B_K8"
                allowFullScreen
              />
            </AspectRatio>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default Opt;
