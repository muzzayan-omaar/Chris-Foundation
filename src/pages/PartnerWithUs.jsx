import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Award, Handshake, Building2, ArrowRight } from 'lucide-react';

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    organization: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    contribution: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our partnership team will contact you soon.");
  };

  const partnershipTypes = [
    { title: "Corporate Sponsorship", desc: "Sponsor programs, events, or full care packages.", icon: Building2 },
    { title: "NGO Collaboration", desc: "Joint projects and resource sharing.", icon: Users },
    { title: "Community & Church", desc: "Volunteer groups and donation drives.", icon: Heart },
    { title: "Legacy Giving", desc: "Long-term impact through planned giving.", icon: Award },
  ];

  const partnerLogos = [
    "https://res.cloudinary.com/diszilwhc/image/upload/v1777986770/nova-clients/klzdgh3u8t1tzbdyks9y.png",
    "https://res.cloudinary.com/diszilwhc/image/upload/v1777986744/nova-clients/tr6da1t9c36po47o60b6.png",
    "https://res.cloudinary.com/diszilwhc/image/upload/v1777986733/nova-clients/dbisif4hjhl90f0vqfg7.jpg",
    "https://res.cloudinary.com/diszilwhc/image/upload/v1777986720/nova-clients/a4atybhej0gsv87w2thc.jpg",
    "https://res.cloudinary.com/diszilwhc/image/upload/v1777936026/nova-clients/bewplree7tnrale5qhjv.png",
  ];

  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      {/* Fresh Engaging Hero */}
      <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-0">
        <div className="w-full max-w-8xl h-[88vh] -translate-y-8 rounded-3xl shadow-2xl overflow-hidden border border-white/50 relative glass">
            
            {/* Background Image */}
            <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Partnership" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-6 sm:px-8 lg:px-16 z-10">
            <div className="grid md:grid-cols-2 gap-16 w-full">
                
                {/* Left Side */}
                <div className="text-white space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-3xl text-sm font-medium tracking-widest">
                    <Handshake size={20} className="text-accent" />
                    COLLABORATE FOR GOOD
                </div>

                <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tighter">
                    Let's Build a Better Future.<br />
                    Together.
                </h1>

                <p className="text-xl text-gray-200 max-w-lg">
                    Just as my grandmother struggled to raise me after losing my parents at 13, many elders and orphans today need the same compassion. Your organization can help us expand care to more vulnerable lives.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-dark px-10 py-5 rounded-2xl font-semibold text-lg flex items-center gap-3"
                >
                    Become a Partner
                    <ArrowRight />
                </motion.button>
                </div>

                {/* Right Side */}
                <div className="text-white space-y-10 self-center">
                <div className="space-y-8">
                    <div className="flex gap-6">
                    <div className="text-5xl font-bold text-accent">1,200+</div>
                    <div className="pt-2">
                        <div className="font-medium">Elders & Orphans Supported</div>
                        <div className="text-sm text-gray-300">Through our partners</div>
                    </div>
                    </div>

                    <div className="flex gap-6">
                    <div className="text-5xl font-bold text-accent">45k+</div>
                    <div className="pt-2">
                        <div className="font-medium">Meals Distributed</div>
                        <div className="text-sm text-gray-300">Thanks to corporate partners</div>
                    </div>
                    </div>
                </div>

                <p className="text-lg text-gray-200">
                    Real impact. Real stories. Real partnerships that matter.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>

      {/* Partnership Types */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Ways to Partner</h2>
        <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">Choose the collaboration model that fits your organization</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group"
            >
              <type.icon className="text-accent mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
              <p className="text-gray-600">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partnership Form */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <div className="glass rounded-3xl shadow-2xl p-10 md:p-16">
          <h2 className="text-4xl font-bold text-center mb-10">Let's Build Something Great Together</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Organization / Company Name</label>
              <input type="text" name="organization" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" required />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Contact Person</label>
                <input type="text" name="contactName" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" required />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input type="email" name="email" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone</label>
                <input type="tel" name="phone" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" required />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Type of Partnership</label>
                <select name="partnershipType" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none">
                  <option>Corporate Sponsorship</option>
                  <option>NGO Collaboration</option>
                  <option>Church / Community Group</option>
                  <option>School / University Program</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">How would you like to contribute?</label>
              <textarea name="contribution" onChange={handleInputChange} rows="3" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" placeholder="Sponsorship, volunteer team, in-kind donations, etc." required />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Additional Message</label>
              <textarea name="message" onChange={handleInputChange} rows="4" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-accent to-orange-600 text-white rounded-3xl text-xl font-semibold shadow-xl flex items-center justify-center gap-3"
            >
              Submit Partnership Request
              <ArrowRight size={24} />
            </motion.button>
          </form>
        </div>
      </div>

      {/* Trusted Partners Logos */}
      <div className=" py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-10">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            {partnerLogos.map((logo, i) => (
              <img key={i} src={logo} alt="Partner" className="h-10 object-contain" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;