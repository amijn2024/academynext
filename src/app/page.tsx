import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyUs from "@/components/WhyUs";
import InfiniteCards from "@/components/InfiniteCards";
import Instructors from "@/components/Instructors";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     
      <HeroSection />
      <FeaturedCourses />
      
      <InfiniteCards />
      <Instructors />
      <UpcomingWebiners />
      <Footer />
          </main>

  );
}
