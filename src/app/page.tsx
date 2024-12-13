import About from "@/components/main/About";
import Hero from "@/components/main/Hero";

const page = () => {
  return (
    <main className="h-full w-full px-16 ">
      <div className="flex px-20 flex-col h-[] gap-20">
        <Hero />
        <About />
      </div>
    </main>
  );
};

export default page;
