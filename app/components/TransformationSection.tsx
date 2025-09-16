export default function TransformationSection() {
  return (
    <section className="transformation">
      <div className="container">
        <h2 className="section-title"><span>サロンに入ると、あなたはどう変わる？</span></h2>
        <p className="section-subtitle"><strong>30日後、90日後のあなたは今とは全く違うレベルにいます</strong></p>

        <div className="transformation-timeline">
          <div className="transformation-step">
            <div className="step-number">30</div>
            <div className="step-content">
              <h3>30日後の到達目標</h3>
              <ul>
                <li>日常タスクの自動化システムを1つ完成</li>
                <li>AI議事録システムの構築と運用開始</li>
                <li>プロンプト設計の基本パターンを習得</li>
              </ul>
            </div>
          </div>
          <div className="transformation-step">
            <div className="step-number">90</div>
            <div className="step-content">
              <h3>90日後の到達目標</h3>
              <ul>
                <li>社内で使える実用的なツールを1本公開</li>
                <li>複数の自動化システムを組み合わせた業務フロー構築</li>
                <li>副業案件に対応できるスキルレベルに到達</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <i className="fas fa-clock"></i>
            <h4>時間の大幅削減</h4>
            <p>毎日2-3時間の時短を実現</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-star"></i>
            <h4>社内評価アップ</h4>
            <p>効率化の提案と実装で存在感向上</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-dollar-sign"></i>
            <h4>副業の受注力向上</h4>
            <p>実績とポートフォリオの充実</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-rocket"></i>
            <h4>将来への投資</h4>
            <p>AI時代に必要不可欠なスキルセット獲得</p>
          </div>
        </div>
      </div>
    </section>
  )
}