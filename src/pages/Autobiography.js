import {
  Icon,
  Box,
  Flex,
  Text,
  Image,
  Heading,
  WrapItem,
  Container,
  useColorModeValue,
  useBreakpointValue,
  HStack,
  Stack,
  Center,
  Button,
  Link as ChakraLink,
  Tooltip,
  Skeleton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FiHome, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  RiPlantLine,
  RiPlantFill,
  RiBallPenLine,
  RiBallPenFill,
  RiSunLine,
  RiSunFill,
  RiApps2Line,
  RiApps2Fill,
} from "react-icons/ri";

import "@fontsource/open-sans";
import "@fontsource/nunito-sans";

import Carousel from "react-grid-carousel";
import Title from "../components/Title";
import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";

import img_digi from "../assets/digi_report.jpg";
import img_led_waving from "../assets/led_waving.png";
import img_vr_fight from "../assets/vr_fight.png";
import img_vr_coding from "../assets/vr_coding.png";
import img_vr_connecting from "../assets/vr_connecting.png";
import img_miro from "../assets/miro.png";
import img_tower_uml from "../assets/uml.png";
import img_bg from "../assets/bg_autobiography.jpg";
import img_grow from "../assets/grow.jpg";
import img_notepad_coding from "../assets/notepad_coding.png";
import img_books from "../assets/books.jpg";
import img_mc_all from "../assets/mc_all.jpg";
import img_future from "../assets/future.jpg";
import img_thanksgivening from "../assets/thanks_giving.jpg";
import img_dt_workshop from "../assets/dt_workshop.png";
import img_future_plan from "../assets/future_plan.png";
import img_future_plan1 from "../assets/future_plan1.png";
import img_opt_gui from "../assets/opt_gui.png";

