import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./components/store/themeContext";

const LazyAbout = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

function Main() {
  const { isDark } = useTheme();
  return (
    <Router>
      <div className={`App ${isDark ? "bg-slate-200" : "dark:bg-slate-950"}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
