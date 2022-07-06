import {
  Box,
  Center,
  Flex,
  Text,
  Image,
  Heading,
  AspectRatio,
  WrapItem,
} from "@chakra-ui/react";
import img_bg from "../assets/background_pc.jpg";
import img_design from "../assets/pencil.png";
import img_uml from "../assets/uml.png";
import img_tool from "../assets/gear.png";
import img_idea from "../assets/lamp.png";

function VR() {
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
        bgColor="teal.600"
        bgImg={img_bg}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Center>
          <Heading
            fontSize={{ base: "50", md: "100", lg: "150" }}
            color="teal.300"
            p="5"
          >
            VR
          </Heading>
        </Center>
        <Box px="10vw" py="10">
          <Heading color="black">摘要:</Heading>
        </Box>
        <Box px="10vw" w="100vw">
          <Text fontSize="xl">
            &emsp;&emsp;2019年，Covid-19突然大流行造成許多人死亡。然而，部分大眾卻仍對其抱持懷疑與不信的態度。
            <Text as="strong" textDecoration="underline">
              為了讓民眾了解Covid-19的危險性
            </Text>
            。因此決定以
            <Text as="strong" color="teal.400">
              衛教的核心思想設計塔防遊戲。
            </Text>
            玩家所要守護的家園即代表個人、家人與朋友的健康，而受病毒所感染的變種人類則試圖感染正常人類。
            <Text as="strong" textDecoration="underline">
              每一波的病毒都會越發增強代表著病毒的變種性與流行性
            </Text>
            。 期許大眾在遊玩遊戲之後能了解並更加重視Covid-19的危害。
            &emsp;&emsp;本遊戲使用
            <Text as="strong" color="teal.400">
              Python-pygame製作
            </Text>
            ，遊戲主要使用
            <Text as="strong" color="teal.400">
              MVC(Model-View-Controller)
            </Text>
            當做主架構， 玩家事件則是使用
            <Text as="strong" color="teal.400">
              observer pattern
            </Text>
            以方便增修觸發事件。
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
          <Heading color="black">Demo:</Heading>
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
    </div>
  );
}

export default VR;
