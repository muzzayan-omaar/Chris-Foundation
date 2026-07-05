import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Award, Target, Calendar, X } from 'lucide-react';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Elders', 'Activities', 'Community', 'Medical'];

  const galleryImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1582213782179-c5c7c0b8c3b0", category: "Elders" },
    { id: 2, url: "https://images.unsplash.com/photo-1559757148-5e995136c87b", category: "Elders" },
    { id: 3, url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae", category: "Activities" },
    { id: 4, url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", category: "Community" },
    { id: 5, url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b", category: "Medical" },
    { id: 6, url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", category: "Elders" },
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://res.cloudinary.com/diszilwhc/image/upload/v1782557611/ths_11_slider_3_img_2_sowjbp.webp" 
          alt="Elders" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 text-center px-6 max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-2xl text-gray-200">Restoring dignity and joy to elderly Ugandans and orphans, one act of love at a time.</p>
        </div>
      </div>

      {/* Founder Card */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10 mb-20">
        <div className="glass rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-[500px]">
              <img 
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1782566164/evans_c4dwlz.jpg" 
                alt="Chris Evans" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-lg text-gray-700 mb-8">
                Chris Evans, a passionate musician and community leader, founded this organization after his own experience of losing his parents at 13 and being raised by his struggling grandfather. 
                That personal journey inspired him to help elders and orphans who face similar hardships today.
              </p>
              <p className="italic text-gray-600">"Every elder and orphan deserves to be seen, heard, and loved in their golden years."</p>
              <p className="mt-4 text-sm font-medium text-accent">— Chris Evans, Founder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-5 py-2 rounded-full mb-6">
                <Heart size={20} />
                <span className="font-semibold tracking-widest text-sm">OUR PURPOSE</span>
              </div>
              <h2 className="text-5xl font-bold leading-tight mb-8">We exist to restore dignity to every elder and orphan.</h2>
              <p className="text-xl text-gray-600">
                Through compassionate care, medical support, and community connection, we ensure no senior or child is left behind.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-12 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              
              <p className="text-2xl leading-tight text-gray-800">
                A Uganda where every elder and orphan is cherished, respected, and surrounded by care — 
                living their years with joy, dignity, and a strong sense of belonging.
              </p>
              
              <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-500">
                This is not just a dream. It is the future we are building together.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mama Sarah", story: "Now receives regular meals and medical care. 'I feel loved again.'", image: "https://images.unsplash.com/photo-1582213782179-c5c7c0b8c3b0" },
              { name: "Baba Joseph", story: "Regained mobility and visits his grandchildren regularly.", image: "https://images.unsplash.com/photo-1559757148-5e995136c87b" },
              { name: "Group of 80 Elders", story: "Enjoy weekly music therapy sessions that bring back memories.", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae" }
            ].map((story, i) => (
              <motion.div key={i} className="bg-gray-50 rounded-3xl overflow-hidden">
                <img src={story.image} alt={story.name} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-3">{story.name}</h3>
                  <p className="text-gray-600">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold">Moments of Impact</h2>
          
          <div className="flex gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-accent text-white' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-3xl overflow-hidden shadow-sm cursor-pointer group"
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt="Gallery" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Foundation Timeline */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <div className="space-y-12">
          {[
            { year: "2022", event: "Foundation founded by Chris Evans after his own experience of vulnerability." },
            { year: "2023", event: "First 200 elders supported with food and medical aid." },
            { year: "2024", event: "Music Therapy program launched, reaching 500 elders." },
            { year: "2025", event: "Expanded to 12 districts across Uganda." },
            { year: "2026", event: "1,200+ elders supported and growing." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="w-20 text-right font-bold text-accent text-xl">{item.year}</div>
              <div className="flex-1 border-l-2 border-accent pl-8 pb-8">
                <p className="text-lg">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage & Programs */}
      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Reach & Impact</h2>
            <p className="text-xl text-gray-600 max-w-md mx-auto">Every number tells a story of lives transformed.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Coverage */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <h3 className="text-3xl font-bold mb-10">Our Coverage</h3>
                <div className="space-y-12">
                  {[
                    { label: "Districts Across Uganda", value: 12, max: 12 },
                    { label: "Elders & Orphans Supported", value: 1200, max: 1500 },
                    { label: "Meals Provided", value: 45000, max: 60000 },
                    { label: "Medical Aids Delivered", value: 850, max: 1000 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-3">
                        <span className="font-medium text-gray-700">{item.label}</span>
                        <span className="font-mono text-accent">{item.value.toLocaleString()}</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-orange-600 transition-all duration-1000"
                          style={{ width: `${(item.value / item.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Programs */}
            <div className="lg:col-span-7">
              <h3 className="text-3xl font-bold mb-10">Our Key Programs</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Home Care & Nutrition", desc: "Regular home visits, nutritious meals, and daily support for vulnerable elders and orphans." },
                  { title: "Medical & Health Support", desc: "Medicine, checkups, hospital transport, and emergency medical aid." },
                  { title: "Music Therapy", desc: "Weekly sessions that bring emotional healing, joy, and memory revival." },
                  { title: "Community Connection", desc: "Events, gatherings, and social programs to reduce isolation." }
                ].map((program, i) => (
                  <div key={i} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow transition-all group">
                    <h4 className="font-semibold text-2xl mb-4 group-hover:text-accent transition">{program.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{program.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Full view" className="w-full rounded-3xl" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-2xl"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;