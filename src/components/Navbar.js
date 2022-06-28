import NavDrawer from "./NavDrawer";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

function Navbar () {
    return (
        <nav className="nav">
            <Flex>
            <Box p='2'>
                <Heading size='md'>
                    <a href="/" className="site-title">JYP</a>
                </Heading>
            </Box>
            <Spacer />
            <Box p='2'>
                <NavDrawer />
            </Box>  
            </Flex>  
        </nav>
    )
}

export default Navbar;