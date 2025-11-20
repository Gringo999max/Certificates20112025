import React, { useState, useEffect } from 'react'

interface TypewriterTextProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function TypewriterText({ 
  words, 
  className = '', 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  pauseTime = 2000 
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const deleteTimer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(deleteTimer)
      } else {
        setIsDeleting(false)
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      }
    } else {
      if (currentText.length < currentWord.length) {
        const typeTimer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(typeTimer)
      } else {
        setIsPaused(true)
      }
    }
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={`${className} inline-flex items-center`}>
      {currentText}
      <span className="animate-pulse ml-1 text-emerald-600">|</span>
    </span>
  )
}