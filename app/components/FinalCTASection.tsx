export default function FinalCTASection() {
  return (
    <section id="cta" className="final-cta">
      <div className="container">
        <h2>今すぐ始めて、3ヶ月後の成長した自分に出会いましょう。</h2>
        <p>決済は <strong>ロボットペイ</strong> を利用します。お申し込み完了後、Discordの招待リンクとウェルカムガイドをお送りします。</p>

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
            <span>安心のサポート体制</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-clock"></i>
            <span>即日スタート可能</span>
          </div>
          <div className="benefit-item">
            <i className="fas fa-users"></i>
            <span>コミュニティ学習</span>
          </div>
        </div>
      </div>
    </section>
  )
}