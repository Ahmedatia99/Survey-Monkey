import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/comman/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/comman/Footer";

function App() {
  return (
    <>
      <ThemeProvider
        defaultTheme="light"
        storageKey="vite-ui-theme"
        className=""
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Signup />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
