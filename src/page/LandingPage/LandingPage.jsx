import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import YoutubeChannel from "../../components/YoutubeChannel/YoutubeChannel";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyUs from "../../components/WhyUs/WhyUs";
import ContactUsMain from "../../components/ContactUsMain/ContactUsMain";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <YoutubeChannel />
      <WhyUs />
      <Testimonials />
      <ContactUsMain />
    </div>
  );
}

export default LandingPage;
