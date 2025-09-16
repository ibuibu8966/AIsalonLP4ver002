'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 動画をループ再生
    video.play().catch(error => {
      console.log('Auto-play was prevented:', error)
    })
  }, [])

  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          AI×プログラミングサロン
        </div>
        <h1 className="hero-title">
          <span className="title-line">未来のスキルを身につけ、</span>
          <span className="title-line accent-text">キャリアを加速させよう</span>
        </h1>
        <div className="hero-description">
          <p>毎日の作業、もっと楽にできるはずなのに...</p>
          <p>明日の業務から使える"武器"を手に入れて、働き方を変えてみませんか？</p>
        </div>
        <div className="hero-cta">
          <a href="#cta" className="cta-primary">
            <span>今すぐ始める</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#features" className="cta-secondary">
            <span>詳細を見る</span>
            <i className="fas fa-play"></i>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">30日</span>
            <span className="stat-label">で実用ツール完成</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">90日</span>
            <span className="stat-label">で副業レベル到達</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2-3h</span>
            <span className="stat-label">毎日の時短を実現</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-elements">
          <div className="float-item" data-float="1">
            <i className="fab fa-python"></i>
          </div>
          <div className="float-item" data-float="2">
            <i className="fab fa-js"></i>
          </div>
          <div className="float-item" data-float="3">
            <i className="fas fa-robot"></i>
          </div>
          <div className="float-item" data-float="4">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="float-item" data-float="5">
            <i className="fas fa-brain"></i>
          </div>
        </div>
      </div>
    </section>
  )
}