import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received."); 
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Side - Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <span className="uppercase tracking-[0.25em] text-accent font-semibold">Let's Connect</span>
              <h2 className="text-5xl font-bold mt-4 leading-tight">We'd Love to Hear From You</h2>
              <p className="text-gray-600 mt-6 text-lg">
                Whether you want to volunteer, donate, or partner with us — reach out. 
                We reply within 24 hours.
              </p>

              <div className="mt-12 space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Head Office</p>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Plot 45, Namuwongo Road<br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Call Us</p>
                    <p className="text-gray-600 mt-2">+256 700 123 456</p>
                    <p className="text-gray-600">+256 755 789 012</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <a href="mailto:hello@elderlyhope.org" className="text-gray-600 hover:text-accent transition-colors">
                      hello@elderlyhope.org
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Office Hours</p>
                    <p className="text-gray-600 mt-2">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-10 md:p-14">
              <h3 className="text-3xl font-semibold mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-accent focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-accent focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-accent focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    required
                    className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-accent focus:outline-none transition-all resize-y min-h-[160px]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-accent text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 mt-4"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;