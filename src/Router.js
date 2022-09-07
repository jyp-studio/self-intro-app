import { BrowserRouter, Route, Routes } from "react-router-dom";

import Activity from "./pages/Activity";
import Certificate from "./pages/Certificate";
import Main from "./pages/Main";
import Autobiography from "./pages/Autobiography";
import Project from "./pages/Project";
import SideProject from "./pages/SideProject";
import TowerDefense from "./pages/TowerDefense";
import Digi from "./pages/Digi";
import VR from "./pages/VR";
import Opt from "./pages/Opt";
import PollutionModel from "./pages/PollutionModel";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/autobiography" element={<Autobiography />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/tower-defense" element={<TowerDefense />} />
        <Route path="/project/digi" element={<Digi />} />
        <Route path="/project/vr" element={<VR />} />
        <Route path="/project/opt" element={<Opt />} />
        <Route path="/project/pollution-model" element={<PollutionModel />} />
        <Route path="/project/side-project" element={<SideProject />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/" element={<Main />}>
            <Route path="project" element={<Project />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
