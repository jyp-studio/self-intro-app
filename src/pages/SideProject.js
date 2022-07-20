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
import img_uml from "../assets/uml.png";
import IconBox from "../components/IconBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { FaUnity } from "react-icons/fa";
import { FiHome, FiLayout, FiMusic, FiSmartphone } from "react-icons/fi";
import {
  BsGearFill,
  BsLightbulbFill,
  BsPinAngleFill,
  BsPenFill,
} from "react-icons/bs";

function SideProject() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Unity Flappy Bird", icon: FaUnity, href: "#flappy-bird" },
    { name: "Home Assistant", icon: FiSmartphone, href: "#ha" },
    { name: "React App", icon: FiLayout, href: "#react" },
    { name: "Music Player", icon: FiMusic, href: "#mp" },
  ];
  // Icon box infomation
  const IconBoxItems = [
    {
      icon: BsGearFill,
      title: "Tool",
      text: "Python, pygame module, git",
      bg: "teal.200",
    },
    {
      icon: BsPenFill,
      title: "Design Pattern",
      text: "MVC & Observer pattern",
      bg: "teal.200",
    },
    {
      icon: BsLightbulbFill,
      title: "設計理念",
      text: "用遊戲的方式來告訴大眾Covid-19的危險性",
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
            Side Project
          </Heading>

          <Box>
            <Text fontSize="2xl">
              &emsp;&emsp;我很喜歡學習各項新知識與技術，而這些是我學習各項技術時，嘗試動手做出的專案！
            </Text>
          </Box>

          {/* Unity Flappy Bird */}
          <Box py="10" w={"full"} id={"flappy-bird"}>
            <Heading scrollMargin="100px" id="architecture">
              Unity Flappy Bird
            </Heading>
          </Box>

          {/* Home Assistant */}
          <Box py="10" w={"full"} id={"ha"}>
            <Heading scrollMargin="100px" id="architecture">
              Home Assistant
            </Heading>
          </Box>

          {/* React app */}
          <Box py="10" w={"full"} id={"react"}>
            <Heading scrollMargin="100px" id="architecture">
              React app
            </Heading>
          </Box>

          {/* Music Player */}
          <Box py="10" w={"full"} id={"mp"}>
            <Heading scrollMargin="100px" id="architecture">
              Music Player
            </Heading>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default SideProject;
