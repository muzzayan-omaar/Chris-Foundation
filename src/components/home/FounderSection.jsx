import { motion } from "framer-motion";
import { Play, Quote, Heart } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="relative py-24 bg-[#faf8f5] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-accent font-semibold text-sm">
            A Message From The Founder
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
            Every Life Deserves
            <span className="text-accent"> Love & Dignity</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">

              {/* Accent Ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-orange-300" />

              {/* Image */}
              <img
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1782566164/evans_c4dwlz.jpg"
                alt="Founder"
                className="w-[350px] h-[350px] object-cover rounded-full shadow-2xl"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4"
              >
                <p className="text-sm font-semibold text-gray-900">
                  Serving Uganda
                </p>
                <p className="text-xs text-gray-500">
                  One Elder & Orphan at a Time
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <Quote
              className="text-accent mb-6"
              size={42}
            />

            <blockquote className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              "A Ugandan musician with multiple national awards, Chris Evans founded this organization after his own experience of vulnerability."
            </blockquote>

            <p className="mt-8 text-gray-600 text-lg leading-8">
              After losing his parents at 13, he was raised by his grandmother who struggled to send him to school. 
              She took him to Masooli Secondary School in Kasangati, where the headmaster, Mr. Kakulira Ernest, heard her plea and enrolled him as a school dependant. 
              In return, Chris did manual jobs — farming, building class blocks, brick laying — to pay for his education.
            </p>

            <div className="mt-10">
              <h4 className="text-2xl font-bold text-gray-900">
                Chris Evans Kaweesi
              </h4>

              <p className="text-accent font-medium mt-1">
                Award-winning Musician & Founder
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 inline-flex items-center gap-3 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all"
            >
              <Play size={20} />
              Watch Full Message
            </motion.button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;