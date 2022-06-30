import { Image, Box, Center, Flex, Text } from "@chakra-ui/react";
import img_cped_teacher from "../assets/cped_teacher.jpg";
import img_gept from "../assets/gept.jpg";

function Certificate() {
  return (
    <div>
      <Flex flexWrap="wrap" w="100vw" justify="center">
        <Box p="2" w="sm">
          <Image
            borderRadius="lg"
            src={img_gept}
            alt="GEPT中高級通過證書"
            boxShadow="xl"
          />
          <Center>
            <Text fontSize="xl">GEPT中高級通過證書</Text>
          </Center>
        </Box>
        <Box p="2" w="20em">
          <Image
            borderRadius="lg"
            src={img_cped_teacher}
            alt="中友科系探索營講師證書"
            boxShadow="xl"
          />
          <Center>
            <Text fontSize="xl">中友科系探索營講師證書</Text>
          </Center>
        </Box>
      </Flex>
    </div>
  );
}

export default Certificate;
