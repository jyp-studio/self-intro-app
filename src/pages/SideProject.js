import {
  Box,
  Center,
  Flex,
  Text,
  Button,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img_flappy from "../assets/flappy.png";
import img_tower from "../assets/tower.png";
import img_vr from "../assets/vr.png";
import img_stock from "../assets/stock.png";
import img_verilog from "../assets/verilog1.png";
import img_hobby from "../assets/hobby.png";

function SideProject() {
  return (
    <div>
      <Flex flexWrap="wrap" w="100vw" justify="center">
        <Box p="2">
          <Link to="/side-project/tower-defense">
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
          <Link to="/side-project/opt">
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
          <Link to="/side-project/vr">
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
      </Flex>
      <Flex flexWrap="wrap" w="100vw" justify="center">
        <Box p="2">
          <Link to="/side-project/hobbies">
            <Image
              p="2"
              w="250px"
              bg="black"
              borderRadius="lg"
              src={img_hobby}
              alt="個人興趣"
              boxShadow="xl"
            />
          </Link>
          <Center>
            <Text fontSize="xl">個人興趣</Text>
          </Center>
        </Box>
        <Box p="2">
          <Link to="/side-project/pollution-model">
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
          <Link to="/side-project/flappy-bird">
            <Image
              p="2"
              bg="blackAlpha.100"
              w="250px"
              borderRadius="lg"
              src={img_flappy}
              alt="flappy bird game"
              boxShadow="xl"
            />
          </Link>
          <Center>
            <Text fontSize="xl">Unity Flappy Bird</Text>
          </Center>
        </Box>
      </Flex>
    </div>
  );
}

export default SideProject;
