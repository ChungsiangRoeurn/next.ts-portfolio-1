'use client'

import AboutCards from '@/components/sub/AboutCard'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../../../utils/motion'
import AboutDetails from '../../sub/AboutDetails'
import { BorderTrail } from '../../ui/border-trail'

const About = () => {
  return (
    <section
      id="about-page"
      className="mt-20 md:mt-40 lg:mt-0 flex flex-col items-center justify-center"
    >
      <div
        style={{ transform: 'scale(0.9' }}
        className="flex flex-col items-center justify-center h-full relative overflow-hidden"
      >
        <div className="w-full mt-20 lg:mt-0 h-auto flex flex-col items-center ">
          <motion.div
            variants={slideInFromTop}
            className="flex items-center rounded-full py-2 px-3 border border-purple-400 opacity-90"
          >
            <h1 id="about" className="text-purple-300 text-sm sm:text-base">
              About Me
            </h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-medium mt-[10px] text-center mb-10"
          >
            Passion-driven ideas creating modern web applications.
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row items-cent justify-center w-full gap-16 lg:gap-28">
        <div className="relative flex items-center justify-center h-[300px] w-[300px] lg:h-[550px] lg:w-[550px] overflow-hidden rounded-3xl border border-zinc-950/10 text-zinc-700 outline-none dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300">
          <AboutCards />
        </div>
        <div className="relative h-[300px] w-[450px] lg:h-[490px] lg:w-[700px] overflow-hidden rounded-3xl border-zinc-950/10 text-zinc-700 outline-none dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300">
          <AboutDetails />
          <BorderTrail
            className="bg-gradient-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
            size={300}
          />
        </div>
      </div>
    </section>
  )
}

export default About
