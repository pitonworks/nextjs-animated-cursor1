'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold text-secondary">
              Portfolio
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group ${
                      pathname === item.path ? 'text-secondary' : 'text-light-text hover:text-secondary'
                    }`}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 