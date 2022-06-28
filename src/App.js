import { ChakraProvider, Heading, Center } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Activity from "./pages/Activity";
import Main from "./pages/Main";
import SideProject from "./pages/SideProject";


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/side-project' element={<SideProject />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/*' element={<Center><Heading>404 Not found</Heading></Center>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
