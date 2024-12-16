import About from "@/components/module/about-page/About";
import Hero from "@/components/module/home-page/Hero";

const page = () => {
  return (
    <main className="h-full w-full px-0 lg:px-20 ">
      <div className="grid md:px-20 grid-col gap-0 ">
        <Hero />
        <About />
      </div>
    </main>
  );
};

export default page;
