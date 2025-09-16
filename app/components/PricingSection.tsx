export default function PricingSection() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title"><span>料金プラン</span></h2>

        <div className="pricing-card">
          <div className="pricing-header">
            <h3 className="highlight-gradient">ベーシックプラン</h3>
            <div className="price">
              <span className="currency">¥</span>
              <span className="amount highlight-gold">2,980</span>
              <span className="period">/月（税込）</span>
            </div>
          </div>

          <div className="pricing-features">
            <h4>含まれるサービス:</h4>
            <ul>
              <li><i className="fas fa-check"></i> AI・生成AIツールの使い方講習</li>
              <li><i className="fas fa-check"></i> 最新動向の紹介とライブQ&A</li>
              <li><i className="fas fa-check"></i> プログラミング基礎解説</li>
              <li><i className="fas fa-check"></i> デモ・モックアプリの共有</li>
              <li><i className="fas fa-check"></i> 定期ライブ配信（週1回または月1回）</li>
              <li><i className="fas fa-check"></i> アーカイブ視聴（過去の全配信）</li>
              <li><i className="fas fa-check"></i> <span className="highlight-teal">Discord質問し放題</span></li>
              <li><i className="fas fa-check"></i> <span className="highlight-coral">コードレビューサポート</span></li>
              <li><i className="fas fa-check"></i> 個別最適化アンケート</li>
              <li><i className="fas fa-check"></i> 学習ロードマップ提供</li>
            </ul>
          </div>

          <div className="pricing-highlight">
            <p><strong>シンプルで<span className="highlight-gold">手頃な価格</span>で、<span className="highlight-gradient">充実したサポート</span>を受けられます。</strong></p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#cta" className="pricing-cta">
              <span>今すぐ参加する</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}