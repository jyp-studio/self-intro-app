import {
  Box,
  Image,
  Heading,
  Text,
  Wrap,
  Flex,
  Center,
} from "@chakra-ui/react";
import img_thanksgivening from "../assets/thanks_giving.jpg";
import img_guitarist from "../assets/guitarist.jpg";
import img_mc_all_spotlight from "../assets/mc_all_spotlight.jpg";
import img_mc_all from "../assets/mc_all.jpg";
import img_mc from "../assets/mc.jpg";
import img_speech from "../assets/speech.jpg";

function Activity() {
  return (
    <div className="activity">
      <Wrap justify="center">
        <Flex flexWrap="wrap" w="100vw" justify="center">
          <Center>
            <Box p="2" w="sm">
              <Heading>活動總召</Heading>
              <Text>感恩節活動時，擔任中友扒雞會總召</Text>
            </Box>
          </Center>
          <Box p="2" width={{ base: "sm", md: "md", lg: "lg" }}>
            <Image
              borderRadius="lg"
              src={img_thanksgivening}
              alt="感恩節活動照片"
              boxShadow="xl"
            />
          </Box>
        </Flex>
        <Flex
          flexWrap="wrap"
          flexDirection="row-reverse"
          w="100vw"
          justify="center"
        >
          <Center>
            <Box p="2" w="sm">
              <Heading>營隊講者</Heading>
              <Text>
                擔任兩次中友科系探索營的科系講者，負責介紹系所、準備歷程與讀書計畫等。
              </Text>
            </Box>
          </Center>
          <Box p="2" width={{ base: "sm", md: "md", lg: "lg" }}>
            <Image
              borderRadius="lg"
              src={img_speech}
              alt="演講狀況照片"
              boxShadow="xl"
            />
          </Box>
        </Flex>
        <Flex flexWrap="wrap" justify="center" w="100vw">
          <Center>
            <Box p="2" maxWidth="sm">
              <Heading>隊輔x表演</Heading>
              <Text>
                在兩次中友科系探索營中除了擔任講者外，同時也有擔任過隊輔，領導小隊員；
                擔任MC、樂團吉他手等。
              </Text>
            </Box>
          </Center>
          <Box p="2" width={{ base: "sm", md: "md", lg: "lg" }}>
            <Image
              borderRadius="lg"
              src={img_guitarist}
              alt="彈吉他照片"
              boxShadow="xl"
            />
          </Box>
          <Box p="2" width={{ base: "sm", md: "md", lg: "md" }}>
            <Image
              borderRadius="lg"
              src={img_mc_all}
              alt="MC表演大合照1"
              boxShadow="xl"
            />
          </Box>
          <Box p="2" width={{ base: "sm", md: "md", lg: "md" }}>
            <Image
              borderRadius="lg"
              src={img_mc_all_spotlight}
              alt="MC表演大合照2"
              boxShadow="xl"
            />
          </Box>
        </Flex>
      </Wrap>
    </div>
  );
}

export default Activity;
