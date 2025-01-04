'use client'

import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Scene from './components/Scene'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-950">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Scene />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-center mt-32"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            Creative Developer
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
            Building amazing web experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative z-10 mb-12"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            View Projects
          </button>
        </motion.div>
      </main>
    </>
  )
}
