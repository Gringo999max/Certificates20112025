import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface RotatingRecipientProps {
  words: string[]
  className?: string
  interval?: number
}

export function RotatingRecipient({ 
  words, 
  className = '',
  interval = 2500 
}: RotatingRecipientProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className={`inline-block relative ${className}`} style={{ minWidth: '200px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
