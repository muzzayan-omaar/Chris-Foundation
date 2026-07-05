import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Award, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import heroVideo from '../assets/vid3.mp4'; // Your video

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    skills: '',
    motivation: ''
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering! We'll contact you soon.");
  };

  const opportunities = [
    { title: "Home Visits", desc: "Spend time with elders and provide companionship.", time: "2-4 hours/week", icon: Users },
    { title: "Music & Entertainment", desc: "Lead music sessions or organize fun activities.", time: "Flexible", icon: Award },
    { title: "Medical Support", desc: "Help with checkups and medication reminders.", time: "Weekdays", icon: Heart },
    { title: "Event Coordination", desc: "Help organize community events.", time: "Weekends", icon: Calendar },
  ];

  const volunteerStories = [
    {
      title: "How I Found Purpose Volunteering",
      excerpt: "Sarah's journey from busy professional to making meaningful connections with elders and orphans.",
      image: "https://res.cloudinary.com/diszilwhc/image/upload/v1782610100/Yunia-Byabazaire-Adyeeri-95-the-composer-of-Uganda-Red-Cross-Society-anthem-1210x617_vic0yj.jpg",
    },
    {
      title: "The Joy of Music Therapy",
      excerpt: "Michael shares how leading music sessions changed both his life and the elders'.",
      image: "https://res.cloudinary.com/diszilwhc/image/upload/v1782610100/Uganda-Elderly-Outreach-Kachotara_sugtoe.jpg",
    }
  ];

  const faqs = [
    {
      q: "Do I need experience to volunteer?",
      a: "No experience is required. We provide training and support for all volunteers."
    },
    {
      q: "How much time do I need to commit?",
      a: "As little as 2 hours per week. We value any time you can give."
    },
    {
      q: "Is there a background check?",
      a: "Yes, for safety of our elders and orphans. We cover the cost."
    },
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Floating Hero Card */}
      <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-0 -mt-20">
        <div className="w-full max-w-8xl h-[80vh] -mt-12 rounded-3xl shadow-2xl overflow-hidden border border-white/50 relative glass">
          
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
                Be the Light.<br />
                Give Your Time.
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 max-w-lg leading-relaxed">
                Just as my grandmother struggled to raise me after losing my parents at 13, many elders and orphans today need the same compassion. Your presence can bring dignity, joy, and companionship.
              </p>

              <motion.button
                href="#form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-dark px-10 py-5 rounded-2xl font-semibold text-lg flex items-center gap-3"
              >
                Join Our Volunteer Family
                <ArrowRight />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Volunteer Opportunities</h2>
        <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">Choose how you'd like to make a difference</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group"
            >
              <opp.icon className="text-accent mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">{opp.title}</h3>
              <p className="text-gray-600 mb-6">{opp.desc}</p>
              <p className="text-sm text-gray-500 font-medium">{opp.time}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Volunteer Stories */}
      <div className="max-w-6xl mx-auto px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-4">Volunteer Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">Hear from those who are already making a difference</p>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerStories.map((story, i) => (
            <motion.div key={i} className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
              <img src={story.image} alt={story.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-3">{story.title}</h3>
                <p className="text-gray-600">{story.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div id="form" className="max-w-3xl mx-auto px-6 pb-24">
        <div className="glass rounded-3xl shadow-2xl p-10 md:p-16">
          <h2 className="text-4xl font-bold text-center mb-10">Join Our Volunteer Family</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                <input type="text" name="name" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" required />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input type="email" name="email" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" required />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
              <input type="tel" name="phone" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" required />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Availability</label>
              <select name="availability" onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none">
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Skills / Experience (optional)</label>
              <textarea name="skills" onChange={handleInputChange} rows="3" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" placeholder="Music, nursing, teaching, etc." />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Why do you want to volunteer?</label>
              <textarea name="motivation" onChange={handleInputChange} rows="4" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none" required />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-accent to-orange-600 text-white rounded-3xl text-xl font-semibold shadow-xl flex items-center justify-center gap-3"
            >
              Submit Application
              <ArrowRight size={24} />
            </motion.button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left font-medium hover:bg-gray-50 transition"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;