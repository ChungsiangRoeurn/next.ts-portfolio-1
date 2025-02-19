import Footer from '@/components/global/Footer'
import About from '@/components/module/about-page/page'
import Hero from '@/components/module/home-page/page'
import Projects from '@/components/module/projects-page/page'
import Skills from '@/components/module/skills-page/page'

const page = () => {
  return (
    <main className="h-full w-full px-0">
      <div className="grid grid-col ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}

export default page
