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
} from "@chakra-ui/react";
import img_design from "../assets/pencil.png";
import img_uml from "../assets/uml.png";
import img_tool from "../assets/gear.png";
import img_idea from "../assets/lamp.png";
import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
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
  BsAwardFill,
} from "react-icons/bs";

function VR() {
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
      text: "Magic VR, Python, Linux, Blender, Cinema 4D",
      bg: "teal.200",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "將VR的應用範圍拓展到教育上",
      bg: "teal.200",
    },
    {
      icon: BsAwardFill,
      title: "獲得補助",
      text: "科技部大專生計畫(MOST) & 成大工學院補助",
      bg: "teal.200",
    },
  ];

  return (
    <>
      <Navbar />

      <Sidebar linkItems={LinkItems} />

      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        <Container maxW={"8xl"} py="3" centerContent>
          <Heading marginTop={"85"} fontSize={"10vw"} color="teal.300" py="5">
            VR
          </Heading>

          <Box py="10">
            <Heading scrollMargin="100px" id="abstract">
              Abstract:
            </Heading>
          </Box>
          <Box>
            <Text fontSize="2xl">
              <AbstractText />
            </Text>
          </Box>
          <Flex flexWrap="wrap" py="10">
            {IconBoxItems.map((item) => (
              <WrapItem py="1">
                <IconBox
                  iconBoxSize={{ base: "3em", md: "3em", lg: "5vw" }}
                  textBoxSize={{ base: "50vw", md: "50vw", lg: "17vw" }}
                  textSize={{ base: "sm", md: "lg", lg: "lg" }}
                  textColor={"teal.400"}
                  {...item}
                />
              </WrapItem>
            ))}
          </Flex>

          <Box py="10">
            <Heading scrollMargin="100px" id="trailer">
              Trailer:
            </Heading>
          </Box>
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

          <Box py="10">
            <Heading scrollMargin="100px" id="architecture">
              Architecture:
            </Heading>
          </Box>

          <Box
            bg="teal.50"
            boxShadow="dark-lg"
            borderRadius="2xl"
            w={{ base: "90vw", md: "70vw", lg: "70vw" }}
          >
            <Image src={img_uml} p={{ base: "2", md: "5", lg: "8" }} />
          </Box>

          <Box py="10">
            <Heading scrollMargin="100px" id="thoughts">
              Thoughts:
            </Heading>
          </Box>
          <Box>
            <Text fontSize="xl">
              &emsp;&emsp;在數週的設計思維工作坊中，我擔任
              <Text as="font" color="red">
                組長
              </Text>
              的職位，引領兩位組員分工合作完成這個遊戲。
              原先的工作分配為我做Tower和Enemy相關的動畫、運作模式和錨點選單等；另一位則是做選單以及遊戲介面；
              最後一位則是做Map與Potion相關運作方式。
              <br />
              &emsp;&emsp;然而，正當一切運作妥當時，遇到整個開發中
              <Text as="font" color="red">
                最大的難題
              </Text>
              ：其中有一位組員在快截止日期時，突然說他沒有學過程式，甚麼都沒做。
              因此，身為組長的我只好臨時改變工作分配，將較不需要coding的遊戲平衡與圖片蒐集交給他，
              而他原先所需做的Map和Potion則平分給其他人。所幸最後仍順利完成，並且被
              <Text as="strong" textDecoration="underline">
                教授點評進入選單、 遊戲流程與動畫做的很完善與順暢
              </Text>
              。他稱讚我們是
              <Text as="strong" color="red">
                「遊戲整體最完整的。」
              </Text>
              <br />
              &emsp;&emsp;雖然過程曲折，卻也讓我收穫許多。在整個工作坊期間，由於時間非常緊迫，提升我的抗壓性外，
              也因為上述意外，使我python能力也跟著增強。除此之外，
              <Text as="font" color="red">
                我學到最重要的是畫UML的重要性。
              </Text>
              以往我們coding時，時常注意的是語法以及效率。然而
              <Text as="strong" textDecoration="underline">
                在大型企劃，數萬行的程式碼中，語法和效率只是基本，更重要的是架構
              </Text>
              。舉例來說，當開發一個鳥的class，可能很理所當然的新增名字、種類等屬性，並新增fly的method來描述飛行方式。
              然而這時卻很容易使得日後開發遇到窘境，因為企鵝和鴕鳥不會飛。這便是一個簡單的例子來闡述架構、格局的重要性。
              <br />
              &emsp;&emsp;同時，
              <Text as="strong" textDecoration="underline">
                學習使用一些design pattern也使架構更加明確，開發時也更加方便
              </Text>
              。如使用obsever pattern在user
              requests時，當要新增觸發事件時，只要新增一個class寫功能，
              再到controller中新增這個class就完成了。不必到每個程式碼中新增或修改變數，省去許多繁瑣步驟。
            </Text>
          </Box>

          <Box px="10vw" py="10">
            <Heading scrollMargin="100px" id="demo">
              Demo:
            </Heading>
          </Box>

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
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default VR;

const AbstractText = () => {
  return (
    <>
      &emsp;&emsp;虛擬實境，英文名為Virtual
      Reality，簡稱VR，為現代帶來許多創造性與便利性。
      VR的應用相當廣泛，如在娛樂方面有VR電影與遊戲，讓使用者可以體驗身歷其境的冒險；在培訓方面有醫療、防災與機台模擬等，
      使學習者能有效學習技能。然而，對於在教育方面的應用卻是少之又少。因此，本研究決定將VR應用在教育上，探討虛擬實境對學生參與度的影響。
      <br />
      &emsp;&emsp;本研究使用哈瑪星科技的虛擬實境編輯器(Magic
      VR)輔以Python、Linux、Blender與Cinema
      4D來設計樹莓派應用於虛擬實境中，並將實驗對象分成實驗組與對照組，
      分別使用虛擬環境和實體簡報學習，並以前後測來取得實驗成效。
      <br />
      &emsp;&emsp;目前本研究已獲得科技部大專生計畫(MOST)與成大工學院補助。
    </>
  );
};
