'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    image: 'https://placehold.co/600x400/1a365d/ffffff?text=E-Commerce+Platform',
    link: '#',
  },
  {
    title: '3D Portfolio',
    description: 'Interactive portfolio website with Three.js animations and effects.',
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    image: 'https://placehold.co/600x400/1a365d/ffffff?text=3D+Portfolio',
    link: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time dashboard for social media analytics and monitoring.',
    tech: ['React', 'Node.js', 'Socket.io', 'Chart.js'],
    image: 'https://placehold.co/600x400/1a365d/ffffff?text=Social+Media+Dashboard',
    link: '#',
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">
            My <span className="text-secondary">Projects</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-dark-bg/50 rounded-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors duration-300" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-secondary/10 text-secondary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-secondary text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
} 