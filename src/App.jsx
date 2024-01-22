import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/blog" exact element={<BlogPage />} />
          <Route path="/service" exact element={<ServicePage />} />
        </Routes>
      </Router>
    </div>
  );
}
