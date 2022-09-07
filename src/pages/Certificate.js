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

function Certificate() {
  // Sidebar link items
  const LinkItems = [
    { name: "Home", icon: FiHome, href: "#" },
    { name: "Competition", icon: FiAward, href: "#competition" },
    { name: "GEPT", icon: FiBookmark, href: "#gept" },
    { name: "Course", icon: FiBookOpen, href: "#course" },
    { name: "Lecture", icon: FiUser, href: "#lecture" },
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
                        <Td>成大專題海報競賽</Td>
                        <Td isNumeric>第二名</Td>
                      </Tr>
                      <Tr>
                        <Td></Td>
                        <Td>成大工科專題競賽</Td>
                        <Td isNumeric>第一名</Td>
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
