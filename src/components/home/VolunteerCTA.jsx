import { motion } from "framer-motion";
import { Users, Heart, ArrowRight, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const VolunteerCTA = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#ffffff15_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-3xl border border-white/20">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="uppercase tracking-[0.125em] text-sm font-semibold">We Need You</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Be the reason<br />someone smiles today
            </h2>

            <p className="text-xl text-white/90 max-w-lg">
              Just as my grandfather struggled to raise me after losing my parents at 13, 
              many elders and orphans today need the same compassion. Your time can be their light.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-semibold">240+</p>
                  <p className="text-white/70 text-sm">Active Volunteers</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-semibold">12</p>
                  <p className="text-white/70 text-sm">Programs Supported</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-semibold">4h</p>
                  <p className="text-white/70 text-sm">Avg. per visit</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href="/volunteer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 bg-white text-accent px-10 py-5 rounded-3xl font-semibold text-lg shadow-xl shadow-black/20 hover:shadow-2xl transition-all"
              >
                Join as a Volunteer
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/blog"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 border-2 border-white/60 hover:bg-white/10 px-9 py-5 rounded-3xl font-medium text-lg backdrop-blur-md transition-all"
              >
                Watch Volunteer Stories
              </motion.a>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">“Volunteering here changed my life as much as I changed theirs.”</p>
                  <p className="text-white/60 text-sm mt-1">- Sarah N., Volunteer since 2024</p>
                </div>
              </div>

              <div className="text-sm text-white/70 border-t border-white/20 pt-6">
                Next orientation session: <span className="font-medium text-white">Saturday, July 12th</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;