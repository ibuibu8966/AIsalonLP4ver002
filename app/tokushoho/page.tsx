'use client'

import BackgroundEffects from '../components/BackgroundEffects'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Tokushoho() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1 className="section-title">特定商取引法に基づく表記</h1>

            <section className="legal-section">
              <h2 className="gradient-text">販売事業者</h2>
              <p>株式会社SENRITSU</p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">運営責任者</h2>
              <p>代表取締役 加藤 大成</p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">所在地</h2>
              <p>大阪府東大阪市高殿町11-2 カワショウビル2・3階</p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">電話番号</h2>
              <p>07-3626-8645</p>
              <p className="note">※お問い合わせはメールにて受け付けております。</p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">メールアドレス</h2>
              <p><a href="mailto:senritsu@senritsu.site" className="neon-link">senritsu@senritsu.site</a></p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">ウェブサイト</h2>
              <p><a href="https://senritsu.site" target="_blank" rel="noopener noreferrer" className="neon-link">https://senritsu.site</a></p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">販売価格</h2>
              <p>各サービスページに表示された価格（消費税込み）</p>
              <ul>
                <li>ベーシックプラン：月額2,980円（税込）</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">商品代金以外の必要料金</h2>
              <p>インターネット接続料金、通信料金等は、お客様のご負担となります。</p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">支払方法</h2>
              <ul>
                <li>クレジットカード決済</li>
                <li>その他、当社が指定する決済方法</li>
              </ul>
              <p className="note">※ご利用いただける決済方法は、サービスによって異なる場合があります。</p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">支払時期</h2>
              <p>月額課金サービスの場合：</p>
              <ul>
                <li>初回は申込時に即時決済</li>
                <li>2回目以降は毎月の課金日に自動決済</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">サービスの提供時期</h2>
              <p>お申し込み完了後、即時利用可能となります。</p>
              <p>決済完了後、登録いただいたメールアドレスに利用開始のご案内をお送りいたします。</p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">返品・キャンセル・中途解約について</h2>
              <div className="subsection">
                <h3>返品・返金について</h3>
                <p>
                  本サービスは、デジタルコンテンツおよびオンラインサービスの提供という性質上、
                  お客様のご都合による返品・返金には応じかねます。
                </p>
              </div>

              <div className="subsection">
                <h3>中途解約について</h3>
                <ul>
                  <li>月額課金サービスは、お客様ご自身でいつでも解約手続きを行うことができます。</li>
                  <li>解約手続きを行った場合、次回の課金日以降のサービス提供が停止されます。</li>
                  <li>当月分の利用料金については、日割り計算による返金は行いません。</li>
                  <li>解約後も、当月末日まではサービスをご利用いただけます。</li>
                </ul>
              </div>

              <div className="subsection">
                <h3>不良品・誤配送について</h3>
                <p>
                  システムの不具合等により、サービスが正常に提供されない場合は、
                  お問い合わせフォームまたはメールにてご連絡ください。
                  速やかに対応させていただきます。
                </p>
              </div>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">サービス提供の条件</h2>
              <ul>
                <li>本サービスのご利用には、インターネット接続環境が必要です。</li>
                <li>推奨環境：最新のWebブラウザ（Chrome、Firefox、Safari、Edge等）</li>
                <li>Discord等の連携サービスについては、各サービスのアカウント登録が必要です。</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">個人情報の取り扱い</h2>
              <p>
                お客様の個人情報は、当社の「プライバシーポリシー」に基づき、適切に管理いたします。
              </p>
              <p>
                <a href="/privacy" className="neon-link">プライバシーポリシーはこちら</a>
              </p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">表記の変更</h2>
              <p>
                当社は、本表記の内容を予告なく変更することがあります。
                変更後の内容は、本ページに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section className="legal-section">
              <h2 className="gradient-text">お問い合わせ</h2>
              <p>本表記に関するお問い合わせは、以下までご連絡ください。</p>
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
