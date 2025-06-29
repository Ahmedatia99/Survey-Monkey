import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/comman/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Feature from "./pages/Feature";
import Footer from "./components/comman/Footer";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Dashboard from "@/pages/Dashboard.jsx";
import RegisterPage from "@/pages/RegisterPage";
import Login from "./components/register/Login";
import Signup from "./components/register/Signup";

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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
