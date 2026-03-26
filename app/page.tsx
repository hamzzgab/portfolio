import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Education />
      <Footer />
    </main>
  );
}
