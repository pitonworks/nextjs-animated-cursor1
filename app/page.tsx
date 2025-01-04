'use client'

import { motion } from 'framer-motion'
import Scene from './components/Scene'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Gradient Background */}
      <div className="gradient-bg" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-sm uppercase tracking-wider"
          >
            INTRODUCTION
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl sm:text-7xl font-bold mt-2 mb-6"
          >
            Overview.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg max-w-3xl leading-relaxed"
          >
            I'm a skilled Full Stack software developer with experience in TypeScript and JavaScript,
            and expertise in frameworks like React, Node.js, MongoDB and Express.js. I'm a quick
            learner and collaborate closely with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {/* Frontend Developer Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-dark-bg p-8 rounded-xl border border-secondary/20 relative group"
          >
            <div className="w-20 h-20 mb-6 canvas-container">
              <Scene type="frontend" />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
            <p className="text-gray-400">Building responsive and interactive user interfaces</p>
          </motion.div>

          {/* React.js Developer Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-dark-bg p-8 rounded-xl border border-secondary/20 relative group"
          >
            <div className="w-20 h-20 mb-6 canvas-container">
              <Scene type="react" />
            </div>
            <h3 className="text-xl font-bold mb-2">React.js Developer</h3>
            <p className="text-gray-400">Creating modern and dynamic web applications</p>
          </motion.div>

          {/* Backend Developer Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-dark-bg p-8 rounded-xl border border-secondary/20 relative group"
          >
            <div className="w-20 h-20 mb-6 canvas-container">
              <Scene type="backend" />
            </div>
            <h3 className="text-xl font-bold mb-2">Backend Developer</h3>
            <p className="text-gray-400">Developing robust server-side solutions</p>
          </motion.div>

          {/* Full Stack Developer Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-dark-bg p-8 rounded-xl border border-secondary/20 relative group"
          >
            <div className="w-20 h-20 mb-6 canvas-container">
              <Scene type="fullstack" />
            </div>
            <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
            <p className="text-gray-400">End-to-end development and system architecture</p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
