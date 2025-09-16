export default function AICapabilitiesSection() {
  return (
    <section className="ai-capabilities">
      <div className="container">
        <h2 className="section-title"><span>AIで実際に何ができるようになるの？</span></h2>
        <p className="section-subtitle">AIは単なるツールではありません。<strong>あなたの能力を何倍にも拡張する武器</strong>です。</p>

        <div className="capabilities-grid">
          <div className="capability-card">
            <div className="card-header">
              <i className="fas fa-magic"></i>
              <h3>プロンプト設計をマスター</h3>
            </div>
            <ul className="capability-list">
              <li>要約・抽出・分類・仕様化の型とチェックリストを活用</li>
              <li>議事録の自動化とポイント抽出</li>
              <li>データの整理と分析レポート自動生成</li>
              <li>仕様書の下書きと要件整理の効率化</li>
            </ul>
          </div>

          <div className="capability-card">
            <div className="card-header">
              <i className="fas fa-cogs"></i>
              <h3>実際の活用例</h3>
            </div>
            <ul className="capability-list">
              <li>楽天の注文履歴を自動抽出・整理</li>
              <li>iPhone明細PDFの自動保存＆文字起こし</li>
              <li>Gmail請求書の自動保存と分類</li>
              <li>会議内容の自動要約とタスク抽出</li>
            </ul>
          </div>
        </div>

        <div className="specialized-fields">
          <h3>さらに、特化分野での活用も</h3>
          <p>今後サロンでは、様々な分野でのAI活用ノウハウも展開予定：</p>

          <div className="fields-grid">
            <div className="field-card">
              <div className="field-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h4>経理×AI</h4>
              <p>仕訳の自動化、決算書類の作成支援、経費精算の効率化</p>
            </div>
            <div className="field-card">
              <div className="field-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h4>転売×AI</h4>
              <p>商品リサーチの自動化、価格動向分析、出品作業の効率化</p>
            </div>
            <div className="field-card">
              <div className="field-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h4>アフィリエイト×AI</h4>
              <p>コンテンツ生成、SEO分析、案件選定の自動化</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}