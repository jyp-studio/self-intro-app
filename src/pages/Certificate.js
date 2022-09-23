import {
  Box,
  Flex,
  Container,
  Stack,
  Heading,
  useColorModeValue,
  Divider,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import {
  FiHome,
  FiAward,
  FiBookOpen,
  FiBookmark,
  FiUser,
} from "react-icons/fi";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import CertificateModal from "../components/CertificateModal";

import img_bg from "../assets/bg_certificate.jpg";
import img_cped_teacher0 from "../assets/cped_teacher0.jpg";
import img_cped_teacher from "../assets/cped_teacher.jpg";
import img_php_course from "../assets/php_course.jpg";
import img_pygame_course from "../assets/pygame_course.jpg";
import img_gept from "../assets/gept.jpg";
import img_numerical_method from "../assets/numerical_method_course.jpg";
import img_ur_competition from "../assets/ur_competition.png";
import img_ur_voting from "../assets/ur_voting.png";

function Certificate() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: <FiHome />, href: "#" },
    { name: "Competition", icon: <FiAward />, href: "#competition" },
    { name: "GEPT", icon: <FiBookmark />, href: "#gept" },
    { name: "Course", icon: <FiBookOpen />, href: "#course" },
    { name: "Lecture", icon: <FiUser />, href: "#lecture" },
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
          mainColor={"blue.400"}
          mainTitle={"證書"}
          subColor={"blue.200"}
          subTitle={"參賽證書、英文檢定、修課證書、和演講證書"}
        />
        <Container maxW={"5xl"} centerContent>
          <Stack spacing={100} mt={"100"} w={"full"} textAlign={"center"}>
            <Box px={{ base: 5, md: 10, lg: 20 }}>
              <Box
                px={5}
                bgColor={useColorModeValue("gray.50", "gray.700")}
                rounded={"xl"}
                boxShadow={"sm"}
              >
                <TableContainer>
                  <Table variant="simple">
                    <TableCaption
                      placement="top"
                      fontSize={"xl"}
                      fontWeight={"bold"}
                    >
                      證書一覽表
                    </TableCaption>
                    <Tbody>
                      <Tr>
                        <Td fontWeight={"bold"}>參賽證明</Td>
                        <Td>成大專題海報競賽 - 研究獎</Td>
                        <Td isNumeric>第二名</Td>
                      </Tr>
                      <Tr>
                        <Td></Td>
                        <Td>成大專題海報競賽 - 人氣獎</Td>
                        <Td isNumeric>投票中</Td>
                      </Tr>
                      <Tr>
                        <Td></Td>
                        <Td>成大工科專題競賽</Td>
                        <Td isNumeric>投票中</Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={"bold"}>英文檢定</Td>
                        <Td>GEPT中高級</Td>
                        <Td isNumeric>通過</Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={"bold"}>修課證書</Td>
                        <Td>Python遊戲設計結業證書</Td>
                        <Td isNumeric>完成</Td>
                      </Tr>
                      <Tr>
                        <Td></Td>
                        <Td>數值工作坊結業證書</Td>
                        <Td isNumeric>完成</Td>
                      </Tr>
                      <Tr>
                        <Td></Td>
                        <Td>PHP {"&"} MySQL結業證書</Td>
                        <Td isNumeric>完成</Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={"bold"}>演講證書</Td>
                        <Td>2021 營隊講師</Td>
                        <Td isNumeric>完成</Td>
                      </Tr>
                      <Tr>
                        <Td></Td>
                        <Td>2022 營隊講師</Td>
                        <Td isNumeric>完成</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>

            <Stack spacing={10}>
              <Heading
                id="competition"
                scrollMargin={100}
                justify={"space-around"}
              >
                參賽證明
              </Heading>
              <VStack spacing={20}>
                <VStack spacing={5}>
                  <Image
                    w={{ base: "90vw", md: "65vw", lg: "800px" }}
                    src={img_ur_competition}
                    shadow={"lg"}
                  />
                  <Text fontSize={"xl"}>
                    成大專題海報競賽 - 研究獎 第二名{" "}
                    <Link
                      fontWeight={"bold"}
                      color={"teal.400"}
                      href="https://ur.ncku.edu.tw/news/11年大學生海報競賽得獎名單公告/"
                      isExternal
                    >
                      #
                    </Link>
                  </Text>
                  <Text color={useColorModeValue("gray.400", "gray.500")}>
                    11月時才會頒獎與獲得證書
                  </Text>
                </VStack>
                <VStack spacing={5}>
                  <Image
                    w={{ base: "90vw", md: "65vw", lg: "800px" }}
                    src={img_ur_voting}
                    shadow={"lg"}
                    rounded={"xl"}
                  />
                  <Text fontSize={"xl"}>
                    成大專題海報競賽 - 人氣獎{" "}
                    <Link
                      fontWeight={"bold"}
                      color={"teal.400"}
                      href="https://ur.ncku.edu.tw/book/%E6%8E%A2%E8%A8%8E%E6%83%85%E5%A2%83%E6%A8%A1%E6%93%AC%E5%AD%B8%E7%BF%92%E8%9E%8D%E5%85%A5%E8%99%9B%E6%93%AC%E5%AF%A6%E5%A2%83%E5%B0%8D%E5%AD%B8%E7%94%9F%E5%AD%B8%E7%BF%92%E8%A1%A8%E7%8F%BE%E8%88%87%E5%8F%83%E8%88%87%E5%BA%A6%E4%B9%8B%E5%BD%B1%E9%9F%BF/"
                      isExternal
                    >
                      #
                    </Link>
                  </Text>
                  <Text color={useColorModeValue("gray.400", "gray.500")}>
                    目前還在投票環節
                  </Text>
                </VStack>
              </VStack>
            </Stack>
            <Divider />

            <Stack spacing={10}>
              <Heading id="gept" scrollMargin={100}>
                英文檢定
              </Heading>
              <Flex w={"full"} flexWrap={"wrap"} justify={"space-around"}>
                <CertificateModal
                  dir={"h"}
                  name={"GEPT 中高級證書"}
                  image={img_gept}
                />
              </Flex>
            </Stack>
            <Divider />

            <Stack spacing={10}>
              <Heading id="course" scrollMargin={100}>
                修課證書
              </Heading>
              <Flex
                w={"full"}
                flexWrap={"wrap"}
                justify={{ base: "center", md: "space-around" }}
              >
                <CertificateModal
                  dir={"v"}
                  name={"python遊戲設計結業證書"}
                  image={img_pygame_course}
                />
                <CertificateModal
                  dir={"v"}
                  name={"數值方法結業證書"}
                  image={img_numerical_method}
                />
                <CertificateModal
                  dir={"v"}
                  name={"PHP & MySQL結業證書"}
                  image={img_php_course}
                />
              </Flex>
            </Stack>
            <Divider />

            <Stack spacing={10}>
              <Heading id="lecture" scrollMargin={100}>
                演講證書
              </Heading>
              <Flex w={"full"} flexWrap={"wrap"} justify={"space-around"}>
                <CertificateModal
                  dir={"v"}
                  name={"2021營隊講師"}
                  image={img_cped_teacher0}
                />
                <CertificateModal
                  dir={"v"}
                  name={"2022營隊講師"}
                  image={img_cped_teacher}
                />
              </Flex>
            </Stack>
          </Stack>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default Certificate;
