import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1C] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-accent to-orange-600 rounded-2xl flex items-center justify-center">
                <Heart className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight">Chris Evans</h3>
                <p className="text-sm text-gray-400 -mt-1">Elders Foundation</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Restoring dignity, health, and joy to elderly Ugandan Orphans through care, music, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Quick Links</h4>
            <div className="space-y-4 text-gray-400">
              <a href="/about" className="block hover:text-white transition">Our Mission</a>
              <a href="/programs" className="block hover:text-white transition">Our Programs</a>
              <a href="/blog" className="block hover:text-white transition">Success Stories</a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Our Programs</h4>
            <div className="space-y-4 text-gray-400">
              <p>Medical & Health Care</p>
              <p>Home Care & Nutrition</p>
              <p>Music Therapy</p>
              <p>Livelihood Support</p>
              <p>Community Connection</p>
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Stay Connected</h4>
            <p className="text-gray-400 mb-6">Get updates on our impact and stories from the elders and orphans.</p>
            
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-sm flex-1 focus:outline-none focus:border-accent placeholder:text-gray-500"
              />
              <button className="bg-accent hover:bg-orange-600 px-8 rounded-2xl font-medium transition">
                Join
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-2 text-sm text-gray-400">
              <p>© 2026 Chris Evans Elders Foundation</p>
              <p>Uganda • All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;