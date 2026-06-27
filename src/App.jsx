import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import Volunteer from './pages/Volunteer';
import About from './pages/About';
import PartnerWithUs from './pages/PartnerWithUs';
import Programs from './pages/Programs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;