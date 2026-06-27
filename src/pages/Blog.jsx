import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [activeTopic, setActiveTopic] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const topics = ['All', 'Impact Stories', 'Programs', 'Elder Care', 'Community', 'Music Therapy'];

  const posts = [
    {
      id: 1,
      title: "How Music Therapy is Healing Elderly Hearts",
      excerpt: "Discover how Chris Evans' music sessions are bringing joy and memories back to seniors.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
      category: "Music Therapy",
      date: "June 25, 2026",
      readTime: "8 min",
      fullStory: "Music has always been a powerful healer. In our programs, we see elders who haven't spoken in months suddenly singing old songs. The emotional connection is undeniable. Our music therapy sessions have transformed lives and brought families closer.",
      featured: true
    },
    {
      id: 2,
      title: "Mama Sarah's Journey from Isolation to Joy",
      excerpt: "One woman's story of how community support changed her life forever.",
      image: "https://images.unsplash.com/photo-1582213782179-c5c7c0b8c3b0",
      category: "Impact Stories",
      date: "June 22, 2026",
      readTime: "6 min",
      fullStory: "Mama Sarah, 78, used to go days without proper meals. Thanks to consistent donations, she now receives nutritious food, medicine, and regular visits. 'I can smile again,' she says. Your support gave her dignity back.",
      featured: false
    },
    {
      id: 3,
      title: "The Importance of Dignity in Elder Care",
      excerpt: "Why treating our elders with respect is the foundation of a compassionate society.",
      image: "https://images.unsplash.com/photo-1559757148-5e995136c87b",
      category: "Elder Care",
      date: "June 18, 2026",
      readTime: "12 min",
      fullStory: "Dignity is not a luxury. It is a right. Our programs focus on treating every elder with the respect and care they deserve. This approach has led to remarkable improvements in mental health and community connection.",
      featured: false
    },
    {
      id: 4,
      title: "Building Inclusive Communities for Seniors",
      excerpt: "How our programs are fostering connection and reducing isolation.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      category: "Community",
      date: "June 15, 2026",
      readTime: "5 min",
      fullStory: "Isolation is one of the biggest challenges facing our elders. Through community events and regular visits, we are rebuilding social connections and creating a sense of belonging for every senior we serve.",
      featured: false
    }
  ];

  const filteredPosts = posts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTopic = activeTopic === 'All' || post.category === activeTopic;
      return matchesSearch && matchesTopic;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
      return new Date(a.date) - new Date(b.date);
    });

  const featuredPost = posts.find(p => p.featured);

  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            onClick={() => setSelectedPost(featuredPost)}
          >
            <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <div className="flex items-center gap-4 text-sm mb-4 text-gray-300">
                <span>{featuredPost.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight mb-4 max-w-2xl">{featuredPost.title}</h1>
              <p className="text-lg text-gray-200 max-w-xl">{featuredPost.excerpt}</p>
            </div>
          </motion.div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Stories</h2>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.filter(p => !p.featured).map(post => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-8">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-2xl leading-tight mb-4 group-hover:text-accent transition">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-3 mb-6">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
              <h3 className="font-bold text-xl mb-6">Topics</h3>
              <div className="flex flex-wrap gap-3">
                {topics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`px-5 py-2 rounded-2xl text-sm font-medium transition-all ${activeTopic === topic ? 'bg-accent text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-6">Newsletter</h3>
              <p className="text-gray-600 mb-6">Get the latest stories and impact updates straight to your inbox.</p>
              <input type="email" placeholder="Your email" className="w-full px-5 py-4 rounded-2xl border border-gray-200 mb-4" />
              <button className="w-full bg-accent text-white py-4 rounded-2xl font-semibold">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Story Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-96 object-cover" />
              <div className="p-12">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{selectedPost.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {selectedPost.readTime}</span>
                </div>
                <h1 className="text-4xl font-bold leading-tight mb-8">{selectedPost.title}</h1>
                <div className="prose text-gray-700 leading-relaxed text-lg">
                  {selectedPost.fullStory}
                </div>
              </div>
              <button onClick={() => setSelectedPost(null)} className="absolute top-6 right-6 bg-white rounded-full p-4 shadow-xl hover:bg-gray-100">
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;