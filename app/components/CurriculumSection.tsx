export default function CurriculumSection() {
  return (
    <section id="curriculum" className="curriculum">
      <div className="container">
        <h2 className="section-title"><span>カリキュラム内容（抜粋）</span></h2>

        <div className="curriculum-grid">
          <div className="curriculum-category">
            <h3>基礎カリキュラム</h3>

            <div className="curriculum-item">
              <h4><i className="fas fa-magic"></i> AI×プロンプト設計</h4>
              <p>要約・抽出・分類・仕様化の型とチェックリスト。誤り検出の再質問テンプレ付き。</p>
            </div>

            <div className="curriculum-item">
              <h4><i className="fas fa-cogs"></i> GASで業務自動化</h4>
              <p>Gmail/Sheets/Driveの連携。通知、添付保存、表整形、定期実行、失敗時リトライまで。</p>
            </div>

            <div className="curriculum-item">
              <h4><i className="fas fa-chart-bar"></i> スクレイピング→可視化</h4>
              <p>日次収集→表・グラフ更新。例外・ブロック対策、キャッシュ戦略を学習。</p>
            </div>
          </div>

          <div className="curriculum-category">
            <h3>専門分野カリキュラム（順次展開）</h3>

            <div className="curriculum-item">
              <h4><i className="fas fa-calculator"></i> 経理×AI</h4>
              <ul>
                <li>領収書・請求書の自動読み取りと仕訳生成</li>
                <li>勘定科目の自動判定システム</li>
                <li>月次・年次決算資料の自動作成</li>
                <li>経費精算の承認フロー自動化</li>
              </ul>
            </div>

            <div className="curriculum-item">
              <h4><i className="fas fa-shopping-cart"></i> 転売×AI</h4>
              <ul>
                <li>商品トレンド分析と仕入れ判断支援</li>
                <li>競合価格の自動監視と価格調整</li>
                <li>商品説明文の自動生成</li>
                <li>在庫管理と売上予測</li>
              </ul>
            </div>

            <div className="curriculum-item">
              <h4><i className="fas fa-bullhorn"></i> アフィリエイト×AI</h4>
              <ul>
                <li>SEOに最適化されたコンテンツ自動生成</li>
                <li>キーワード分析と記事企画の自動化</li>
                <li>成果の良い案件の自動抽出</li>
                <li>SNS投稿の自動化とエンゲージメント分析</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="curriculum-highlight">
          <p><strong>実践重視のカリキュラムで、確実にスキルアップできます。</strong></p>
        </div>
      </div>
    </section>
  )
}