import VideoBackground from './VideoBackground'

export default function FeaturesSection() {
  return (
    <section id="features" className="features">
      <VideoBackground videoSrc="/videos/background-2.mp4" />
      <div className="container">
        <h2 className="section-title"><span>サロンの3つの特徴</span></h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <div className="feature-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="highlight-gradient">AI・生成AI専門カリキュラム</h3>
            <p>最新ツールの<span className="highlight-gold">"正しい使い方"</span>を厳選し、<span className="highlight-teal">実務で再現できる型</span>を配布</p>
            <div className="feature-details">
              <h4>基礎カリキュラム:</h4>
              <ul>
                <li>プロンプト設計チェックリスト（要約／抽出／分類／仕様化）</li>
                <li>ツール用途マップと比較（検索・要約・表変換・議事録化）</li>
                <li>実例：楽天の注文履歴抽出／iPhone明細PDFの自動保存＆文字起こし</li>
                <li>そのまま流用できるテンプレ（データ抽出・要件整理・仕様書下書き）</li>
              </ul>
              <div className="achievement">
                <strong className="highlight-coral">到達目安:</strong> <span className="highlight-gold">30日</span>で「日常タスクの自動化」＋「議事録のAI化」を1つ完成
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <div className="feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="highlight-gradient">本格プログラミング実装</h3>
            <p>基礎→API連携→運用まで、<span className="highlight-coral">"動かし続ける"</span><span className="highlight-teal">実装力</span>を獲得</p>
            <div className="feature-details">
              <h4>学べること:</h4>
              <ul>
                <li>GAS/JavaScript/Pythonでの自動化とAPI連携（認証・非同期）</li>
                <li>例外処理／ログ／通知（Slack/メール）まで含めた運用設計</li>
                <li>スクレイピング→シート/DB→可視化（定期実行・失敗時リトライ）</li>
                <li>コードレビューによる品質向上とベストプラクティス習得</li>
              </ul>
              <div className="achievement">
                <strong className="highlight-coral">到達目安:</strong> <span className="highlight-gold">90日</span>で社内/副業向けのツールを1本公開
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="highlight-gradient">コミュニティ学習環境</h3>
            <p>Discordで<span className="highlight-purple">"詰まりを最短で解消"</span>し、<span className="highlight-gold">成果物を積み上げる</span></p>
            <div className="feature-details">
              <h4>サポート内容:</h4>
              <ul>
                <li>チャンネル例：#質問箱／#自動化レシピ／#制作ギャラリー／#ライブ告知</li>
                <li>専門分野チャンネル：#経理AI／#転売AI／#アフィリエイトAI（順次開設）</li>
                <li>ライブ＋アーカイブでいつでも復習、質問し放題</li>
                <li>コードレビュー（可読性・保守性・例外処理・運用設計）</li>
              </ul>
              <div className="achievement">
                <strong className="highlight-coral">到達目安:</strong> <span className="highlight-teal">毎週の提出物</span>をポートフォリオ化
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}