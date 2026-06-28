import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Utensils,
  Stethoscope,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "4,280+",
    label: "Elders Supported",
  },
  {
    icon: Utensils,
    value: "96,000+",
    label: "Meals Served",
  },
  {
    icon: Stethoscope,
    value: "1,850+",
    label: "Medical Visits",
  },
  {
    icon: HeartHandshake,
    value: "$850K",
    label: "Donations Raised",
  },
];

const ImpactStatsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-widest uppercase">
            Our Impact
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Every Number Represents
            <span className="text-accent"> A Life Changed</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Through the generosity of our supporters, we've been able to
            restore dignity, provide care, and bring hope to thousands of
            elderly people.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-[#faf8f5] rounded-3xl p-10 shadow-lg border border-gray-100 text-center transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center mx-auto shadow-lg">
                  <Icon size={36} />
                </div>

                <h3 className="text-5xl font-bold text-gray-900 mt-8">
                  {item.value}
                </h3>

                <p className="mt-4 text-gray-600 text-lg">
                  {item.label}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;