'use client'

import { motion } from 'framer-motion'
import { slideInFromLeft } from '../../../../utils/motion'
import Terminal from '../../sub/Terminal'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex h-screen w-full items-center flex-col lg:flex-row justify-center md:px-10 lg:px-20"
    >
      {/* Left Section */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/2 mt-44 lg:mt-0 p-6 rounded-lg">
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 mt-6 text-3xl md:text-7xl font-bold text-white max-w-[600px]"
        >
          <span>
            I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
              ROEURN CHUNGSIANG
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg text-gray-300 mt-4 lg:mt-6 max-w-[600px] lg:w-[450px]"
        >
          As a Full Stack Software Developer, I have extensive experience in building websites,
          mobile applications, and software solutions. You can view my resume below.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="https://drive.google.com/file/d/1tBWcSE-5uEfr8t6gAqV43ztMkumnQoMU/view?usp=sharing"
          target="_blank"
          className="py-2 button-primary px-4 mt-6 bg-local rounded-full text-center text-gray-500 font-semibold max-w-[200px]"
        >
          View Resume!
        </motion.a>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center mt-8">
        <Terminal />
      </div>
    </section>
  )
}

export default Hero
