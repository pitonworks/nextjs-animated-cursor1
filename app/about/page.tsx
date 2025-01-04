'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Three.js', level: 75 },
  { name: 'Node.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
]

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading the frontend development team and implementing modern web solutions.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Developed and maintained various web applications using React and Node.js.',
  },
]

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">
            About <span className="text-secondary">Me</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none mb-12"
          >
            <p className="text-lg text-gray-300">
              I am a passionate developer with expertise in building modern web applications.
              With a strong foundation in frontend development and a keen eye for design,
              I create engaging user experiences that combine aesthetics with functionality.
            </p>
          </motion.div>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-bg/50 p-4 rounded-lg"
                >
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-secondary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-secondary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-dark-bg/50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-secondary">{exp.title}</h3>
                  <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  )
} 