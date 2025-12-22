import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Home from "./pages/home";
import PolitiqueConfidentialite from "./pages/politiqueConfidentialite";
import CGV from "./pages/CGV";
import CGU from "./pages/CGU";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politiqueConfidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/CGV" element={<CGV />} />
          <Route path="/CGU" element={<CGU />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
