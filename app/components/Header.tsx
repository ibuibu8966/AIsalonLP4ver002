export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">
          <i className="fas fa-graduation-cap brand-icon"></i>
          <span className="logo-text gradient-text">AI×Programming Salon</span>
        </div>
        <div className="nav-links">
          <a href="#features" className="nav-link">特徴</a>
          <a href="#curriculum" className="nav-link">カリキュラム</a>
          <a href="#pricing" className="nav-link">料金</a>
          <a href="#cta" className="nav-link cta-button">参加する</a>
        </div>
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}