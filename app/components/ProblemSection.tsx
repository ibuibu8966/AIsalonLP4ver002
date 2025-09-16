import VideoBackground from './VideoBackground'

export default function ProblemSection() {
  return (
    <section className="problem">
      <VideoBackground videoSrc="/videos/background-1.mp4" />
      <div className="container">
        <h2 className="section-title"><span>毎日の作業、<span className="highlight-coral">もっと楽にできる</span>はずなのに...</span></h2>
        <div className="problem-grid">
          <div className="problem-item">
            <div className="problem-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3><span className="highlight-text">AIツール</span>は知っているけど、<span className="highlight-underline">うまく使いこなせない</span></h3>
          </div>
          <div className="problem-item">
            <div className="problem-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3><span className="highlight-text">プログラミング</span>に興味はあるけど、<span className="highlight-underline">何から始めればいいかわからない</span></h3>
          </div>
          <div className="problem-item">
            <div className="problem-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3><span className="highlight-text">効率化</span>したいけど、<span className="highlight-underline">具体的な方法が見つからない</span></h3>
          </div>
        </div>
        <div className="solution-text">
          <p><strong>そんなあなたのために、<span className="highlight-gradient">「学ぶ」で終わらせない実践的なサロン</span>を用意しました。</strong></p>
          <p>明日の業務から使える<span className="highlight-gold">"武器"</span>を手に入れて、<span className="highlight-coral">働き方を変えて</span>みませんか？</p>
        </div>
      </div>
    </section>
  )
}