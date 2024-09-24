import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    setIsDark((prevMode) => !prevMode);
    console.log("click")
  }
  return (
    <Router>
      <div className={`App ${isDark ? 'bg-slate-200' : 'dark:bg-slate-950'}`}>
        <Navbar isDarkMode={isDark} toggleDarkMode={toggleDarkMode}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
