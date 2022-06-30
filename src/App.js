import { ChakraProvider, Heading, Center, Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Activity from "./pages/Activity";
import Certificate from "./pages/Certificate";
import Main from "./pages/Main";
import SideProject from "./pages/SideProject";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Box w="100%" h="100px"></Box>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/side-project" element={<SideProject />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route
            path="/*"
            element={
              <Center>
                <Heading>404 Not found</Heading>
              </Center>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
