import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo-text">
          <Image 
            src="/altiplano-graphic-mark-logo.svg" 
            alt="Altiplano" 
            width={32} 
            height={32}
            style={{ marginRight: '8px', verticalAlign: 'middle' }}
          />
          ALTIPLANO
        </div>
        <ul className="nav-links">
          <li><a href="#what">What</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="https://github.com/bohselecta/altiplano" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
}
