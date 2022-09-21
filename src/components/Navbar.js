import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" position="fixed" w={"100%"} zIndex="200">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          px={2}
        >
          <Text
            as={Link}
            to="/"
            onClick={() => window.scrollTo({ top: 0 })}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            JYP
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default Navbar;

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <ChakraLink
                as={Link}
                p={2}
                to={navItem.pcHref}
                onClick={() => window.scrollTo({ top: 0 })}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </ChakraLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = (props) => {
  return (
    <ChakraLink
      as={Link}
      to={props.href ?? "#"}
      onClick={() => window.scrollTo({ top: 0 })}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("teal.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: useColorModeValue("teal.400", "teal.300") }}
            fontWeight={500}
          >
            {props.label}
          </Text>
          <Text fontSize={"sm"}>{props.subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            color={useColorModeValue("teal.400", "teal.300")}
            w={5}
            h={5}
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </ChakraLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={props.children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={props.href ?? "#"}
        onClick={() => props.href && window.scrollTo({ top: 0 })}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {props.label}
        </Text>
        {props.children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {props.children &&
            props.children.map((child) => (
              <ChakraLink
                as={Link}
                key={child.label}
                py={2}
                to={child.href}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                {child.label}
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Autobiography",
    pcHref: "/autobiography",
    children: [
      {
        label: "Resume",
        subLabel:
          "A quick look at my learning experiences, competitions, and projects.",
        href: "/resume",
      },
      {
        label: "Autobiography",
        subLabel:
          "A closer look at my growth background, learning process, and future prospects.",
        href: "/autobiography",
      },
    ],
  },
  {
    label: "Project",
    pcHref: "/project",
    children: [
      {
        label: "Tower Defense",
        subLabel:
          "A game developed by python-pygame with MVC and Obsever pattern.",
        href: "/project/tower-defense/",
      },
      {
        label: "Digi+ Talent Internship",
        subLabel:
          "Collaborate with people from different fields to make projects.",
        href: "/project/digi",
      },
      {
        label: "VR Project",
        subLabel:
          "Undergraduate research fellowship, Ministry of Science and Technology （MOST), Taiwan.",
        href: "/project/vr",
      },
      {
        label: "Stock Backtesting",
        subLabel:
          "Using Numerical Methods to Optimize Stock Investment Strategies.",
        href: "/project/opt",
      },
      {
        label: "In Progress",
        subLabel:
          "Projects currently under development, including image detection, gait prediction, and Unity games.",
        href: "/project/in-progress",
      },
      {
        label: "Side Project",
        subLabel:
          "Projects made when learning Unity, JavaScript, Home Assistant, etc.",
        href: "/project/side-project",
      },
    ],
  },
  {
    label: "Activity",
    pcHref: "/activity",
    href: "/activity",
  },
  {
    label: "Certificates",
    pcHref: "/certificate",
    href: "/certificate",
  },
];
