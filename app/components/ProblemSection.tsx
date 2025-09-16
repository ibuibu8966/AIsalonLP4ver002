import VideoBackground from './VideoBackground'

export default function ProblemSection() {
  return (
    <section className="problem">
      <VideoBackground videoSrc="/videos/background-1.mp4" />
      <div className="container">
        <h2 className="section-title"><span>毎日の作業、もっと楽にできるはずなのに...</span></h2>
        <div className="problem-grid">
          <div className="problem-item">
            <div className="problem-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>AIツールは知っているけど、うまく使いこなせない</h3>
          </div>
          <div className="problem-item">
            <div className="problem-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>プログラミングに興味はあるけど、何から始めればいいかわからない</h3>
          </div>
          <div className="problem-item">
            <div className="problem-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>効率化したいけど、具体的な方法が見つからない</h3>
          </div>
        </div>
        <div className="solution-text">
          <p><strong>そんなあなたのために、「学ぶ」で終わらせない実践的なサロンを用意しました。</strong></p>
          <p>明日の業務から使える"武器"を手に入れて、働き方を変えてみませんか？</p>
        </div>
      </div>
    </section>
  )
}