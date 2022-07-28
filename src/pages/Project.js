import {
  Box,
  Center,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img_digi from "../assets/digi.png";
import img_tower from "../assets/tower.png";
import img_vr from "../assets/vr.png";
import img_stock from "../assets/stock.png";
import img_verilog from "../assets/verilog.png";
import img_hobby from "../assets/hobby.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Project() {
  const projectList = [
    {
      href: "/project/tower-defense",
      bg: "teal.100",
      img: img_tower,
      alt: "塔防遊戲",
      title: "Python塔防遊戲",
    },
    {
      href: "/project/digi",
      bg: useColorModeValue("blackAlpha.100", "whiteAlpha.900"),
      img: img_digi,
      alt: "digi實習",
      title: "DIGI+ Talent實習",
    },
    {
      href: "/project/vr",
      bg: "teal.50",
      img: img_vr,
      alt: "vr project",
      title: "VR專題",
    },
    {
      href: "/project/opt",
      bg: useColorModeValue("blackAlpha.800", "whiteAlpha.200"),
      img: img_stock,
      alt: "數值最佳化股市投資",
      title: "數值最佳化投資",
    },
    {
      href: "/project/pollution-model",
      bg: "teal.300",
      img: img_verilog,
      alt: "汙染擴散模型",
      title: "汙染擴散模型",
    },
    {
      href: "/project/side-project",
      bg: useColorModeValue("blackAlpha.900", "whiteAlpha.50"),
      img: img_hobby,
      alt: "Side Project",
      title: "Side Project",
    },
  ];

  return (
    <>
      <Navbar />
      <Container maxW={"9xl"} py="3" centerContent>
        <Flex
          marginTop={"85"}
          flexWrap="wrap"
          w="full"
          justify="center"
          px={{ md: "12vw", lg: "22vw" }}
        >
          {projectList.map((project) => (
            <Card
              key={project.title}
              href={project.href}
              bg={project.bg}
              img={project.img}
              alt={project.alt}
              title={project.title}
            />
          ))}
        </Flex>
      </Container>

      <Footer />
    </>
  );
}

export default Project;

const Card = (props) => {
  return (
    <Box p="2">
      <Link to={props.href}>
        <Image
          p="2"
          bg={props.bg}
          w="250px"
          borderRadius="lg"
          src={props.img}
          alt={props.alt}
          boxShadow="xl"
        />
      </Link>
      <Center>
        <Text fontSize="2xl">{props.title}</Text>
      </Center>
    </Box>
  );
};

const ProjectItems = [];