function Autobiography() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: <FiHome />, href: "#" },
    { name: " Growth background", icon: <RiPlantLine />, href: "#bg" },
    { name: "Learning progress", icon: <RiBallPenLine />, href: "#study" },
    { name: "Ativity", icon: <RiApps2Line />, href: "#activity" },
    { name: "Future prospects", icon: <RiSunLine />, href: "#future" },
  ];

  // Icon box infomation
  const IconBoxItems = [
    {
      icon: RiPlantFill,
      title: "成長背景",
      text: "學習獨立、啟蒙程式",
    },
    {
      icon: RiBallPenFill,
      title: "求學過程",
      text: "設計思考、增加程式能力",
    },
    {
      icon: RiApps2Fill,
      title: "活動參與",
      text: "實習研習、擔任活動總召、營隊講師",
    },
    {
      icon: RiSunFill,
      title: "未來展望",
      text: "專精能力、斜槓人生",
    },
  ];

  // vr carousel cards
  const carouselItems = [
    { src: img_vr_connecting },
    { src: img_vr_coding },
    { src: img_vr_fight },
  ];

  // activity carousel cards
  const activityCards = [
    {
      src: img_digi,
      alt: "digi intern photo",
      title: "Digi實習計畫",
      context:
        "與跨領域的同儕合作，共同為企業製作相關專題。目前正設計一套系統供使用者利用影像辨識輸入收據、三聯式發票並建立數據庫提供視覺化圖表、會計系統以及資料探勘使用。",
      link: "/project/digi",
    },
    {
      src: img_thanksgivening,
      alt: "中友會照片",
      title: "成大中友會活動",
      context:
        "由於是台中人，因此有參加成大中友會，認識同樣來自台中不同科系的同儕。友會期間，擔任不同職位如：活動總召、營隊講師、隊輔等，以此累積人脈並增進人際關係與溝通技巧。",
      link: "/activity",
    },
    {
      src: img_led_waving,
      alt: "光蛇照片",
      title: "創客計畫",
      context:
        "跟著系上的創客計畫，在學長姐的帶領下實際焊接和撰寫程式來製作新一代的螢光棒，稱為光蛇。光蛇上有數枚LED燈泡，可透過快速旋轉螢光棒所造成的視覺暫留來顯示文字和圖案。",
      link: "/activity",
    },
    {
      src: img_dt_workshop,
      alt: "設計思考工作坊照片",
      title: "設計思考工作坊",
      context:
        "參加設計思考工作坊，和組員從生活中找尋問題，並藉由便利貼的輔助來解構、發想和收束問題。後來實習時，也帶領組員應用設計思考構思小專題：AI自助結帳系統和探勘心臟病成因。",
      link: "/activity",
    },
  ];

  const XlLeftArrow = (
    <Icon
      as={FiChevronLeft}
      w={50}
      h={50}
      color={"whiteAlpha.500"}
      aria-label="left-arrow"
      variant="ghost"
      position="absolute"
      left={"30px"}
      top={"50%"}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      _hover={{ textDecoration: "none", color: "whiteAlpha.800" }}
    />
  );

  const XlRightArrow = (
    <Icon
      as={FiChevronRight}
      w={50}
      h={50}
      color={"whiteAlpha.500"}
      aria-label="right-arrow"
      variant="ghost"
      position="absolute"
      right={"30px"}
      top={"50%"}
      transform={"translate(0%, -50%)"}
      alignSelf={"flex-end"}
      alignItems={"flex-end"}
      zIndex={2}
      _hover={{ textDecoration: "none", color: "whiteAlpha.800" }}
    />
  );

  const LeftArrow = (
    <Icon
      as={FiChevronLeft}
      w={50}
      h={50}
      color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
      aria-label="left-arrow"
      variant="ghost"
      position="absolute"
      left={"30px"}
      top={"50%"}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("blackAlpha.800", "whiteAlpha.800"),
      }}
    />
  );

  const RightArrow = (
    <Icon
      as={FiChevronRight}
      w={50}
      h={50}
      color={useColorModeValue("blackAlpha.500", "whiteAlpha.500")}
      aria-label="right-arrow"
      variant="ghost"
      position="absolute"
      right={"30px"}
      top={"50%"}
      transform={"translate(0%, -50%)"}
      alignSelf={"flex-end"}
      alignItems={"flex-end"}
      zIndex={2}
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("blackAlpha.800", "whiteAlpha.800"),
      }}
    />
  );

  // activity color mode value
  const activityColorMode = useColorModeValue("gray.50", "gray.700");

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        {/* title banner */}
        <Title
          brightness={"20%"}
          image={img_bg}
          mainColor={"teal.400"}
          mainTitle={"自傳"}
          subColor={"teal.600"}
          subTitle={"認識自己興趣，並喜歡上程式的過程"}
        />

        {/* icon box */}
        <Flex
          px={{ base: "0", md: "8vw", lg: "10vw" }}
          flexWrap={"wrap"}
          justify={"center"}
          justifyContent={"space-around"}
          marginTop={"150px"}
        >
          {IconBoxItems.map((item, index) => (
            <WrapItem key={index} py={{ base: "3", md: "3", lg: "5" }}>
              <IconBox
                bgColor={"teal.100"}
                iconColor={"teal.800"}
                iconBoxSize={{ base: "3em", md: "3em", lg: "5vw" }}
                textBoxSize={{ base: "60vw", md: "40vw", lg: "17vw" }}
                textSize={{ base: "sm", md: "lg", lg: "lg" }}
                {...item}
              />
            </WrapItem>
          ))}
        </Flex>

        {/* grow bg */}
        <Banner
          marginTop={"150"}
          title={"成長背景｜Growth Background"}
          bgImage={img_grow}
          id="bg"
          scrollMargin="150px"
        />
        <Container
          maxW={"8xl"}
          bg={useColorModeValue("gray.50", "gray.700")}
          py={150}
          centerContent
        >
          <Stack spacing={20} flexWrap={"wrap"} justify={"center"}>
            <Heading fontFamily={`"Open Sans", sans-serif`}>
              1. 學習獨立
            </Heading>

            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;我是台中人，出生在非富裕家庭中，父母親時常因為工作不在，因此，我從小就學習獨立自主的生活方式。
              {""}
              同時，看著父母親為了家庭辛勤工作的樣子，我決意在學習上出人頭地，力求階級流動。
            </Text>
            <Heading fontFamily={`"Open Sans", sans-serif`}>
              2. 啟蒙程式
            </Heading>
            <Skeleton isLoaded>
              <Box w={{ base: "80vw", md: "60vw", lg: "60vw" }}>
                <Image src={img_notepad_coding} />
              </Box>
            </Skeleton>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;高中參加電資營，{""}
              使用notepad++撰寫HTML與CSS來呈現網頁並部署到GitHub page上。{""}
              將文字編譯後以圖形化介面呈現，這是我第一次了解到程式的有趣，{""}
              讓我充滿成就感。但同時我也對電路的實作充滿興趣，{""}
              譬如用Arduino連接七段顯示器，使其有規律地呈現數字。{""}
              因此，我選擇就讀成大工科系，期望學習資訊、電機與力學的知識後，{""}
              能更加確立自己的興趣，同時整合所學加以應用。
            </Text>
          </Stack>
        </Container>

        {/* study process */}
        <Banner
          title={"求學過程｜Learning Progress"}
          bgImage={img_books}
          id="study"
          scrollMargin="150px"
        />
        <Container maxW={"7xl"} py={150} centerContent>
          <Stack spacing={20} flexWrap={"wrap"} justify={"center"}>
            <Heading fontFamily={`"Open Sans", sans-serif`}>
              1. 探索興趣
            </Heading>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;就讀成大工科系時，為了更加理解自己的喜好，{""}
              我修習許多資訊、電機與力學的相關課程。{""}
              例如程式設計、電路學和工程力學等；{""}
              六日也有參與資工系開設的PHP {"&"} MySQL密集課程。{""}
              此外，也修讀工程科學暨創新概論，設計齒輪機構帶動木製鋼琴家彈琴，
              {""}
              以及組裝遙控車並用C語言撰寫遙控車的控制程式。{""}
              從中發現自己對力學真的沒有興趣，{""}
              而資訊和電機則像是等重的法碼擺在天秤上，持平。
            </Text>

            <Heading fontFamily={`"Open Sans", sans-serif`}>
              2. 鎖定目標
            </Heading>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;直到大二的暑假參與
              <Link
                to="/project/tower-defense"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <Text as={"span"} color={"teal.400"} fontWeight={"bold"}>
                  Python程式語言與互動式遊戲設計
                </Text>
              </Link>
              的密集課程。
              {""}
              使用Python程式語言，從零建造一個塔防遊戲，我才赫然發現，我最喜歡的是「資訊工程」。
            </Text>
            <Skeleton isLoaded>
              <Box w={{ base: "80vw", md: "60vw", lg: "60vw" }}>
                <Image src={img_miro} />
                <Text
                  mt={5}
                  px={{ base: 10, lg: 20 }}
                  w={{ base: "80vw", md: "60vw", lg: "60vw" }}
                  fontSize="xl"
                  textAlign={"justify"}
                  fontFamily={`"Open Sans", sans-serif`}
                >
                  ▲ Python遊戲設計課程中學習運用
                  <Text as={"span"} fontWeight={"bold"} color={"teal.400"}>
                    設計思考
                  </Text>
                  法來對新冠肺炎的主題進行聯想與解構，
                  {""}
                  以此構思遊戲方向。上圖為對新冠疫情的聯想。
                </Text>
              </Box>
            </Skeleton>
            <Skeleton isLoaded>
              <Box w={{ base: "80vw", md: "60vw", lg: "60vw" }}>
                <Image src={img_tower_uml} />
                <Text
                  mt={5}
                  px={{ base: 10, lg: 20 }}
                  w={{ base: "80vw", md: "60vw", lg: "60vw" }}
                  fontSize="xl"
                  textAlign={"justify"}
                  fontFamily={`"Open Sans", sans-serif`}
                >
                  ▲ 遊戲設計課程中學習
                  <Text as={"span"} fontWeight={"bold"} color={"teal.400"}>
                    UML和design patterns
                  </Text>
                  來幫助開發。上圖為塔防遊戲MVC概要架構，輔以Observer
                  pattern處理輸入事件。
                </Text>
              </Box>
            </Skeleton>

            <Heading fontFamily={`"Open Sans", sans-serif`}>
              3. 深入學習
            </Heading>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;確定自我興趣之後，我開始選修相關科目譬如機器學習與作業系統。
              {""}
              此外，我也修讀實作課程如微處理機與介面設計（含實習），{""}
              透過撰寫C語言和組合語言來製作嵌入式系統。{""}
              另外，在數值方法的課程中，教授期望我們期末專題運用所學結合程式語言來解決生活中的問題，
              {""}
              也因此我透過Python實現數值最佳化，以此製作「
              <Link
                to="/project/opt"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <Text as={"span"} color={"teal.400"} fontWeight={"bold"}>
                  最佳化股票回測系統
                </Text>
              </Link>
              」。
            </Text>
            <Skeleton isLoaded>
              <Box w={{ base: "80vw", md: "60vw", lg: "60vw" }}>
                <Image src={img_opt_gui} />
                <Text
                  mt={5}
                  px={{ base: 10, lg: 20 }}
                  w={{ base: "80vw", md: "60vw", lg: "60vw" }}
                  fontSize="xl"
                  textAlign={"justify"}
                  fontFamily={`"Open Sans", sans-serif`}
                >
                  ▲ 最佳化股票回測系統中，使用者可以輸入股票資訊來比對原始策略和
                  {""}
                  最佳化策略下的結果差異。上圖為輸入TSLA股票資訊的分析結果。
                </Text>
              </Box>
            </Skeleton>

            <HStack spacing={2}>
              <Heading fontFamily={`"Open Sans", sans-serif`}>
                4. 專題應用
              </Heading>
              <Tooltip
                label="Link to VR project"
                fontSize={"lg"}
                fontFamily={`"Open Sans", sans-serif`}
              >
                <ChakraLink
                  as={Link}
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                  fontFamily={`"Open Sans", sans-serif`}
                  to="/project/vr"
                  onClick={() => window.scroll({ top: 0 })}
                  color="teal.400"
                  _hover={{ color: "teal.500" }}
                >
                  #
                </ChakraLink>
              </Tooltip>
            </HStack>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;持續深入探索資訊領域時，由於元宇宙的興起，{""}
              我也因此加入黃悅民教授下的多媒體網路實驗室中，{""}
              應用虛擬實境的技術於教育之中來探討其對學生學習的影響。 期間很榮幸
              <Text as={"span"} color={"teal.400"} fontWeight={"bold"}>
                通過科技部大專生計畫
              </Text>
              ，並且在成大大專生專題研究成果海報競賽中獲得
              <Text as={"span"} color={"teal.400"} fontWeight={"bold"}>
                研究獎第二名
              </Text>
              的殊榮。 除此之外，執行虛擬實境專題期間，我發現對於資訊的應用，
              {""}
              如影像處理、電腦視覺、資料探勘，以及製作遊戲、應用程式，{""}
              我感到最有興趣，因此，我後來參與
              <Link
                to="/project/digi"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <Text as={"span"} color={"teal.400"} fontWeight={"bold"}>
                  工研院Digi+ Talent實習計畫
                </Text>
              </Link>
              製作影像辨識專題、{""}
              同時，大四也選修人工智慧導論、影像處理、電腦視覺及深度學習概論，以及視窗程式設計。
            </Text>

            <Box
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              h={{ base: "260px", lg: "500px" }}
            >
              <Carousel
                cols={1}
                rows={1}
                gap={5}
                arrowLeft={XlLeftArrow}
                arrowRight={XlRightArrow}
                loop
                autoplay={useBreakpointValue({ md: 4000 })}
              >
                {carouselItems.map((card, index) => (
                  <Carousel.Item key={index}>
                    <Skeleton isLoaded>
                      <Image
                        src={card.src}
                        w={{ base: "80vw", md: "60vw", lg: "60vw" }}
                        h={{ base: "260px", lg: "500px" }}
                        rounded={"xl"}
                      />
                    </Skeleton>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>

            <HStack spacing={2}>
              <Heading fontFamily={`"Open Sans", sans-serif`}>
                5. 個人專案
              </Heading>
              <Tooltip
                label="Link to Side project"
                fontSize={"lg"}
                fontFamily={`"Open Sans", sans-serif`}
              >
                <ChakraLink
                  as={Link}
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                  fontFamily={`"Open Sans", sans-serif`}
                  to="/project/side-project"
                  onClick={() => window.scroll({ top: 0 })}
                  color="teal.400"
                  _hover={{ color: "teal.500" }}
                >
                  #
                </ChakraLink>
              </Tooltip>
            </HStack>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              <Text as={"span"} fontWeight={"bold"}>
                （一）智慧家庭
              </Text>
              <br />
              <br />
              &emsp;&emsp;除了課堂專題之外，我也喜歡製作個人專案。{""}
              宿舍床鋪在上，大燈開關在下，每次睡覺時，{""}
              皆先要在樓下關燈後再到床上摸黑鋪床，實屬麻煩，{""}
              於是我在樹莓派上安裝
              <Text as={"span"} color={"teal.400"} fontWeight={"bold"}>
                Home Assistant{" "}
              </Text>
              開源軟體並向 宿委申請房間斷電來切換宿舍房內的大燈開關成智慧開關。
              {""}
              雖然最後因為電壓不穩的問題而作罷，我還是退而求其次，{""}
              改用智慧插座實現控制家電與手機電量80%即斷電的功能，以此實現智慧家庭。
            </Text>

            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              <Text as={"span"} fontWeight={"bold"}>
                （二）React網頁
              </Text>
              <br />
              <br />
              &emsp;&emsp;目前除了AI領域外，
              我正在學習JavaScript、HTML、以及CSS， 實作
              <Text as={"span"} color={"teal.400"} fontWeight={"bold"}>
                React前端購物網站
              </Text>
              與
              <Text as={"span"} color={"teal.400"} fontWeight={"bold"}>
                個人形象網站
              </Text>
              。 主要是因為我想拓展本身的技能，串接網頁與Python
              API實現跨平台的功能。同時，目前許多軟體、{""}
              應用程式其實也都是網頁，可以用JavaScript編寫而成，{""}
              像是撰寫程式常用的Visual Studio Code{""}
              即是使用與JavaScript兼容的TypeScript。{""}
              此外，現今也有漸進式網頁應用（Progressive Web
              Application）的技術可以將網頁包裝成{""}
              應用程式下載到手機中。因此，我才特意花時間學習，{""}
              未來也預計學習Laravel後端框架。
            </Text>
          </Stack>
        </Container>

        {/* activity */}
        <Banner
          title={"活動參與｜Activity"}
          bgImage={img_mc_all}
          id="activity"
          scrollMargin="150px"
        />
        <Box py={150} w={"full"}>
          <Carousel
            cols={useBreakpointValue({ base: 1, lg: 2 })}
            rows={1}
            gap={20}
            arrowLeft={LeftArrow}
            arrowRight={RightArrow}
            loop
            autoplay={useBreakpointValue({ md: 4000 })}
          >
            {activityCards.map((card, index) => (
              <Carousel.Item key={index}>
                <Stack
                  spacing={10}
                  borderRadius={"2xl"}
                  bg={activityColorMode}
                  overflow={"hidden"}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    w={"full"}
                    h={"350px"}
                    fit="cover"
                  />
                  <Heading
                    px={10}
                    fontFamily={`"Open Sans", sans-serif`}
                    textAlign={"center"}
                  >
                    {card.title}
                  </Heading>
                  <Text
                    px={10}
                    fontSize="xl"
                    textAlign={"justify"}
                    fontFamily={`"Open Sans", sans-serif`}
                  >
                    &emsp;&emsp;{card.context}
                  </Text>
                  <Center>
                    <Button
                      mb={10}
                      as={Link}
                      to={card.link}
                      onClick={() => window.scrollTo({ top: 0 })}
                      colorScheme={"green"}
                      bg={"teal.400"}
                      rounded={"full"}
                      px={5}
                      _hover={{
                        bg: "teal.500",
                      }}
                    >
                      <HStack spacing={2}>
                        <Text>Detail</Text>
                        <ArrowForwardIcon w={5} h={5} />
                      </HStack>
                    </Button>
                  </Center>
                </Stack>
              </Carousel.Item>
            ))}
          </Carousel>
        </Box>

        {/* future */}
        <Banner
          title={"未來展望｜Future Prospects"}
          bgImage={img_future}
          id="future"
          scrollMargin="150px"
        />
        <Container maxW={"8xl"} py={150} centerContent>
          <Stack spacing={20} flexWrap={"wrap"} justify={"center"}>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              <Text as={"span"} fontWeight={"bold"}>
                1. 研究所期間
              </Text>
              <br />
              <br />
              &emsp;&emsp;我想完成三件事情：
              <br />
              一、閱讀與構思論文，為畢業論文做準備。
              <br />
              二、想修習關於電腦視覺、影像處理、資料探勘、深度學習與AI方面等課程以增進能力。
              <br />
              三、自學React和Laravel，接案架設購物網站、App，增加能力與自我價值。
              <br />
              <br />
              <Text as={"span"} fontWeight={"bold"}>
                2. 進入職場
              </Text>
              <br />
              <br />
              &emsp;&emsp;進入公司為企業進行資料探勘與數據分析，累積作品和經驗。
              {""}
              下班時間則到leetcode刷題，為GOOGLE面試做準備；同時接程式案件，{""}
              作為額外收入並累積作品，當個斜槓青年。
            </Text>
            <Skeleton isLoaded>
              <Image
                src={useColorModeValue(img_future_plan, img_future_plan1)}
                w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              />
            </Skeleton>
          </Stack>
        </Container>

        <Footer marginTop={0} />
      </Box>
    </>
  );
}

export default Autobiography;
