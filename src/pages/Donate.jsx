import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Users, Award, ArrowRight, X, Star, ChevronDown, Smartphone, CreditCard, } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState(50000);
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(50000);
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('mobile'); // 'mobile' or 'stripe'

  const presets = [25000, 50000, 100000, 250000, 500000];

  const handlePresetClick = (value) => {
    setAmount(value);
    setSelectedPreset(value);
  };

  const impactStories = [
    {
      id: 1,
      title: "Mama Sarah's New Beginning",
      image: "https://images.unsplash.com/photo-1582213782179-c5c7c0b8c3b0",
      shortDesc: "From hunger to hope — how monthly donations changed her life.",
      fullStory: "Mama Sarah, 78, used to go days without proper meals. Thanks to consistent donations, she now receives nutritious food, medicine, and regular visits. 'I can smile again,' she says. Your support gave her dignity back."
    },
    {
      id: 2,
      title: "Baba Joseph's Mobility",
      image: "https://images.unsplash.com/photo-1559757148-5e995136c87b",
      shortDesc: "A simple walking aid restored his independence.",
      fullStory: "Baba Joseph had lost hope after a fall. A donation-funded mobility aid and physiotherapy allowed him to walk again and visit his grandchildren. 'I feel alive once more,' he shared with tears."
    },
    {
      id: 3,
      title: "Music Therapy Miracle",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
      shortDesc: "How music brought joy back to 80 elders.",
      fullStory: "Our music therapy program, funded by generous donors, has brought smiles and memories to over 80 elders. Many who hadn't spoken in months began singing old songs. The healing power of music is real."
    }
  ];

  const donorTestimonials = [
    {
      name: "Dr. Amina Okello",
      role: "Monthly Donor since 2024",
      quote: "I donate every month because I see real change. These elders are our parents and grandparents. It's an honor to support them.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Nsubuga",
      role: "One-time Donor",
      quote: "Gave once and felt so fulfilled. The foundation sent me a photo of the elder my donation helped. I'll be back.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Nakato",
      role: "Corporate Partner",
      quote: "Our company partners with Chris Evans Foundation every year. The impact is measurable and the stories are heartwarming.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const faqs = [
    {
      q: "Where does my donation go?",
      a: "100% of your donation goes directly to supporting elderly Ugandans with food, medical care, home visits, and community programs. We operate with full transparency."
    },
    {
      q: "Can I donate monthly?",
      a: "Yes! Monthly donations provide consistent support and help us plan long-term programs for the elders."
    },
    {
      q: "Is my donation tax deductible?",
      a: "Yes. We are a registered non-profit organization. You'll receive a receipt for tax purposes."
    },
    {
      q: "How can I see the impact of my donation?",
      a: "We send periodic updates, photos, and stories from the elders your donation helped. You can also follow our progress reports."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept Mobile Money (MTN, Airtel), Bank Transfer, Visa, Mastercard, and international payments."
    }
  ];

  // Auto slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % donorTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDonate = () => {
    if (paymentMethod === 'mobile') {
      alert("Redirecting to Mobile Money (MTN/Airtel)...");
    } else {
      alert("Redirecting to Stripe Checkout...");
    }
  };

  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      {/* Top Banner */}
      <div className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://res.cloudinary.com/diszilwhc/image/upload/v1782551398/15_uxrr4b.webp" 
          alt="Elderly care" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <Heart className="mx-auto mb-6 text-white" size={80} />
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your Gift Brings Life-Changing Hope
          </h1>
          <p className="text-xl text-gray-200">
            Every donation directly supports elderly Ugandans with food, medicine, care, and dignity.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">
        <div className="glass rounded-3xl shadow-2xl overflow-hidden border border-white/50 p-8 md:p-12">
          
          {/* Impact Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Gift, text: "UGX 50,000", sub: "Feeds 10 elders for a week" },
              { icon: Heart, text: "UGX 150,000", sub: "Full medical support" },
              { icon: Users, text: "UGX 500,000", sub: "Monthly home care" },
              { icon: Award, text: "Any Amount", sub: "Creates lasting change" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100"
              >
                <item.icon className="mx-auto mb-4 text-accent" size={42} />
                <div className="font-bold text-2xl text-dark">{item.text}</div>
                <div className="text-sm text-gray-600 mt-1">{item.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Donation Form */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-center gap-3 mb-10 border-b pb-2">
              <button onClick={() => setIsMonthly(false)} className={`px-8 py-3 rounded-2xl font-semibold transition-all ${!isMonthly ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600'}`}>One Time</button>
              <button onClick={() => setIsMonthly(true)} className={`px-8 py-3 rounded-2xl font-semibold transition-all ${isMonthly ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600'}`}>Monthly</button>
            </div>

            <div className="grid grid-cols-5 gap-3 mb-10">
              {presets.map((preset) => (
                <button key={preset} onClick={() => handlePresetClick(preset)} className={`py-4 rounded-2xl font-medium transition-all text-sm ${selectedPreset === preset ? 'bg-accent text-white shadow-md' : 'bg-white border border-gray-200 hover:border-gray-300'}`}>{preset / 1000}k</button>
              ))}
            </div>

            <div className="mb-12">
              <label className="block text-sm text-gray-600 mb-3 font-medium">Custom Amount (UGX)</label>
              <input type="number" value={amount} onChange={(e) => { setAmount(Number(e.target.value)); setSelectedPreset(null); }} className="w-full text-5xl font-bold border-b-4 border-gray-300 focus:border-accent py-4 outline-none bg-transparent" />
            </div>

            {/* Payment Method */}
            <div className="mb-10">
              <label className="block text-sm text-gray-600 mb-4 font-medium">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setPaymentMethod('mobile')} className={`flex items-center gap-3 p-5 rounded-2xl border ${paymentMethod === 'mobile' ? 'border-accent bg-accent/5' : 'border-gray-200'}`}>
                  <Smartphone size={28} />
                  <div>
                    <div className="font-semibold">Mobile Money</div>
                    <div className="text-xs text-gray-500">MTN • Airtel</div>
                  </div>
                </button>
                <button onClick={() => setPaymentMethod('stripe')} className={`flex items-center gap-3 p-5 rounded-2xl border ${paymentMethod === 'stripe' ? 'border-accent bg-accent/5' : 'border-gray-200'}`}>
                  <CreditCard size={28} />
                  <div>
                    <div className="font-semibold">Card / International</div>
                    <div className="text-xs text-gray-500">Visa • Mastercard</div>
                  </div>
                </button>
              </div>
            </div>

            <motion.button 
              onClick={handleDonate}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-accent to-orange-600 text-white rounded-3xl text-2xl font-semibold shadow-xl flex items-center justify-center gap-3 hover:from-orange-600 hover:to-red-600 transition-all"
            >
              <Heart size={28} />
              {isMonthly ? `Donate UGX ${amount.toLocaleString()} Monthly` : `Donate UGX ${amount.toLocaleString()} Now`}
              <ArrowRight size={28} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold text-center mb-4">How Donations Save Lives</h2>
        <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">Real stories of transformation thanks to generous hearts like yours</p>

        <div className="grid md:grid-cols-3 gap-8">
          {impactStories.map((story) => (
            <motion.div key={story.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} onClick={() => setSelectedStory(story)} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
              <img src={story.image} alt={story.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-3 leading-tight">{story.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-6">{story.shortDesc}</p>
                <button className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">Read Full Story <ArrowRight size={18} /></button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blog" className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 px-10 py-4 rounded-2xl font-semibold text-lg transition-all">Read More Impact Stories <ArrowRight /></a>
        </div>
      </div>

      {/* Testimonials */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-200/20 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-amber-200/20 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
              Trusted By Our Donors
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-500">
              Every donation changes lives. Here's what our supporters have to say.
            </p>
          </div>

          <div className="overflow-hidden">
            <div
              className="grid grid-flow-col auto-cols-[calc((100%-4rem)/3)] gap-8 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentTestimonial} * ((100% + 2rem) / 3)))`,
              }}
            >
              {[...donorTestimonials, ...donorTestimonials].map((testimonial, index) => (
                <div key={index} className="group relative rounded-[30px] border border-gray-200 bg-white/90 backdrop-blur-xl p-10 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  <div className="absolute right-8 top-4 text-[120px] font-black leading-none text-orange-100 select-none">“</div>

                  <div className="relative z-10 flex items-center gap-5">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="relative z-10 text-[17px] leading-8 text-gray-600 italic min-h-[180px] mt-8">
                    "{testimonial.quote}"
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-semibold text-orange-500">Verified Donor</span>
                    <div className="h-px w-16 bg-orange-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-14">
            {donorTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`h-3 rounded-full transition-all duration-300 ${currentTestimonial === i ? "w-10 bg-orange-500" : "w-3 bg-gray-300 hover:bg-orange-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
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

export default Donate;