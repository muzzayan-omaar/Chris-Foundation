import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 2500);
    }
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

          <div className="mx-auto w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-8">
            <Mail className="w-10 h-10 text-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Stay Connected With Us
          </h2>


          {!subscribed ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-7 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-accent transition-all text-base"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-10 py-5 bg-accent hover:bg-accent/90 text-white font-semibold rounded-2xl flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-600 font-medium text-xl py-6 flex items-center justify-center gap-3"
            >
              <Sparkles className="w-6 h-6" />
              Thank you! You’re now part of our family 
            </motion.div>
          )}

          <p className="text-gray-500 text-sm mt-8">
            Monthly updates • No spam • Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;