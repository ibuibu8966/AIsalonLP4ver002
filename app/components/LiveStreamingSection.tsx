export default function LiveStreamingSection() {
  return (
    <section className="live-streaming">
      <div className="container">
        <h2 className="section-title"><span>ライブ配信で疑問をその場で解決</span></h2>

        <div className="streaming-grid">
          <div className="streaming-info">
            <h3>定期ライブ配信</h3>
            <div className="info-item">
              <strong>配信頻度:</strong> 週1回または月1回（時期により調整）
            </div>
            <div className="info-item">
              <strong>アーカイブ:</strong> 全配信をアーカイブ公開、いつでも復習可能
            </div>
          </div>

          <div className="streaming-content">
            <h3>配信内容</h3>
            <ul>
              <li>デモ＋Q&A／短時間で実務に効く小ネタ</li>
              <li>最新AIツールの使い方解説</li>
              <li>プログラミング実装のライブコーディング</li>
              <li>参加者の質問に対するリアルタイム回答</li>
              <li>成果発表会と相互フィードバック</li>
            </ul>
          </div>

          <div className="streaming-support">
            <h3>見逃し対応も安心</h3>
            <ul>
              <li>全配信をアーカイブ化</li>
              <li>重要ポイントのタイムスタンプ付き</li>
              <li>資料とコードの配布</li>
              <li>後日の個別質問も受付</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}