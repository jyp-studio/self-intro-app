import {
  Box,
  Heading,
  Image,
  VStack,
  AspectRatio,
  Divider,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import { FiHome, FiCompass, FiCommand, FiCheckSquare } from "react-icons/fi";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import img_resume from "../assets/resume.png";
import img_rank from "../assets/rank.jpg";

import pdf_score from "../assets/score.pdf";

function Resume() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: <FiHome />, href: "#" },
    { name: "簡歷", icon: <FiCompass />, href: "#resume" },
    { name: "成績單", icon: <FiCheckSquare />, href: "#score" },
    { name: "名次證明", icon: <FiCommand />, href: "#rank" },
  ];

  return (
    <>
      <Navbar />
      <Sidebar linkItems={LinkItems} />
      <Box marginLeft={{ base: "0", md: "240px", lg: "240px" }}>
        <Center>
          <VStack spacing={100} maxW={"6xl"} justify={"center"}>
            {/* resume */}
            <Heading
              mt={150}
              id="resume"
              scrollMargin={150}
              fontFamily={`"Open Sans", sans-serif`}
              fontSize={"6xl"}
            >
              個人簡歷表
            </Heading>
            <Skeleton isLoaded>
              <Image src={img_resume} w={{ base: "90vw", md: "60vw" }} />
            </Skeleton>

            <Box py={50} w={"full"}>
              <Divider />
            </Box>

            {/* score */}
            <Heading
              id="score"
              scrollMargin={150}
              fontFamily={`"Open Sans", sans-serif`}
              fontSize={"6xl"}
            >
              歷年成績單
            </Heading>
            <Skeleton isLoaded>
              <AspectRatio w={{ base: "90vw", lg: "60vw" }} ratio={3 / 4.5}>
                <iframe
                  title="score pdf"
                  src={pdf_score}
                  position="absolute"
                  width={"100%"}
                  height={"100%"}
                  allow="autoplay"
                />
              </AspectRatio>
            </Skeleton>

            <Box py={50} w={"full"}>
              <Divider />
            </Box>

            {/* rank */}
            <Heading
              mt={150}
              id="rank"
              scrollMargin={150}
              fontFamily={`"Open Sans", sans-serif`}
              fontSize={"6xl"}
            >
              名次證明
            </Heading>
            <Skeleton isLoaded>
              <Image src={img_rank} w={{ base: "90vw", md: "60vw" }} />
            </Skeleton>
          </VStack>
        </Center>
        <Footer />
      </Box>
    </>
  );
}

export default Resume;
