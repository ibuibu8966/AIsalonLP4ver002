'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "プログラミング初心者でも参加できますか？",
      answer: "はい、初心者歓迎です。基礎から丁寧に解説し、個別サポートも充実しています。"
    },
    {
      question: "どのような開発環境が必要ですか？",
      answer: "Windows 11またはmacOS Catalina以降、メモリ8GB以上を推奨します。"
    },
    {
      question: "サポート体制はどのようになっていますか？",
      answer: "Discordでの質問対応、定期ライブ配信、アーカイブ視聴が可能です。個別サポートも充実しています。"
    },
    {
      question: "途中参加でもついていけますか？",
      answer: "可能です。アーカイブ視聴と個別ロードマップでキャッチアップを支援します。"
    },
    {
      question: "コードレビューはどこまで見てもらえますか？",
      answer: "可読性・例外処理・保守性・運用設計まで確認します。"
    },
    {
      question: "忙しくて時間が取れない場合は？",
      answer: "アーカイブ視聴で自分のペースで学習できます。週3-5時間程度の時間確保をおすすめしています。"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title"><span>よくある質問</span></h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
              </div>
              <div className="faq-answer" style={{ display: openIndex === index ? 'block' : 'none' }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}