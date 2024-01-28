//= Global Styles
import "@/styles/main.scss";
import "@/styles/globals.css";
import "@/styles/preloader.css";
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import Script from "next/script";
// import "react-circular-progressbar/dist/styles.css";
//= Scripts
import generateStylesheetObject from "@/common/generateStylesheetsObject";
//= Common Components
import ProgressScroll from "@/components/Common/ProgressScroll";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "RespectorGroup",
  title: "Respector Group Club",
  description: "Respector Group Club Page",
  keywords: [
    "RespectorGroup",
    "Respect Club",
    "Respect",
    "Real estate",
    "greece",
  ],
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    other: generateStylesheetObject([
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
      "/css/dark.css",
    ]),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ProgressScroll />
        {children}
        <Footer />
        <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
        <Script
          strategy="beforeInteractive"
          src="/js/splitting.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/js/simpleParallax.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/js/isotope.pkgd.min.js"
        ></Script>
        <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
        <Script strategy="lazyOnload" src="/js/wowInit.js"></Script>
      </body>
    </html>
  );
}
