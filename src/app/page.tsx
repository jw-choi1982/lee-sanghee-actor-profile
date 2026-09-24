import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Filmography from "@/components/Filmography";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Contact />
        <Gallery />
        <Filmography />
      </main>
      <Footer />
    </>
  );
}
