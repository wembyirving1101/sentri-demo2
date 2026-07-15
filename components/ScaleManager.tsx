'use client'

import { useEffect } from 'react'

export default function ScaleManager() {
  useEffect(() => {
    const gameScreen = document.querySelector('.game-screen') as HTMLElement
    if (!gameScreen) return

    const updateScale = () => {
      const scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
      )
      gameScreen.style.transform = `scale(${scale})`
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return null
}
