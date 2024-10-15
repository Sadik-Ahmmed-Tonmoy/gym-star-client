'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { useInView } from 'framer-motion'

const lettersAndSymbols = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,'

interface AnimatedTextProps {
  text: string
}

export function RandomizedTextEffect({ text }: AnimatedTextProps) {
  const [animatedText, setAnimatedText] = useState('')
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false }) // Trigger only once when in view

  const getRandomChar = useCallback(
    () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    []
  )

  const animateText = useCallback(async () => {
    const duration = 50
    const revealDuration = 80
    const initialRandomDuration = 300

    const generateRandomText = () =>
      text.split('').map(() => getRandomChar()).join('')

    setAnimatedText(generateRandomText())

    const endTime = Date.now() + initialRandomDuration
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration))
      setAnimatedText(generateRandomText())
    }

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration))
      setAnimatedText((prevText) =>
        text.slice(0, i + 1) +
        prevText
          .slice(i + 1)
          .split('')
          .map(() => getRandomChar())
          .join('')
      )
    }
  }, [text, getRandomChar])

  useEffect(() => {
    if (isInView) {
      animateText()
    }
  }, [isInView, animateText])

  return (
    <div ref={ref} className="relative inline-block">
      {animatedText}
    </div>
  )
}
