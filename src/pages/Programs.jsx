import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Award, Calendar, Target, Search, Smartphone, CreditCard, ArrowRight, } from 'lucide-react';
import { X } from "lucide-react";
import heroVideo from '../assets/vid.mp4';

const Programs = () => {
    const presets = [10000, 25000, 50000, 100000, 250000];

const [isMonthly, setIsMonthly] = useState(false);
const [amount, setAmount] = useState(25000);
const [selectedPreset, setSelectedPreset] = useState(25000);
const [paymentMethod, setPaymentMethod] = useState("mobile");
  const [activeProgram, setActiveProgram] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [modal, setModal] = useState(null);

  const programs = [
    {
      title: "Home Care & Nutrition",
      icon: Heart,
      desc: "Regular home visits, nutritious meals, and daily support for vulnerable elders and orphans — just as my grandmother struggled to feed me after losing my parents at 13.",
      progress: 85,
      impact: "1,200 elders & orphans fed daily",
      status: "Ongoing",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Medical & Health Support",
      icon: Award,
      desc: "Medicine, checkups, hospital transport, and emergency medical aid for elders and orphans who lack access to basic healthcare.",
      progress: 70,
      impact: "850+ medical aids delivered",
      status: "Ongoing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Music Therapy",
      icon: Users,
      desc: "Weekly sessions that bring emotional healing, joy, and memory revival — helping elders and children reconnect with hope.",
      progress: 95,
      impact: "500 elders & orphans reached",
      status: "Ongoing",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Community Connection",
      icon: Target,
      desc: "Events, gatherings, and social programs to reduce isolation for elders and orphans who feel forgotten.",
      progress: 60,
      impact: "Monthly community events",
      status: "Upcoming",
      color: "from-emerald-500 to-teal-500"
    }
  ];
const filteredPrograms = programs.filter(p => 
  p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  p.desc.toLowerCase().includes(searchTerm.toLowerCase())
);

const handlePresetClick = (preset) => {
  setSelectedPreset(preset);
  setAmount(preset);
};

const handleDonate = () => {
  console.log({
    program: programs[activeProgram].title,
    amount,
    paymentMethod,
    recurring: isMonthly,
  });

  // Later connect Stripe / Mobile Money here
};

  

  return (
    <div className=" pb-24 bg-gray-50 min-h-screen">
      <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-0">
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
                <Target className="text-accent" size={18} />
                CURRENT PROGRAM
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tighter">
                Kampala Home Care<br />
                Initiative
              </h1>

              <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                Supporting 450 elders in Kampala & Wakiso with weekly home visits, nutrition, and medical checkups.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div>Progress: <span className="font-bold text-accent">92%</span></div>
                <div>Started: March 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid - Enhanced with Search & Actions */}
        <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-end">
            <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Our Programs</h2>
            <p className="text-gray-600">Real impact in real communities across Uganda</p>
            </div>
            
            <div className="relative w-full md:w-80">
            <input
                type="text"
                placeholder="Search programs..."
                className="w-full pl-12 py-4 rounded-2xl border border-gray-200 focus:border-accent outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-5 top-5 text-gray-400" size={20} />
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4">
            <div className="sticky top-28">
                <div className="space-y-3">
                {filteredPrograms.map((program, i) => (
                    <button
                    key={i}
                    onClick={() => setActiveProgram(i)}
                    className={`w-full text-left p-5 rounded-2xl transition-all flex items-center gap-4 ${activeProgram === i ? 'bg-accent text-white' : 'bg-white hover:bg-gray-50'}`}
                    >
                    <program.icon size={28} />
                    <div>
                        <div className="font-semibold">{program.title}</div>
                        <div className="text-xs opacity-70">{program.location}</div>
                    </div>
                    </button>
                ))}
                </div>
            </div>
            </div>

            {/* Active Program Detail */}
            <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                {(() => {
                    const ActiveIcon = programs[activeProgram].icon;
                    return <ActiveIcon className="text-accent" size={60} />;
                })()}
                <div>
                    <h2 className="text-4xl font-bold">{programs[activeProgram].title}</h2>
                    <p className="text-gray-500">{programs[activeProgram].location}</p>
                </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                {programs[activeProgram].desc}
                </p>

                {/* Progress Bar */}
                <div className="mb-12">
                <div className="flex justify-between mb-3">
                    <span className="font-medium">Program Progress</span>
                    <span className="font-mono text-accent">{programs[activeProgram].progress}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                    className={`h-full bg-gradient-to-r ${programs[activeProgram].color} transition-all duration-1000`}
                    style={{ width: `${programs[activeProgram].progress}%` }}
                    />
                </div>
                </div>

                <div className="text-2xl font-bold text-accent mb-3">{programs[activeProgram].impact}</div>
                <p className="text-gray-600 mb-10">Lives improved through this program</p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setModal("donate")}
                    className="flex-1 py-5 bg-gradient-to-r from-accent to-orange-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-3"
                >
                    <Heart size={22} />
                    Donate to this Program
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setModal("volunteer")}
                    className="flex-1 py-5 border border-gray-300 hover:bg-gray-50 rounded-2xl font-semibold flex items-center justify-center gap-3"
                >
                    <Users size={22} />
                    Volunteer Here
                </motion.button>
                </div>
            </div>
            </div>
        </div>
        </div>

      {/* Impact Stories + Blog Integration */}
        <div className="max-w-6xl mx-auto px-6 py-20 bg-white">
        <div className="flex justify-between items-end mb-12">
            <div>
            <h2 className="text-4xl font-bold">Program Impact Stories</h2>
            <p className="text-gray-600">Real lives changed through our programs</p>
            </div>
            <a href="/blog" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Stories <ArrowRight size={18} />
            </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {[
            { 
                title: "Music Therapy Success", 
                desc: "80 elders regained joy through weekly sessions.", 
                image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae" 
            },
            { 
                title: "Home Nutrition Program", 
                desc: "1,200 elders now receive consistent meals.", 
                image: "https://images.unsplash.com/photo-1582213782179-c5c7c0b8c3b0" 
            },
            { 
                title: "Medical Aid Reach", 
                desc: "850+ elders received critical medical support.", 
                image: "https://images.unsplash.com/photo-1559757148-5e995136c87b" 
            }
            ].map((story, i) => (
            <motion.div 
                key={i} 
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => window.location.href = '/blog'}
            >
                <img src={story.image} alt={story.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-8">
                <h3 className="font-bold text-xl mb-3">{story.title}</h3>
                <p className="text-gray-600 line-clamp-3">{story.desc}</p>
                </div>
            </motion.div>
            ))}
        </div>

        {/* Blog Integration */}
        <div className="mt-16 border-t pt-16">
            <h3 className="text-2xl font-bold text-center mb-8">More Stories from Our Blog</h3>
            {/* Render your Blog.jsx content here or import as component */}
            <div className="text-center">
            <a href="/blog" className="inline-flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition">
                Explore Full Blog
                <ArrowRight />
            </a>
            </div>
        </div>
        </div>

      <AnimatePresence>
  {modal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setModal(null)}
      className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-[32px] bg-white p-10 shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={() => setModal(null)}
          className="absolute top-6 right-6 h-11 w-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
        >
          <X size={22} />
        </button>

        <h2 className="text-4xl font-bold mb-2">
          {modal === "donate"
            ? "Support This Program"
            : "Become a Volunteer"}
        </h2>

        <p className="text-gray-500 mb-8">
          {programs[activeProgram].title}
        </p>

        {modal === "donate" ? (
          <div className="max-w-lg mx-auto">

  <div className="flex justify-center gap-3 mb-10 border-b pb-3">

    <button
      onClick={() => setIsMonthly(false)}
      className={`px-8 py-3 rounded-2xl font-semibold transition ${
        !isMonthly
          ? "bg-accent text-white"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      One Time
    </button>

    <button
      onClick={() => setIsMonthly(true)}
      className={`px-8 py-3 rounded-2xl font-semibold transition ${
        isMonthly
          ? "bg-accent text-white"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      Monthly
    </button>

  </div>

  <div className="grid grid-cols-5 gap-3 mb-10">

    {presets.map((preset) => (

      <button
        key={preset}
        onClick={() => handlePresetClick(preset)}
        className={`py-4 rounded-2xl font-medium transition ${
          selectedPreset === preset
            ? "bg-accent text-white"
            : "bg-white border border-gray-200 hover:border-accent"
        }`}
      >
        {preset / 1000}k
      </button>

    ))}

  </div>

  <div className="mb-10">

    <label className="block text-sm text-gray-500 mb-3 font-medium">
      Donation Amount (UGX)
    </label>

    <input
      type="number"
      value={amount}
      onChange={(e) => {
        setAmount(Number(e.target.value));
        setSelectedPreset(null);
      }}
      className="w-full bg-transparent border-b-4 border-gray-300 focus:border-accent outline-none py-4 text-5xl font-bold"
    />

  </div>

  <div className="mb-10">

    <label className="block text-sm text-gray-500 mb-4 font-medium">
      Payment Method
    </label>

    <div className="grid grid-cols-2 gap-4">

      <button
        onClick={() => setPaymentMethod("mobile")}
        className={`p-5 rounded-2xl border flex gap-3 ${
          paymentMethod === "mobile"
            ? "border-accent bg-accent/5"
            : "border-gray-200"
        }`}
      >
        <Smartphone size={28} />

        <div className="text-left">
          <div className="font-semibold">
            Mobile Money
          </div>

          <div className="text-xs text-gray-500">
            MTN • Airtel
          </div>
        </div>

      </button>

      <button
        onClick={() => setPaymentMethod("stripe")}
        className={`p-5 rounded-2xl border flex gap-3 ${
          paymentMethod === "stripe"
            ? "border-accent bg-accent/5"
            : "border-gray-200"
        }`}
      >
        <CreditCard size={28} />

        <div className="text-left">
          <div className="font-semibold">
            Card
          </div>

          <div className="text-xs text-gray-500">
            Visa • Mastercard
          </div>
        </div>

      </button>

    </div>

  </div>

  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={handleDonate}
    className="w-full rounded-3xl bg-gradient-to-r from-accent to-orange-600 py-6 text-xl font-semibold text-white flex items-center justify-center gap-3"
  >
    <Heart size={24} />

    {isMonthly
      ? `Donate UGX ${amount.toLocaleString()} Monthly`
      : `Donate UGX ${amount.toLocaleString()} Now`}

    <ArrowRight size={22} />

  </motion.button>

</div>
        ) : (
          <>
            <input
              placeholder="Full Name"
              className="w-full mb-4 rounded-xl border p-4"
            />

            <input
              placeholder="Email Address"
              className="w-full mb-4 rounded-xl border p-4"
            />

            <input
              placeholder="Phone Number"
              className="w-full mb-4 rounded-xl border p-4"
            />

            <textarea
              rows={4}
              placeholder="Tell us how you'd like to help..."
              className="w-full mb-6 rounded-xl border p-4"
            />

            <button className="w-full rounded-xl bg-accent py-4 text-white font-semibold">
              Submit Application
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default Programs;