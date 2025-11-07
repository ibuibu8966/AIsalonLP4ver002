import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <Link href="/" className="footer-brand">
              <i className="fas fa-graduation-cap"></i>
              <span className="gradient-text">AI×Programming Salon</span>
            </Link>
            <p className="footer-description">
              未来のスキルを身につけ、<br />キャリアを加速させよう
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-column">
              <h4>COMPANY</h4>
              <ul>
                <li>株式会社SENRITSU</li>
                <li>代表取締役 加藤 大成</li>
                <li>大阪府東大阪市高殿町11-2</li>
                <li>カワショウビル 2F・3F</li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>CONTACT</h4>
              <ul>
                <li><a href="mailto:senritsu@senritsu.site">senritsu@senritsu.site</a></li>
                <li>TEL: 07-3626-8645</li>
                <li><a href="https://senritsu.site" target="_blank" rel="noopener noreferrer">senritsu.site</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link href="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <Link href="/tokushoho">特定商取引法</Link>
          </div>
          <p className="footer-copyright">© 2025 SENRITSU Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}