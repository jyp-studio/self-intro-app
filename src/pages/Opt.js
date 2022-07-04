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
            <Heading color="teal.50">心得:</Heading>
          </Box>
          <Box px="10vw" w="100vw">
            <Text fontSize="xl" color="teal.100">
              &emsp;&emsp;在數週的設計思維工作坊中，我擔任
              <font color="red">組長</font>
              的職位，引領兩位組員分工合作完成這個遊戲。
              原先的工作分配為我做Tower和Enemy相關的動畫、運作模式和錨點選單等；另一位則是做選單以及遊戲介面；
              最後一位則是做Map與Potion相關運作方式。
              <br />
              &emsp;&emsp;然而，正當一切運作妥當時，遇到整個開發中
              <font color="red">最大的難題</font>
              ：其中有一位組員在快截止日期時，突然說他沒有學過程式，甚麼都沒做。
              因此，身為組長的我只好臨時改變工作分配，將較不需要coding的遊戲平衡與圖片蒐集交給他，
              而他原先所需做的Map和Potion則平分給其他人。所幸最後仍順利完成，並且被
              <strong>
                <u>教授點評進入選單、 遊戲流程與動畫做的很完善與順暢</u>
              </strong>
              。他稱讚我們是
              <strong>
                <font color="red">「遊戲整體最完整的。」</font>
              </strong>
              <br />
              &emsp;&emsp;雖然過程曲折，卻也讓我收穫許多。在整個工作坊期間，由於時間非常緊迫，提升我的抗壓性外，
              也因為上述意外，使我python能力也跟著增強。除此之外，
              <font color="red">我學到最重要的是畫UML的重要性。</font>
              以往我們coding時，時常注意的是語法以及效率。然而
              <strong>
                <u>
                  在大型企劃，數萬行的程式碼中，語法和效率只是基本，更重要的是架構
                </u>
              </strong>
              。舉例來說，當開發一個鳥的class，可能很理所當然的新增名字、種類等屬性，並新增fly的method來描述飛行方式。
              然而這時卻很容易使得日後開發遇到窘境，因為企鵝和鴕鳥不會飛。這便是一個簡單的例子來闡述架構、格局的重要性。
              <br />
              &emsp;&emsp;同時，
              <strong>
                <u>
                  學習使用一些design pattern也使架構更加明確，開發時也更加方便
                </u>
              </strong>
              。如使用obsever pattern在user
              requests時，當要新增觸發事件時，只要新增一個class寫功能，
              再到controller中新增這個class就完成了。不必到每個程式碼中新增或修改變數，省去許多繁瑣步驟。
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
