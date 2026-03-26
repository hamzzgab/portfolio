import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import LeetCode from "@/components/LeetCode";
import Education from "@/components/Education";
import CurrentWork from "@/components/CurrentWork";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <LeetCode />
        <Education />
        <CurrentWork />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
