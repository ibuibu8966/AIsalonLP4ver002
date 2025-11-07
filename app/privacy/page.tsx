'use client'

import BackgroundEffects from '../components/BackgroundEffects'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1 className="section-title">プライバシーポリシー</h1>

            <section className="legal-section">
              <h2 className="gradient-text">1. 個人情報の取り扱いについて</h2>
              <p>
                株式会社SENRITSU（以下「当社」といいます）は、お客様の個人情報を適切に取り扱い、保護することを重要な責務と認識しております。
                本プライバシーポリシーは、当社が提供するAI×プログラミングサロン（以下「本サービス」といいます）における個人情報の取り扱いについて定めたものです。
              </p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">2. 収集する個人情報</h2>
              <p>当社は、本サービスの提供にあたり、以下の個人情報を収集します：</p>
              <ul>
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>決済情報</li>
                <li>サービス利用履歴</li>
                <li>お問い合わせ内容</li>
                <li>その他、サービス提供に必要な情報</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">3. 個人情報の利用目的</h2>
              <p>収集した個人情報は、以下の目的で利用いたします：</p>
              <ul>
                <li>本サービスの提供・運営・管理</li>
                <li>本サービスに関するお知らせ・連絡</li>
                <li>お客様からのお問い合わせへの対応</li>
                <li>本サービスの改善・新サービスの開発</li>
                <li>利用規約違反の対応</li>
                <li>マーケティング・統計データの作成（個人を特定できない形式）</li>
                <li>その他、上記利用目的に付随する目的</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">4. 個人情報の第三者提供</h2>
              <p>
                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
              </p>
              <ul>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">5. 個人情報の管理</h2>
              <p>
                当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
                セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
              </p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">6. Cookie（クッキー）について</h2>
              <p>
                本サービスでは、サービスの利便性向上のためCookieを使用することがあります。
                Cookieとは、Webサーバーがお客様のコンピュータを識別する業界標準の技術です。
                Cookieは、お客様のコンピュータを識別することはできますが、お客様が個人情報を入力しない限り、
                お客様自身を識別することはできません。
              </p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">7. 個人情報の開示・訂正・削除</h2>
              <p>
                お客様が、ご自身の個人情報の照会・修正・削除などをご希望される場合は、
                本人確認の上、速やかに対応させていただきます。
                お問い合わせは、以下の連絡先までご連絡ください。
              </p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">8. アクセス解析ツールについて</h2>
              <p>
                当社は、本サービスの利用状況を把握するため、Google Analyticsなどのアクセス解析ツールを使用しています。
                これらのツールでは、Cookieを使用して個人を特定する情報を含まずに統計データを収集します。
              </p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">9. 本ポリシーの変更</h2>
              <p>
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">10. お問い合わせ</h2>
              <p>本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。</p>
              <div className="contact-info">
                <p><strong>株式会社SENRITSU</strong></p>
                <p>代表取締役：加藤 大成</p>
                <p>所在地：大阪府東大阪市高殿町11-2 カワショウビル2・3階</p>
                <p>電話番号：07-3626-8645</p>
                <p>メールアドレス：<a href="mailto:senritsu@senritsu.site" className="neon-link">senritsu@senritsu.site</a></p>
                <p>ウェブサイト：<a href="https://senritsu.site" target="_blank" rel="noopener noreferrer" className="neon-link">https://senritsu.site</a></p>
              </div>
            </section>

            <div className="legal-footer">
              <p>制定日：2025年1月1日</p>
              <p>最終更新日：2025年1月1日</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
