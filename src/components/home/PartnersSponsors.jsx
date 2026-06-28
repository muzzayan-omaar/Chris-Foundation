import { motion } from "framer-motion";

const partners = [
  { name: "Ministry of Health", logo: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609057/MoH-Logo_fimqx5.png" },
  { name: "UNICEF", logo: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609057/UNICEF-Emblem_sgun85.webp" },
  { name: "World Food Programme", logo: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609057/World_Food_Programme_Logo_Simple.svg_j8wuxn.png" },
  { name: "Rotary International", logo: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609057/rotary-mark_ouw1hc.png" },
  { name: "Kampala City Council", logo: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609057/KCCA250_obxwa4.png" },
  { name: "AAR Healthcare", logo: "https://res.cloudinary.com/diszilwhc/image/upload/v1782609057/cropped-mobile-logo2_tsohrx.png" },
];

const PartnersSponsors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="uppercase tracking-widest text-sm font-semibold text-accent">Trusted By</span>
          <h2 className="text-4xl font-bold mt-3">Partners & Sponsors</h2>
          <p className="text-gray-600 mt-4">Working together to serve our elderly community with dignity</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-75 hover:opacity-100 transition-opacity">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="flex justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSponsors;