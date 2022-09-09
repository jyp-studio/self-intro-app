import { useState } from "react";
import {
  Box,
  IconButton,
  Heading,
  Text,
  Container,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Settings for the carousel
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function TitleCarousel(props) {
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <Box
      position={"relative"}
      height={props.h ?? "600px"}
      width={props.w ?? "full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        color={"whiteAlpha.800"}
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        _hover={{ textDecoration: "none", color: "white" }}
      >
        <FiChevronLeft size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        color={"whiteAlpha.800"}
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        _hover={{ textDecoration: "none", color: "white" }}
      >
        <FiChevronRight size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {props.cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={card.bgSize ?? "cover"}
            backgroundImage={card.image}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
                backdropFilter="auto"
                backdropBlur={card.blur ?? "4px"}
                backdropBrightness={card.brightness ?? "100%"}
                alignItems={"center"}
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  fontWeight={"bolder"}
                  color={card.mainColor ?? "white"}
                >
                  {card.mainTitle}
                </Heading>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color={card.subColor ?? "gray.300"}
                >
                  {card.subTitle}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default TitleCarousel;
