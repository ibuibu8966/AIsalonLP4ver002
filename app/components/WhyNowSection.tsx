export default function WhyNowSection() {
  return (
    <section className="why-now">
      <div className="container">
        <h2 className="section-title"><span>なぜ今、AIとプログラミングなのか</span></h2>
        <p className="section-subtitle">時代の転換点に立つ今、準備をするかしないかで大きな差が生まれています。</p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-brain"></i>
            </div>
            <div className="timeline-content">
              <h3>AI革命の到来</h3>
              <p>ChatGPTをはじめとする生成AIが業務を劇的に変えている</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-robot"></i>
            </div>
            <div className="timeline-content">
              <h3>自動化のニーズ</h3>
              <p>単純作業を自動化し、創造的な仕事に集中する時代へ</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="timeline-content">
              <h3>スキル格差の拡大</h3>
              <p>AI・プログラミングを使える人とそうでない人の差が急拡大</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="timeline-content">
              <h3>市場価値の向上</h3>
              <p>実装力とAI活用スキルを持つ人材への需要が急上昇</p>
            </div>
          </div>
        </div>

        <div className="cta-highlight">
          <p>今学び始めれば、数年後には圧倒的なアドバンテージを手にできます。</p>
        </div>
      </div>
    </section>
  )
}