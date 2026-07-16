'use client'

import { useEffect, useRef, useState } from 'react'

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      const audio = new Audio('/music/gameplay-ost.mp3')
      audio.loop = true
      audio.volume = 0.3 // Set to 30% volume
      audioRef.current = audio
      setIsInitialized(true)
    }

    // Try to play immediately on mount
    if (audioRef.current && !isMuted) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay fails, wait for user interaction
          const handleUserInteraction = () => {
            if (audioRef.current && !isMuted) {
              audioRef.current.play().catch(() => {})
            }
            document.removeEventListener('click', handleUserInteraction)
            document.removeEventListener('keydown', handleUserInteraction)
          }
          document.addEventListener('click', handleUserInteraction)
          document.addEventListener('keydown', handleUserInteraction)
        })
      }
    }

    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {})
      } else {
        audioRef.current.pause()
      }
      setIsMuted(!isMuted)
    }
  }

  return { isMuted, toggleMute }
}
