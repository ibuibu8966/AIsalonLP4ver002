'use client'

import { useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  videoSrc: string
  className?: string
}

export default function VideoBackground({ videoSrc, className = '' }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(error => {
      console.log('Auto-play was prevented:', error)
    })
  }, [])

  return (
    <div className={`video-background-container ${className}`}>
      <video
        ref={videoRef}
        className="video-background"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="video-background-overlay"></div>
    </div>
  )
}