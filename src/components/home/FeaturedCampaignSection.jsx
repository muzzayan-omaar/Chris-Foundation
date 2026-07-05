import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Utensils,
  Stethoscope,
  ArrowRight,
  Target,
  CalendarDays,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const timeline = [
  {
    title: "Emergency Food Drive",
    date: "Ends in 12 Days",
    status: "ACTIVE",
    color: "bg-green-500",
  },
  {
    title: "Medical Outreach",
    date: "20 August 2026",
    status: "COMING SOON",
    color: "bg-orange-500",
  },
  {
    title: "Home Renovation",
    date: "September 2026",
    status: "PLANNED",
    color: "bg-blue-500",
  },
  {
    title: "Christmas Gift Drive",
    date: "December 2026",
    status: "UPCOMING",
    color: "bg-purple-500",
  },
];

const FeaturedCampaignSection = () => {
  const raised = 31500000;
  const goal = 50000000;
  const progress = (raised / goal) * 100;

  return (
    <section className="py-28 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[0.25em] text-accent font-semibold">
            Our Campaigns
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
            From Struggle to Hope
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Just as my grandfather struggled to raise me after losing my parents at 13, 
            we now stand with elders and orphans who face the same hardship. 
            Your support turns vulnerability into strength.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-[36px] overflow-hidden shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative h-[420px] overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: .7 }}
                src="https://res.cloudinary.com/diszilwhc/image/upload/v1782609398/15_yb4pje.webp"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>

              <div className="absolute top-7 left-7 bg-accent text-white px-5 py-2 rounded-full flex items-center gap-2 font-semibold">
                Active Campaign
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-10">

              <h3 className="text-4xl font-bold text-gray-900">
                Emergency Food Drive
              </h3>

              <p className="mt-5 text-gray-600 leading-8 text-lg">
                Help provide nutritious meals and essential supplies to over
                2,000 elderly people who struggle to access daily food.
              </p>

              {/* PROGRESS */}
              <div className="mt-10">
                <div className="flex justify-between mb-3 text-sm font-medium">
                  <span>Raised</span>
                  <span>{progress.toFixed(0)}%</span>
                </div>

                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${progress}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                    }}
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                  />
                </div>
              </div>

              {/* AMOUNTS */}
              <div className="flex justify-between mt-8">
                <div>
                  <p className="text-gray-500">Raised</p>
                  <h4 className="text-2xl font-bold">
                    UGX {raised.toLocaleString()}
                  </h4>
                </div>

                <div className="text-right">
                  <p className="text-gray-500">Goal</p>
                  <h4 className="text-2xl font-bold">
                    UGX {goal.toLocaleString()}
                  </h4>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="bg-[#faf8f5] rounded-2xl p-5">
                  <Users className="text-accent mb-3"/>
                  <h5 className="font-bold text-xl">150</h5>
                  <p className="text-sm text-gray-500">Donors</p>
                </div>

                <div className="bg-[#faf8f5] rounded-2xl p-5">
                  <Target className="text-accent mb-3"/>
                  <h5 className="font-bold text-xl">2,000</h5>
                  <p className="text-sm text-gray-500">Elders</p>
                </div>

                <div className="bg-[#faf8f5] rounded-2xl p-5">
                  <CalendarDays className="text-accent mb-3"/>
                  <h5 className="font-bold text-xl">12</h5>
                  <p className="text-sm text-gray-500">Days Left</p>
                </div>
              </div>

              <Link to="/donate">
                <motion.button
                  whileHover={{ scale:1.03 }}
                  whileTap={{ scale:.98 }}
                  className="mt-10 bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3"
                >
                  <Heart size={20}/>
                  Donate Now
                </motion.button>
              </Link>

            </div>

          </motion.div>

          {/* TIMELINE */}
          <motion.div
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            className="bg-white rounded-[36px] shadow-xl p-10"
          >

            <h3 className="text-3xl font-bold text-gray-900">
              Campaign Journey
            </h3>

            <p className="text-gray-500 mt-3 mb-10">
              Follow our upcoming initiatives.
            </p>

            <div className="relative border-l-2 border-gray-200 ml-3">

              {timeline.map((item,index)=>(
                <motion.div
                  whileHover={{ x:8 }}
                  key={index}
                  className="relative pl-8 pb-10"
                >
                  <div
                    className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full ${item.color}`}
                  />

                  <span className="text-xs font-semibold text-accent">
                    {item.status}
                  </span>

                  <h4 className="mt-2 text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-gray-500">
                    {item.date}
                  </p>

                  <button className="mt-4 flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight size={18}/>
                  </button>
                </motion.div>
              ))}

            </div>

            <Link to="/campaigns">
              <button className="w-full mt-6 border-2 border-accent text-accent py-4 rounded-2xl font-semibold hover:bg-accent hover:text-white transition-all">
                View All Campaigns
              </button>
            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedCampaignSection;