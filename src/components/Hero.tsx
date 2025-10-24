import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <Image 
            src="/altiplano-graphic-mark-logo.svg" 
            alt="Altiplano Logo" 
            width={140} 
            height={140}
          />
        </div>
        <h1>ALTIPLANO</h1>
        <p className="tagline">Search your knowledge, not the web</p>
        <div className="cta-buttons">
          <a href="#download" className="btn btn-primary">
            <span>Download Free</span>
            <span>→</span>
          </a>
          <a href="#what" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}
