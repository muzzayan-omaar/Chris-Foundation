import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, ChevronDown, Users, Target, Award, HandHeart, Users2, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const exploreItems = [
    { icon: <Users size={20} />, title: "Our Impact", desc: "Stories of lives transformed", href: "/about" },
    { icon: <Target size={20} />, title: "Programs", desc: "How we support elders", href: "/programs" },
    { icon: <Award size={20} />, title: "Project Progress", desc: "Transparency & updates", href: "/programs" },
  ];

  const supportItems = [
    { icon: <HandHeart size={20} />, title: "Donate", desc: "Support our mission", href: "/donate" },
    { icon: <Users2 size={20} />, title: "Volunteer", desc: "Join our community", href: "/volunteer" },
    { icon: <Gift size={20} />, title: "Partner With Us", desc: "Corporate & individual", href: "/partner-with-us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
            <Heart className="text-white" size={26} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-dark">Chris Evans</h1>
            <p className="text-xs text-gray-500 -mt-1">Elders Foundation</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className={`relative py-1 hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`}>
            Home
            {isActive('/') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></div>}
          </Link>
          <Link to="/about" className={`relative py-1 hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : ''}`}>
            Our Mission
            {isActive('/about') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></div>}
          </Link>
          <Link to="/programs" className={`relative py-1 hover:text-accent transition-colors ${isActive('/programs') ? 'text-accent' : ''}`}>
            Our Programs
            {isActive('/programs') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></div>}
          </Link>
          <Link to="/blog" className={`relative py-1 hover:text-accent transition-colors ${isActive('/blog') ? 'text-accent' : ''}`}>
            Our Stories
            {isActive('/blog') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></div>}
          </Link>

          {/* Explore Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown("explore")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-accent transition-colors py-2">
              Explore 
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {activeDropdown === "explore" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[110%] left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 mt-6 z-50"
                >
                  <div className="space-y-4">
                    {exploreItems.map((item, i) => (
                      <Link key={i} to={item.href} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all group">
                        <div className="text-primary mt-0.5">{item.icon}</div>
                        <div>
                          <div className="font-semibold text-dark group-hover:text-accent transition">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* How to Support Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown("support")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-accent transition-colors py-2">
              How to Support 
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {activeDropdown === "support" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[110%] left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 mt-6 z-50"
                >
                  <div className="space-y-4">
                    {supportItems.map((item, i) => (
                      <Link key={i} to={item.href} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all group">
                        <div className="text-primary mt-0.5">{item.icon}</div>
                        <div>
                          <div className="font-semibold text-dark group-hover:text-accent transition">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Attached Buttons */}
        <div className="hidden md:flex items-center rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <Link to="/donate">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-3.5 bg-accent hover:bg-orange-600 text-white font-semibold flex items-center gap-2"
            >
              <Heart size={20} />
              Donate Now
            </motion.button>
          </Link>

          {/* Diagonal Divider */}
          <div className="relative w-8 h-full bg-white">
            <div
              className="absolute inset-0 bg-gray-200"
              style={{
                clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
              }}
            />
          </div>

          <Link to="/volunteer">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3.5 hover:bg-gray-50 text-gray-700 font-semibold flex items-center gap-2"
            >
              <Users2 size={20} />
              Volunteer
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              <Link to="/" className="text-gray-700 hover:text-accent">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-accent">Our Mission</Link>
              <Link to="/programs" className="text-gray-700 hover:text-accent">Our Programs</Link>
              <Link to="/blog" className="text-gray-700 hover:text-accent">Our Stories</Link>
              <Link to="/donate" className="bg-accent text-white py-4 rounded-2xl text-center font-semibold mt-4">Donate Now</Link>
              <Link to="/volunteer" className="border border-gray-300 text-gray-700 py-4 rounded-2xl text-center font-semibold">Volunteer</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;