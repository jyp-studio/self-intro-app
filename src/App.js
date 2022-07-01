import { ChakraProvider, Heading, Center, Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Activity from "./pages/Activity";
import Certificate from "./pages/Certificate";
import Main from "./pages/Main";
import SideProject from "./pages/SideProject";
import TowerDefense from "./pages/TowerDefense";
import FlappyBird from "./pages/FlappyBird";
import VR from "./pages/VR";
import Opt from "./pages/Opt";
import PollutionModel from "./pages/PollutionModel";
import Hobbies from "./pages/Hobbies";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Box w="100%" h="84px"></Box>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/side-project" element={<SideProject />} />
          <Route
            path="/side-project/tower-defense"
            element={<TowerDefense />}
          />
          <Route path="/side-project/flappy-bird" element={<FlappyBird />} />
          <Route path="/side-project/vr" element={<VR />} />
          <Route path="/side-project/opt" element={<Opt />} />
          <Route
            path="/side-project/pollution-model"
            element={<PollutionModel />}
          />
          <Route path="/side-project/hobbies" element={<Hobbies />} />
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
