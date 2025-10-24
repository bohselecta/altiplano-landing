export default function DownloadSection() {
  const downloadOptions = [
    {
      icon: '📦',
      title: 'Source Code',
      description: 'GitHub Repository',
      href: 'https://github.com/bohselecta/altiplano'
    },
    {
      icon: '⬇️',
      title: 'Download ZIP',
      description: 'Complete Package',
      href: 'https://github.com/bohselecta/altiplano/archive/main.zip'
    },
    {
      icon: '🔧',
      title: 'Setup Guide',
      description: '5-minute install',
      href: 'https://github.com/bohselecta/altiplano'
    }
  ];

  return (
    <section className="download-section" id="download">
      <div className="container">
        <h2>Get Altiplano</h2>
        <p className="version-info">Version 1.0.0 • Free & Open Source</p>
        
        <div className="download-options">
          {downloadOptions.map((option, index) => (
            <a key={index} href={option.href} className="download-card" target="_blank" rel="noopener noreferrer">
              <div className="platform">{option.icon}</div>
              <div className="platform-name">{option.title}</div>
              <div className="size">{option.description}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
