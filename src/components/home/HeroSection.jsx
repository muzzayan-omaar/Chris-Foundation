import { useState } from 'react';
import {Link} from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, X } from 'lucide-react';
import heroVideo from '../../assets/vid.mp4';   

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-0">
        <div className="w-full max-w-8xl h-[85vh] sm:h-[88vh] lg:h-[85vh] -translate-y-4 sm:-translate-y-6 lg:-translate-y-10 rounded-3xl shadow-2xl overflow-hidden border border-white/50 relative glass">
          
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center px-6 sm:px-8 lg:px-16 z-10">
            <div className="max-w-2xl text-white space-y-8">
              
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-3xl text-sm font-medium tracking-widest">
                <Heart className="text-accent" size={18} />
                CHRIS EVANS ELDERS FOUNDATION
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tighter">
                Every Elder Deserves<br />
                Dignity, Care &amp; Love
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 max-w-lg leading-relaxed">
                We are committed to improving the lives of elderly people in Uganda through care, 
                compassion, and community support.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <Link to="/donate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-red-600 text-white px-11 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 shadow-xl shadow-orange-500/30 transition-all duration-300"
                >
                  <Heart size={24} />
                  Donate Now
                </motion.button>
                </Link>
                

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-white/95 hover:bg-white text-dark px-10 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 shadow-xl shadow-black/10 border border-white/30 transition-all duration-300"
                >
                  <Play size={24} className="ml-1" />
                  Watch Message
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white transition-all"
              >
                <X size={22} />
              </motion.button>

              {/* Video */}
              <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                controls
                autoPlay
                className="aspect-video w-full"
              >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;