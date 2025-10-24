export default function WhatSection() {
  return (
    <section className="what-section" id="what">
      <div className="container">
        <h2>What is Altiplano?</h2>
        <p className="what-content">
          Altiplano is a <span className="highlight">parametric knowledge search engine</span> powered by 
          advanced AI guardrails. It searches through an LLM&apos;s training knowledge—not the web—with 
          <span className="highlight">sophisticated prompt priming</span> that ensures honest, calibrated results. 
          Completely <span className="highlight">private</span>, runs <span className="highlight">offline</span>, 
          and shows confidence scores with hallucination detection. Think of it as Wikipedia with a conscience.
        </p>
      </div>
    </section>
  );
}
