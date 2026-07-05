import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, MapPin, Award, Calendar } from "lucide-react";

const programs = [
  { id: "all", label: "All Projects", icon: null },
  { id: "food", label: "Food & Nutrition" },
  { id: "medical", label: "Medical Outreach" },
  { id: "home", label: "Home Renovation" },
  { id: "community", label: "Community Support" },
];

const projects = [
  {
    id: 1,
    category: "food",
    title: "Monthly Meal Distribution",
    location: "Kampala Elderly Home",
    image: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609398/15_yb4pje.webp",
    date: "March 2025",
    fullDescription: "We delivered nutritious hot meals and food packages to 187 elderly residents who struggle with mobility and cooking. Just as my grandmother struggled to feed me after losing my parents at 13, we now stand with elders who face hunger daily.",
    summaryPoints: [
      "187 beneficiaries reached",
      "Fresh vegetables and proteins included in every pack",
      "Delivered directly to homes for those with limited mobility",
      "Partnership with local nutritionists"
    ],
    outcomes: [
      "Improved nutrition levels reported by 92% of participants",
      "Reduced food insecurity in the community",
      "Stronger relationship with local leaders"
    ],
    achievements: "Successfully completed 14 consecutive months of distribution"
  },
  {
    id: 2,
    category: "food",
    title: "Nutrition Workshop",
    location: "Nakawa Community Center",
    image: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609398/15_yb4pje.webp",
    date: "February 2025",
    fullDescription: "Interactive workshop teaching elderly participants how to prepare affordable, nutritious meals using locally available ingredients.",
    summaryPoints: [
      "68 elderly participants",
      "Hands-on cooking demonstrations",
      "Recipe booklets distributed",
      "Follow-up support provided"
    ],
    outcomes: [
      "Participants gained practical cooking skills",
      "Increased confidence in meal preparation"
    ],
    achievements: "85% of attendees reported using the learned recipes at home"
  },
  {
    id: 4,
    category: "medical",
    title: "Free Health Camp",
    location: "Wakiso District",
    image: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609400/Medical-Outreach-5_uifcuv.jpg",
    date: "April 2025",
    fullDescription: "Comprehensive medical outreach providing free health screenings, consultations, and medication to elderly residents.",
    summaryPoints: [
      "124 elderly patients served",
      "Blood pressure & sugar screenings",
      "Free medication dispensed",
      "Follow-up appointments scheduled"
    ],
    outcomes: [
      "Early detection of chronic conditions",
      "Improved access to healthcare"
    ],
    achievements: "Partnered with 12 volunteer doctors and nurses"
  },
  {
    id: 6,
    category: "home",
    title: "Safe Home Makeover",
    location: "Nansana",
    image: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609401/web_KCSE_2_qvi9ma.jpg",
    date: "April 2025",
    fullDescription: "Complete home renovation focused on safety and dignity for elderly residents living alone.",
    summaryPoints: [
      "Non-slip flooring installed",
      "Grab bars in bathroom",
      "Better lighting throughout",
      "Kitchen accessibility improvements"
    ],
    outcomes: ["Safer living environment", "Increased independence"],
    achievements: "Transformed 3 homes this quarter"
  },
  {
    id: 8,
    category: "community",
    title: "Senior Social Gathering",
    location: "Lubaga Community Hall",
    image: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609400/IMG_0646_durau6.jpg",
    date: "April 2025",
    fullDescription: "Monthly social events designed to reduce loneliness and build meaningful connections among seniors.",
    summaryPoints: [
      "92 elderly attendees",
      "Music, games and storytelling",
      "Refreshments served",
      "Transportation provided"
    ],
    outcomes: ["Reduced feelings of isolation", "New friendships formed"],
    achievements: "Highest attendance recorded this year"
  },
];

const ProgramsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Filters */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-accent font-semibold text-sm">Our Impact</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-900">Programs Gallery</h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Browse real stories and moments from our programs bringing dignity and joy to elderly lives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {programs.map((program) => (
            <motion.button
              key={program.id}
              onClick={() => setActiveFilter(program.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-3.5 rounded-2xl font-medium transition-all ${
                activeFilter === program.id 
                  ? "bg-accent text-white shadow-lg" 
                  : "bg-white hover:bg-gray-100 border border-gray-200 text-gray-700"
              }`}
            >
              {program.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3] bg-gray-100 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="uppercase tracking-widest text-xs text-accent mb-2">{project.date}</div>
                <h3 className="text-2xl font-semibold leading-tight mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.location}</p>
              </div>

              <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/90 text-black text-xs font-medium rounded-full">
                {programs.find(p => p.id === project.category)?.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelectedProject(null)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white max-w-4xl w-full rounded-3xl overflow-hidden max-h-[95vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                {/* Modal Image */}
                <div className="relative h-96">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-10">
                  <div className="flex items-center gap-3 text-accent mb-2">
                    <Calendar size={18} />
                    <span>{selectedProject.date}</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-2 text-gray-500 mb-8">
                    <MapPin size={18} />
                    <span>{selectedProject.location}</span>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-10">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Summary Points */}
                  <div className="mb-10">
                    <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                      <Award className="text-accent" /> Project Summary
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.summaryPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes & Achievements */}
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Outcomes</h4>
                      <ul className="space-y-3">
                        {selectedProject.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-green-500">✓</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Key Achievements</h4>
                      <p className="text-gray-700 leading-relaxed border-l-4 border-accent pl-6 py-1">
                        {selectedProject.achievements}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramsGallery;