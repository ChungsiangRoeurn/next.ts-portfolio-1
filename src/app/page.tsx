import Footer from "@/components/global/Footer";
import About from "@/components/module/about-page/About";
import Hero from "@/components/module/home-page/Hero";
import Projects from "@/components/module/projects-page/Projects";
import Skills from "@/components/module/skills-page/Skills";

const page = () => {
  return (
    <main className="h-full w-full px-0 lg:px-20 ">
      <div className="grid md:px-20 grid-col ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default page;
