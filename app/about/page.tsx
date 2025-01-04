'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'

const skills = [
  { name: 'Frontend Development', level: 90 },
  { name: '3D Animation', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Backend Development', level: 75 },
]

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate about creating immersive digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Experience</h2>
              <p className="text-gray-600 dark:text-gray-300">
                With over 5 years of experience in web development, I specialize in creating
                modern, responsive, and interactive web applications using cutting-edge technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Education</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Bachelor's degree in Computer Science with a focus on web technologies
                and interactive media design.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
} 