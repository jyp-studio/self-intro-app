import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  AspectRatio,
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
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FiHome } from "react-icons/fi";
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
import { BsFillTriangleFill } from "react-icons/bs";

import "@fontsource/open-sans";
import "@fontsource/nunito-sans";

import Carousel from "react-grid-carousel";
import Title from "../components/Title";
import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";

import img_digi from "../assets/bg_digi.jpg";
import img_tower_gather from "../assets/tower_gather.png";
import img_vr_fight from "../assets/vr_fight.png";
import img_vr_coding from "../assets/vr_coding.png";
import img_vr_connecting from "../assets/vr_connecting.png";
import img_vr_npc from "../assets/vr_npc.png";
import img_bg from "../assets/bg_autobiography.jpg";
import img_grow from "../assets/grow.jpg";
import img_lonely from "../assets/lonely.jpg";
import img_led from "../assets/led.jpg";
import img_notepad_coding from "../assets/notepad_coding.png";
import img_books from "../assets/books.jpg";
import img_mc_all from "../assets/mc_all.jpg";
import img_future from "../assets/future.jpg";
import img_thanksgivening from "../assets/thanks_giving.jpg";
import img_dt_workshop from "../assets/dt_workshop.png";

function Autobiography() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Background", icon: RiPlantLine, href: "#bg" },
    { name: "Studying", icon: RiBallPenLine, href: "#study" },
    { name: "Ativity", icon: RiApps2Line, href: "#activity" },
    { name: "Future", icon: RiSunLine, href: "#future" },
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
        "與跨領域的同儕與業師合作，共同為企業製作相關專題。\
      目前正設計一套系統提供使用者利用影像辨識輸入收據、\
      三聯式發票並建立數據庫提供視覺化圖表、會計系統以及資料探勘使用。",
      link: "/project/digi",
    },
    {
      src: img_thanksgivening,
      alt: "中友會照片",
      title: "成大中友會活動",
      context:
        "由於是台中人，因此有參加成大中友會，認識同樣來自台中不同科系的同儕。\
        友會期間，擔任不同職位如：活動總召、營隊講師、隊輔等，\
        以此累積人脈並增進人際關係與溝通技巧。",
      link: "/activity",
    },
    {
      src: img_led,
      alt: "光蛇照片",
      title: "創客計畫",
      context:
        "跟著系上的創客計畫，在學長姐的帶領下實際焊接和撰寫程式來製作新一代的螢光棒，稱為光蛇。\
        光蛇上有數枚LED燈泡，可透過快速旋轉螢光棒所造成的視覺暫留來顯示文字和圖案。",
      link: "/activity",
    },
    {
      src: img_dt_workshop,
      alt: "設計思考工作坊照片",
      title: "設計思考工作坊",
      context:
        "參加設計思考工作坊，和組員從生活中找尋問題，並藉由便利貼的輔助來解構、發想和收束問題。\
        後來實習時，也帶領組員應用設計思考構思小專題：AI自助結帳系統和探勘心臟病成因。",
      link: "/activity",
    },
  ];

  // what I learn im class with name and rating.
  const Gain = [
    {
      name: "Python",
      rating: "5",
    },
    {
      name: "抗壓性",
      rating: "5",
    },
    {
      name: "UML",
      rating: "4",
    },
    {
      name: "Design pattern",
      rating: "4",
    },
  ];

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
            <Box
              bgImage={img_lonely}
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              h={{ base: "400px", lg: "500px" }}
              bgRepeat={"no-repeat"}
              bgPosition={"center"}
              bgSize={"cover"}
            />

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
            <Box
              bgImage={img_notepad_coding}
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              h={{ base: "400px", lg: "500px" }}
              bgRepeat={"no-repeat"}
              bgPosition={"center"}
              bgSize={"cover"}
            />
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;高中參加電資營，使用notepad++撰寫html與css來呈現網頁。
              {""}
              將文字編譯後以圖形化介面呈現，這是我第一次了解到程式的有趣，讓我充滿成就感，
              {""}
              想更加了解它的發展性。因此，我選擇就讀成大工科系，期望學習資訊、電機的知識，將軟硬體結合。
            </Text>
          </Stack>
        </Container>

        {/* study process */}
        <Banner
          title={"求學過程｜Study Process"}
          bgImage={img_books}
          id="study"
          scrollMargin="150px"
        />
        <Container maxW={"7xl"} py={150} centerContent>
          <Stack spacing={20} flexWrap={"wrap"} justify={"center"}>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;學習資訊、電機與機械方面領域的課程時，我發現面對資訊領域課程，
              {""}
              我感受到最多樂趣與收穫。因此，我決定繼續向資訊領域深造。
            </Text>
            <HStack spacing={2}>
              <Heading fontFamily={`"Open Sans", sans-serif`}>
                1. VR專題
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
            <Box
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              h={{ base: "400px", lg: "500px" }}
            >
              <Carousel
                cols={1}
                rows={1}
                gap={20}
                hideArrow
                loop
                autoplay={useBreakpointValue({ md: 4000 })}
              >
                {carouselItems.map((card) => (
                  <Carousel.Item>
                    <Box
                      bgImage={card.src}
                      w={{ base: "80vw", md: "60vw", lg: "60vw" }}
                      h={{ base: "400px", lg: "500px" }}
                      bgRepeat={"no-repeat"}
                      bgPosition={"center"}
                      bgSize={"cover"}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;由於想踏入元宇宙的領域，因此加入黃悅民教授下的多媒體實驗室中，
              {""}
              學習並探討情境模擬學習融入虛擬實境對學生學習表現與參與度之影響。
              <br />
              <br />
              <Text as={"span"} fontWeight={"bold"}>
                一、學習能力
              </Text>
              <br />
              <br />
              &emsp;&emsp;建立遊戲的過程中，許多軟體都是第一次接觸，要自己學習，
              {""}
              如哈瑪星科技的虛擬實境編輯器Magic VR、Blender、Cinema 4D等。{""}
              在查找資料和學習的過程中，我發現許多程式都有相似的邏輯與框架，因而顯著提升上手能力。
              {""}
              而這也幫助我日後快速自學JS和React框架。
              <br />
              <br />
              <Text as={"span"} fontWeight={"bold"}>
                二、創造力
              </Text>
              <br />
              <br />
              &emsp;&emsp;教授原本只是希望我們建構一個簡易學習樹莓派的場景於虛擬環境中，
              {""}
              但為了更加拓展虛擬實境的優點，我另外增加授課NPC與任務NPC，{""}
              分別向使用者教學指導與指派任務；同時，我也規劃劇本、添加對戰系統，
              {""}
              使學習者能夠更加融入教學性遊戲中，提升學習者的參與度。
            </Text>
            <Box>
              <Box
                bgImage={img_vr_npc}
                w={{ base: "80vw", md: "60vw", lg: "60vw" }}
                h={{ base: "400px", lg: "500px" }}
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
                bgSize={"cover"}
              />
              <HStack mt={2} justify={"center"}>
                <BsFillTriangleFill />
                <Text
                  fontSize={"xl"}
                  textAlign={"center"}
                  fontFamily={`"Open Sans", sans-serif`}
                >
                  尋求玩家協助的NPC
                </Text>
              </HStack>
            </Box>

            <Divider />

            <HStack spacing={2}>
              <Heading fontFamily={`"Open Sans", sans-serif`}>
                2. 印象深刻的課
              </Heading>
              <Tooltip
                label="Link to Tower Defense project"
                fontSize={"lg"}
                fontFamily={`"Open Sans", sans-serif`}
              >
                <ChakraLink
                  as={Link}
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                  fontFamily={`"Open Sans", sans-serif`}
                  to="/project/tower-defense"
                  onClick={() => window.scroll({ top: 0 })}
                  color="teal.400"
                  _hover={{ color: "teal.500" }}
                >
                  #
                </ChakraLink>
              </Tooltip>
            </HStack>
            <Box
              bgImage={img_tower_gather}
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              h={{ base: "400px", lg: "500px" }}
              bgRepeat={"no-repeat"}
              bgPosition={"center"}
              bgSize={"cover"}
            />
            <Text
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              fontSize="xl"
              textAlign={"justify"}
              fontFamily={`"Open Sans", sans-serif`}
            >
              &emsp;&emsp;大二暑假參加python遊戲設計課程，在這堂課中我學到許多。
              <br />
              <br />
              <Text as={"span"} fontWeight={"bold"}>
                一、設計思考｜design thinking
              </Text>
              <br />
              <br />
              &emsp;&emsp;課程討論中，我們在Miro中張貼許多代表自己的想法的便利貼，
              {""}
              以人為本發散思維，收束想法，最後實作。從中我學習到如何有效溝通、團隊合作、
              {""}
              以及設計思考的方式，並且也將其運用在日後Digi+ Talent計畫當中。
              <br />
              <br />
              <Text as={"span"} fontWeight={"bold"}>
                二、UML {"&"} design pattern
              </Text>
              <br />
              <br />
              &emsp;&emsp;Albert Einstein曾說：「如果我有1小時拯救世界，{""}
              我會花55分鐘去確認問題為何，只以5分鐘尋找解決方案。」{""}
              這代表架構的擬定將決定日後撰寫程式容易度。{""}
              當時，我們花約好幾天的時間才確立整個遊戲的架構：{""}
              使用MVC、observer pattern、我方與敵方的運作形式等。{""}
              而這也使後來撰寫上萬行程式時，方便許多。
            </Text>
            <Box>
              <AspectRatio
                w={{ base: "80vw", md: "60vw", lg: "60vw" }}
                ratio={16 / 9}
              >
                <iframe
                  title="tower defense demo video"
                  src="https://www.youtube.com/embed/mkjUvo7B_K8"
                  allowFullScreen
                />
              </AspectRatio>
              <HStack mt={2} justify={"center"}>
                <BsFillTriangleFill />
                <Text
                  fontSize={"xl"}
                  textAlign={"center"}
                  fontFamily={`"Open Sans", sans-serif`}
                >
                  塔防遊戲demo畫面
                </Text>
              </HStack>
            </Box>
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
            hideArrow
            loop
            autoplay={useBreakpointValue({ md: 4000 })}
          >
            {activityCards.map((card) => (
              <Carousel.Item>
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
          title={"未來展望｜Future"}
          bgImage={img_future}
          id="future"
          scrollMargin="150px"
        />
        <Container
          maxW={"8xl"}
          bg={useColorModeValue("gray.50", "gray.700")}
          py={150}
          centerContent
        >
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
            <Box
              bgImage={img_lonely}
              w={{ base: "80vw", md: "60vw", lg: "60vw" }}
              h={{ base: "400px", lg: "500px" }}
              bgRepeat={"no-repeat"}
              bgPosition={"center"}
              bgSize={"cover"}
            />
          </Stack>
        </Container>

        <Footer marginTop={0} />
      </Box>
    </>
  );
}

export default Autobiography;
