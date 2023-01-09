import './App.css';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import "./assets/css/main.css";
import Header from './Component/NavBar/Header';
import Footer from './Component/NavBar/Footer';
import HeroSection from './Component/HeroSection';
import About from './Component/About';
import StateConterSection from './Component/StateConterSection';
import OurServices from './Component/OurServices';
import RecentBlog from './Component/RecentBlog';
import Contact from './Component/Contact';

import { Route, Routes } from "react-router-dom"
import Home from './Component/Home';
import Blogs from './Component/Blogs';
import Portfolio from './Component/Portfolio';
import BlogDetailsPage from './Component/BlogDetailsPage';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stateConterSectionntact" element={<StateConterSection />} />
        <Route path="/portfolio" element={<Portfolio/>} />

        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-destails" element={<BlogDetailsPage />} />

      
      </Routes>


      <Footer />
    </>
  );
}

export default App;
