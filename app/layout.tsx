'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-light-text relative min-h-screen`}>
        <div className="fixed inset-0 bg-gradient-radial from-primary to-dark-bg -z-10" />
        
        <motion.div
          className="cursor hidden md:block fixed w-6 h-6 bg-secondary rounded-full mix-blend-difference pointer-events-none"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 250,
            mass: 0.5
          }}
        />
        
        <Navigation />
        {children}
      </body>
    </html>
  )
}
