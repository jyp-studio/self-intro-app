import { Box, Center, Image, Heading, Text } from "@chakra-ui/react";

function IconBox(props) {
  const detailBoxStyle = {
    bg: "teal.200",
    borderRadius: "lg",
    p: "2",
    boxShadow: "dark-lg",
    boxSize: { base: "3em", md: "6vw", lg: "6vw" },
  };
  const textBoxStyle = {
    px: "4",
    w: { base: "70vw", md: "20vw", lg: "20vw" },
  };
  const headingStyle = {
    fontSize: { base: "sm", md: "xl", lg: "xl" },
    color: { base: "teal.900", md: "teal.600", lg: "teal.400" },
  };

  const textStyle = {
    fontSize: { base: "sm", md: "xl", lg: "xl" },
    color: { base: "teal.900", md: "teal.600", lg: "teal.400" },
  };

  return (
    <>
      <Box>
        <Center>
          <Box sx={detailBoxStyle}>
            <Image src={props.image} />
          </Box>
        </Center>
      </Box>
      <Center>
        <Box sx={textBoxStyle}>
          <Heading sx={headingStyle}>{props.title}</Heading>
          <Text sx={textStyle}>{props.text}</Text>
        </Box>
      </Center>
    </>
  );
}

export default IconBox;
