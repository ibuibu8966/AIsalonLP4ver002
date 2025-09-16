export default function CaseStudiesSection() {
  return (
    <section className="case-studies">
      <div className="container">
        <h2 className="section-title"><span>実際の制作事例</span></h2>

        <div className="cases-grid">
          <div className="case-category">
            <h3>基礎自動化事例</h3>

            <div className="case-item">
              <div className="case-icon">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <h4>楽天の注文履歴をGASで自動出力</h4>
              <p>受注情報の抽出→スプレッドシート集計→日次更新。担当者の工数削減と可視化を両立。</p>
            </div>

            <div className="case-item">
              <div className="case-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <h4>iPhone明細PDFの自動保存＆文字起こし</h4>
              <p>Gmail受信→Drive保存→テキスト化→検索性向上。監査や照会対応がスムーズに。</p>
            </div>
          </div>

          <div className="case-category">
            <h3>専門分野事例（予定）</h3>

            <div className="case-item">
              <div className="case-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h4>経理×AI事例</h4>
              <ul>
                <li>月100枚の領収書を自動仕訳、経理作業時間を70%削減</li>
                <li>決算書類の下書きを自動生成、税理士との打ち合わせ準備を効率化</li>
              </ul>
            </div>

            <div className="case-item">
              <div className="case-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h4>転売×AI事例</h4>
              <ul>
                <li>Amazon商品の価格変動を24時間監視、最適タイミングでの仕入れ判断支援</li>
                <li>商品写真から自動で魅力的な商品説明文を生成</li>
              </ul>
            </div>

            <div className="case-item">
              <div className="case-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h4>アフィリエイト×AI事例</h4>
              <ul>
                <li>月間1万PVのブログ記事を半自動生成、収益を3倍に向上</li>
                <li>Twitter投稿を自動化し、フォロワー数を6ヶ月で5倍に増加</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="disclaimer">
          ※実名・企業名など秘匿情報はマスキングの上で共有します。
        </div>
      </div>
    </section>
  )
}