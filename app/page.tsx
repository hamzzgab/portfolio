import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
// import CurrentWork from "@/components/CurrentWork";
// import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="content-elevated max-w-2xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Education />
        {/* <CurrentWork /> */}
        {/* <Blog /> */}
        <Footer />
      </main>
    </>
  );
}
