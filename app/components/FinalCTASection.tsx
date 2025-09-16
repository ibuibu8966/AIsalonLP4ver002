export default function FinalCTASection() {
  return (
    <section id="cta" className="final-cta">
      <div className="container">
        <h2>今すぐ始めて、<span className="highlight-gold">3ヶ月後</span>の<span className="highlight-gradient">成長した自分</span>に出会いましょう。</h2>
        <p>決済は <strong className="highlight-teal">ロボットペイ</strong> を利用します。お申し込み完了後、<span className="highlight-purple">Discord</span>の招待リンクとウェルカムガイドをお送りします。</p>

        <div className="cta-button-container">
          <a href="#" className="final-cta-button">
            <span className="button-text">お申し込みはこちら</span>
            <span className="button-icon">
              <i className="fas fa-rocket"></i>
            </span>
          </a>
        </div>

        <div className="cta-benefits">
          <div className="benefit-item">
            <i className="fas fa-shield-alt"></i>
            <span className="highlight-text">安心のサポート体制</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-clock"></i>
            <span className="highlight-text">即日スタート可能</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-users"></i>
            <span className="highlight-text">コミュニティ学習</span>
          </div>
        </div>
      </div>
    </section>
  )
}