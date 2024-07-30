import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Travailleur from "./pages/Travailleur/Travailleur";
import Employeur from "./pages/Employeur/Employeur";
import Beneficiaire from "./pages/Beneficiaire/Beneficiaire";
import Controlleur from "./pages/Controlleur/Controlleur";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employeur" element={<Employeur />} />
        <Route path="/travailleur" element={<Travailleur />} />
        <Route path="/beneficiaire" element={<Beneficiaire />} />
        <Route path="/controlleur" element={<Controlleur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
