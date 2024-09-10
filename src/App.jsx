import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./component/homepage/HomePage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AboutUs from "./component/aboutus/AboutUs";
import ServicesPage from "./component/servicespage/ServicesPage";
import ProjectsPage from "./component/projectspage/ProjectsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/servicespage" element={<ServicesPage />} />
            <Route path="/projectspage" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
