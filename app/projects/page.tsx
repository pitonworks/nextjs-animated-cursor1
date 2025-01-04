'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Image from 'next/image'

const projects = [
  {
    title: '3D Portfolio',
    description: 'A modern portfolio website with Three.js animations',
    image: '/project1.jpg',
    tags: ['Next.js', 'Three.js', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with real-time updates',
    image: '/project2.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard with interactive visualizations',
    image: '/project3.jpg',
    tags: ['Vue.js', 'D3.js', 'Firebase'],
    link: '#'
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile application for task management',
    image: '/project4.jpg',
    tags: ['React Native', 'Redux', 'AWS'],
    link: '#'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Projects() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collection of my recent work and experiments
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  )
} 