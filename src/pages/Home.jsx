import HeroSection from "../components/home/HeroSection";
import FounderSection from "../components/home/FounderSection";
import ImpactStatsSection from "../components/home/ImpactStatsSection";
import FeaturedCampaignSection from "../components/home/FeaturedCampaignSection";
import ProgramsSection from "../components/home/ProgramsSection";
import PartnersSponsors from "../components/home/PartnersSponsors";
import VolunteerCTA from "../components/home/VolunteerCTA";
import Newsletter from "../components/home/Newsletter";
import Contact from "../components/home/Contact";
 
const Home = () => {
  return (
    <>
      <HeroSection />

      <FounderSection />
      <ImpactStatsSection />
      <FeaturedCampaignSection />
      <ProgramsSection />
      <PartnersSponsors />
      <VolunteerCTA />
      <Newsletter />
      <Contact />

 
      
    </>
  );
};

export default Home;