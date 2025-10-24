export default function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'Completely Private',
      description: 'Zero data collection. Your searches never leave your machine. No tracking, no analytics, no cloud.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Local processing means instant results. No network latency, no waiting for servers to respond.'
    },
    {
      icon: '🛡️',
      title: 'Advanced Guardrails',
      description: 'Constitutional AI with prompt priming, risk analysis, and confidence calibration. Prevents hallucinations through sophisticated behavioral programming.'
    },
    {
      icon: '📚',
      title: 'Pure Knowledge',
      description: 'Searches the AI\'s training knowledge. Great for history, science, concepts, and explanations.'
    },
    {
      icon: '🌐',
      title: 'Works Offline',
      description: 'No internet required once installed. Perfect for travel, remote work, or sensitive environments.'
    },
    {
      icon: '🛠️',
      title: 'Developer Friendly',
      description: 'Open source, fully documented API, easy to customize and extend for your needs.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Why Altiplano?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
