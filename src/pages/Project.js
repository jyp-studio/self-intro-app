import { Box, Center, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img_digi from "../assets/digi.png";
import img_tower from "../assets/tower.png";
import img_vr from "../assets/vr.png";
import img_stock from "../assets/stock.png";
import img_verilog from "../assets/verilog.png";
import img_hobby from "../assets/hobby.png";

function Project() {
  return (
    <div>
      <Flex
        flexWrap="wrap"
        w="100vw"
        justify="center"
        px={{ md: "22vw", lg: "22vw" }}
      >
        <Box p="2">
          <Link to="/project/tower-defense">
            <Image
              p="2"
              bg="teal.100"
              w="250px"
              borderRadius="lg"
              src={img_tower}
              alt="塔防遊戲"
              boxShadow="xl"
            />
          </Link>
          <Center>
            <Text fontSize="xl">Python塔防遊戲</Text>
          </Center>
        </Box>

        <Box p="2">
          <Link to="/project/digi">
            <Image
              p="2"
              bg="blackAlpha.100"
              w="250px"
              borderRadius="lg"
              src={img_digi}
              alt="digi實習"
              boxShadow="xl"
            />
          </Link>
          <Center>
            <Text fontSize="xl">DIGI+ Talent實習</Text>
          </Center>
        </Box>

        <Box p="2">
          <Link to="/project/vr">
            <Image
              p="2"
              w="250px"
              bg="teal.50"
              borderRadius="lg"
              src={img_vr}
              alt="vr project"
              boxShadow="xl"
            />
          </Link>
          <Center>
            <Text fontSize="xl">VR專題</Text>
          </Center>
        </Box>

        <Box p="2">
          <Link to="/project/opt">
            <Image
              p="2"
              w="250px"
              bg="blackAlpha.800"
              borderRadius="lg"
              src={img_stock}
              alt="數值最佳化股市投資"
              boxShadow="xl"
            />
          </Link>
          <Center>
            <Text fontSize="xl">數值最佳化投資</Text>
          </Center>
        </Box>

        <Box p="2">
          <Link to="/project/pollution-model">
            <Image
              p="2"
              w="250px"
              bg="teal.300"
              borderRadius="lg"
              src={img_verilog}
              alt="汙染擴散模型"
              boxShadow="xl"
            />
          </Link>
          <Center>
            <Text fontSize="xl">汙染擴散模型</Text>
          </Center>
        </Box>

        <Box p="2">
          <Link to="/project/side-project">
            <Image
              p="2"
              w="250px"
              bg="black"
              borderRadius="lg"
              src={img_hobby}
              alt="Side Project"
              boxShadow="xl"
            />
          </Link>
          <Center>
            <Text fontSize="xl">Side Project</Text>
          </Center>
        </Box>
      </Flex>
    </div>
  );
}

export default Project;
