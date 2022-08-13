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
  HStack,
  Stack,
  Button,
  Center,
  Icon,
} from "@chakra-ui/react";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
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

import "@fontsource/open-sans";
import "@fontsource/nunito-sans";

import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Rating from "../components/Rating";

import img_uml from "../assets/uml.png";
import img_bg from "../assets/bg_digi.jpg";
import img_covid from "../assets/covid.jpg";
import img_miro from "../assets/miro.png";
import img_miro1 from "../assets/miro1.png";
import img_anime from "../assets/attack_anime.png";
import img_anime1 from "../assets/attack_anime1.png";
import img_distribution_chart from "../assets/work_distribution_chart.png";
import img_bg_sticky from "../assets/bg_sticky_note.jpg";
import img_problem from "../assets/problem.jpg";
import img_reward from "../assets/reward.jpg";
import img_bg_reward from "../assets/bg_reward.jpg";
import img_bg_problem from "../assets/bg_problem.jpg";

function Digi() {
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
      title: "課堂學習",
      text: "學習python、資料探勘、APP開發、UI/UX等",
    },
    {
      icon: BsLightbulbFill,
      title: "實務專題",
      text: "與中傑鞋業合作開發財務報表辨識系統",
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

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        {/* title banner */}
        <Title
          brightness={"50%"}
          image={img_bg}
          mainColor={"yellow.400"}
          mainTitle={"Digi+ Talent 實習"}
          subColor={"orange.100"}
          subTitle={"與企業和跨領域人才合作共同製作專題"}
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
                iconColor={"gray.800"}
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
              參加動機{" "}
              <Text as={"span"} fontWeight={"thin"}>
                |
              </Text>{" "}
              Motivation
            </Heading>
            <Image src={img_covid} w={"full"} h={"400px"} fit={"cover"} />
            <Flex flexWrap={"wrap"} py="10" justify={"center"}>
              <Text
                fontFamily={`"Open Sans", sans-serif`}
                fontSize="xl"
                w={"full"}
                px={{ base: "5", md: "5", lg: "10" }}
                textAlign={"justify"}
              >
                &emsp;&emsp;有鑑於未來工作型態是與不同領域的人才共同合作，開發產品。
                為此，我決定參加工研院舉辦的Digi+
                Talent計畫來提早了解與不同領域的人才、企業，
                合作的形式，藉此學習團隊溝通、合作、與相關技術。
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
            <Box>
              <Heading
                fontFamily={`"Open Sans", sans-serif`}
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
            <Box marginTop={"200"} marginBottom={"150"}>
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
                bg="teal.50"
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
          <Image
            src={img_miro}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
          <HStack
            py={"50"}
            marginTop={"50"}
            flexWrap={"wrap"}
            w={"65vw"}
            justify={"center"}
            justifyContent={"space-around"}
          >
            <Image src={img_distribution_chart} w={"400px"} />
            <Text
              w={{ base: "80vw", lg: "30vw" }}
              px={{ base: "5", md: "30" }}
              py={{ base: "20" }}
              fontSize={"xl"}
              color={"gray.200"}
              fontFamily={`"Open Sans", sans-serif`}
              textAlign={"justify"}
            >
              &emsp;&emsp;在數週的設計思維工作坊中，我擔任
              <Text as={"span"} fontWeight={"bold"}>
                組長
              </Text>
              的職位，引領兩位組員藉由Miro便利貼的功能對新冠肺炎進行聯想與解構，並將其與塔防遊戲做結合。
            </Text>
          </HStack>
          <Image
            src={img_miro1}
            w={{ base: "95vw", md: "75vw" }}
            px={{ base: "5", md: "50" }}
          />
        </VStack>

        {/* 2. facing problem */}
        <Banner
          title={"遇到困難"}
          bgImage={img_bg_problem}
          brightness={"80%"}
        />
        <Box
          bg={useColorModeValue("gray.50", "blackAlpha.500")}
          w={"full"}
          py={"200"}
        >
          <Container maxW={"8xl"} py="3" centerContent>
            <Flex
              flexWrap={"wrap"}
              w={"full"}
              justify={"center"}
              justifyContent={"space-around"}
            >
              {/* image of facing problem */}
              <Box
                bgImage={img_problem}
                w={{ base: "80vw", md: "60vw", lg: "30vw" }}
                h={"400px"}
                bgRepeat={"no-repeat"}
                bgPosition={"center"}
                bgSize={"cover"}
              />
              <Text
                mt={{ base: "100", lg: "0" }}
                w={{ base: "80vw", md: "60vw", lg: "30vw" }}
                fontSize="xl"
                textAlign={"justify"}
                fontFamily={`"Open Sans", sans-serif`}
              >
                &emsp;&emsp;開發過程中，遇到最大的問題是塔攻擊的動畫與造成實際傷害的時間不同，相信這是普遍遊戲都會遇到的困難之處。
                {""}
                原先我們採取的是動畫出現時即造成傷害，如此是最簡單做法，卻不是最美觀的做法。
                {""}
                因此，我們嘗試讓傷害出現在動畫之後，然而這衍生的問題是在動畫的過程中，若敵人跑出攻擊範圍或死亡的話，那該如何？
                {""}
                經過一晚的討論，我們最後決定使用兩個counter，分別計算動畫和攻擊冷卻時間來達成效果，而效果也如預期般的好。
              </Text>
            </Flex>
            <Flex
              w={"full"}
              flexWrap={"wrap"}
              justify={"center"}
              marginTop={"200"}
              justifyContent={"space-around"}
            >
              {/* 1. Box of explaining animation and damage */}
              {/* background */}
              <Box
                w={{ base: "80vw", md: "60vw", lg: "550px" }}
                h={{ base: "60vw", md: "45vw", lg: "400px" }}
                bgColor={"gray.100"}
                rounded={"2xl"}
                shadow={"lg"}
                justify={"center"}
              >
                {/* heading banner */}
                <Box
                  bgColor={"black"}
                  w={"full"}
                  h={"80px"}
                  textAlign={"center"}
                  roundedTop={"2xl"}
                >
                  {/* heading */}
                  <HStack
                    h={"full"}
                    spacing={"5"}
                    justify={"center"}
                    alignItems={"center"}
                  >
                    <Heading
                      color={"white"}
                      fontSize={{ base: "2xl", md: "auto", lg: "4xl" }}
                    >
                      動畫和傷害同時發生
                    </Heading>
                    <CloseIcon boxSize={"30px"} color={"red"} />
                  </HStack>
                </Box>
                {/* image */}
                <Image src={img_anime} px={"10"} py={"5"} />
              </Box>

              {/* 2. Box of explaining animation and damage */}
              {/* background */}
              <Box
                mt={{ base: "20", md: "20", lg: "0" }}
                w={{ base: "80vw", md: "60vw", lg: "550px" }}
                h={{ base: "60vw", md: "45vw", lg: "400px" }}
                bgColor={"gray.100"}
                rounded={"2xl"}
                shadow={"lg"}
                justify={"center"}
              >
                {/* heading banner */}
                <Box
                  bgColor={"black"}
                  w={"full"}
                  h={"80px"}
                  textAlign={"center"}
                  roundedTop={"2xl"}
                >
                  {/* heading */}
                  <HStack
                    h={"full"}
                    spacing={"5"}
                    justify={"center"}
                    alignItems={"center"}
                  >
                    <Heading
                      color={"white"}
                      py={"4"}
                      fontSize={{ base: "2xl", md: "auto", lg: "4xl" }}
                    >
                      動畫後才讓傷害出現
                    </Heading>
                    <CheckIcon boxSize={"40px"} color={"green.300"} />
                  </HStack>
                </Box>
                {/* image */}
                <Image src={img_anime1} px={"10"} py={"5"} />
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* 3. gain */}
        <Banner title={"獲得收穫"} bgImage={img_bg_reward} brightness={"25%"} />
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
              px={{ base: "5", md: "10" }}
            >
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

export default Digi;
