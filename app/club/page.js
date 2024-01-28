import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import FreelanceHeader from "@/components/Headers/FreelanceHeader";
import AboutUs from "@/components/AboutUs/AboutUs5";

export const metadata = {
  title: "RespectGroup Club",
};

export default function PortfolioPage() {
  return (
    <>
      <Loading />
      {/* <Navbar /> */}
      <FreelanceHeader />
      <AboutUs />
      {/* <Blogs /> */}
      {/* <Portfolio/> */}
      {/* <Services />
     
      <Works />
      <AboutUs /> */}
      {/* <FullTestimonials showHead />
      <ContactForm noLine /> */}
      {/* <Footer /> */}
    </>
  );
}
