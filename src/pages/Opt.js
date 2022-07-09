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
import img_uml from "../assets/stock_frame.png";
import img_tool from "../assets/gear.png";
import img_idea from "../assets/lamp.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IconBox from "../components/IconBox";
import Sidebar from "../components/Sidebar";
import {
  FiHome,
  FiCompass,
  FiCommand,
  FiMessageCircle,
  FiBox,
  FiFile,
} from "react-icons/fi";

function Opt() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Abstract", icon: FiCompass, href: "#abstract" },
    { name: "Architecture", icon: FiCommand, href: "#architecture" },
    { name: "Written report", icon: FiFile, href: "#written report" },
    { name: "Thoughts", icon: FiMessageCircle, href: "#thoughts" },
    { name: "Demo", icon: FiBox, href: "#demo" },
  ];

  // Icon box infomation
  const IconBoxItems = [
    {
      image: img_tool,
      title: "Tool",
      text: "Python, pandas, matlabplot, tkinter, yfinance, multithreading",
    },
    {
      image: img_idea,
      title: "設計理念",
      text: "利用tkinter介面使大眾可以輕易操作和獲取股票資訊",
    },
  ];
  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box backdropFilter="auto" backdropBlur="8px">
        <Center>
          <Heading
            marginTop={"85px"}
            fontSize={{ base: "50", md: "100", lg: "150" }}
            bgGradient="linear(to-l, #EDC967, #D2AC47, #F7EF8A, #AE8625)"
            bgClip="text"
            p="5"
          >
            數值最佳化股市投資
          </Heading>
        </Center>
        <Link name="abstract" />
        <Box px="10vw" py="10">
          <Heading>Abstract:</Heading>
        </Box>
        <Box px="10vw" w="100vw">
          <Text fontSize="xl" color="teal.100">
            &emsp;&emsp;在現今通貨膨脹率高漲而利息低迷的時代，若將資金存於銀行或郵局中，只會隨時間消磨其價值。為此，
            <Text as="strong" textDecoration="underline">
              許多人投資股票和 ETF，以對抗通貨膨脹
            </Text>
            。然而，眾所皆知水能載舟亦能覆舟，而股票市場亦如那滔滔浪江。若沒有準充分準備而隨意投資，
            只會落得「韭菜」，任人隨意宰割，的稱謂。因此，本研究藉由
            <Text as="strong" textDecoration="underline">
              蒐集 yfinance 的股票數據，利用 pandas 整理資料後，使用 matlabplot
              和 backtesting 繪出圖形和顯示回 測數據於用 tkinter
              建立的圖形介面上，供使用者使用
            </Text>
            。
          </Text>
        </Box>

        {/* icon box for catching the points */}
        <Flex flexWrap="wrap" py="10" justify="center">
          <WrapItem py="1">
            {IconBoxItems.map((item) => (
              <IconBox
                bgGradient={"linear(to-l, #EDC967, #D2AC47, #F7EF8A, #AE8625)"}
                iconBoxSize={{ base: "3em", md: "6vw", lg: "6vw" }}
                textBoxSize={{ base: "70vw", md: "30vw", lg: "30vw" }}
                textSize={{ base: "sm", md: "xl", lg: "xl" }}
                textColor={"yellow.400"}
                {...item}
              />
            ))}
          </WrapItem>
        </Flex>
        <Link name="architecture" />
        <Box px="10vw" py="10">
          <Heading>Architecture:</Heading>
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
        <Link name="written report" />
        <Box px="10vw" py="10">
          <Heading>Written report:</Heading>
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
        <Link name="thoughts" />
        <Box px="10vw" py="10">
          <Heading>Thoughts:</Heading>
        </Box>
        <Box px="10vw" w="100vw">
          <Text fontSize="xl" color="teal.100">
            &emsp;&emsp;
            <Link
              href="https://www.laimm.net/about"
              color="cyan.300"
              textDecoration="underline"
              fontWeight="bolder"
              isExternal
            >
              游濟華
              <ExternalLinkIcon mx="2px" />
            </Link>
            教授與
            <Link
              href="http://ncku.es/esncku/zh/page.teacher.query.action?id=2"
              color="cyan.300"
              textDecoration="underline"
              fontWeight="bolder"
              isExternal
            >
              廖德祿
              <ExternalLinkIcon mx="2px" />
            </Link>
            教授曾對我說：「
            <Text as="font" color="red" fontWeight="bolder">
              最好的學習方式便是將所學應用於生活中。
            </Text>
            」因此，為了理解學生是否有的理解數值方法這堂課的知識，教授要求我們將所學的工具應用於生活之中。
            老實說這個問題讓我思索了好幾週，腦中都是工程應用，一點日常應用的影子都沒有。
            然而所幸，在經過數週不眠不休地思索，以及參與設計思考工作坊，將思維發散並收束後，終於想出應用領域
            ——「股票市場」。
            <br />
            &emsp;&emsp;選擇股票市場的原因如摘要大致所述，是為了對抗通貨膨脹。而這即是許多人正面臨或即將面臨的問題，
            也就是生活上無可避免的議題。因此，為了使更多人以及我自己可以更加方便地學習與理解，
            我才決定選擇股票市場作為目標並製作分析程式，以期望可以造福更多人。
            <br />
            &emsp;&emsp;開發程式時，
            <Text as="strong" textDecoration="underline">
              有別於以往從工程角度出發的專案設計，這次是從使用者角度出發
            </Text>
            。這讓我發現許多工程師與一般使用者之間所存在的差距。舉例而言，閱讀CLI
            (Command-Line Interface)
            上的輸出訊息對所有學過coding的人是再稀鬆平常不過的事，然而這對普遍大眾卻是難以閱讀與理解的事。
            <Text as="strong" textDecoration="underline">
              也因此我決定利用tkinter製作簡易的GUI使一般大眾也能對程式的功能駕輕就熟，輕易輸入資料與閱讀輸出結果，達到普及化與生活化的目的
            </Text>
            。
          </Text>
        </Box>
        <Link name="demo" />
        <Box px="10vw" py="10">
          <Heading>Demo:</Heading>
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

      <Footer />
    </>
  );
}

export default Opt;
