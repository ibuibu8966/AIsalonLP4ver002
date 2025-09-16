export default function InstructorsSection() {
  return (
    <section className="instructors">
      <div className="container">
        <h2 className="section-title"><span>実績豊富な講師陣があなたをサポート</span></h2>

        <div className="instructors-grid">
          <div className="instructor-card">
            <div className="instructor-avatar">
              <div className="avatar-placeholder">KIDD</div>
              <div className="avatar-glow"></div>
            </div>
            <h3>KIDD</h3>
            <h4>AI・生成AIツール専門講師</h4>
            <p>最新のAI技術とツールに精通し、実践的な活用方法を分かりやすく解説。常に最新トレンドをキャッチアップし、本当に使えるAI情報のみを厳選してお届けします。</p>
            <div className="instructor-skills">
              <span className="skill-tag">AI・生成AIツール</span>
              <span className="skill-tag">ライブQ&A</span>
              <span className="skill-tag">最新動向</span>
            </div>
          </div>

          <div className="instructor-card">
            <div className="instructor-avatar">
              <div className="avatar-placeholder">R</div>
              <div className="avatar-glow"></div>
            </div>
            <h3>R</h3>
            <h4>プログラミング・開発実務講師</h4>
            <p>元テックキャンプ講師として豊富な指導経験を持ち、現在は会社経営も手がけるプロフェッショナル。要件定義から本番デプロイまでの実務フローを、実際の開発を通じて指導します。</p>
            <div className="instructor-skills">
              <span className="skill-tag">プロトタイプ開発</span>
              <span className="skill-tag">コードレビュー</span>
              <span className="skill-tag">実務フロー</span>
            </div>
            <div className="disclaimer">
              ※「TECH CAMP」は株式会社divの登録商標です。本サロンは同社とは一切関係ありません。
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}