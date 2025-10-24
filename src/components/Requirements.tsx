export default function Requirements() {
  const requirements = [
    {
      title: 'Ollama',
      description: 'Free local AI runtime\nDownload from ollama.com'
    },
    {
      title: '8GB+ RAM',
      description: 'Minimum recommended\n16GB for best experience'
    },
    {
      title: 'Python 3.9+',
      description: 'For running the backend\nUsually pre-installed'
    }
  ];

  return (
    <section className="requirements">
      <div className="container">
        <h2>What You'll Need</h2>
        <div className="req-grid">
          {requirements.map((req, index) => (
            <div key={index} className="req-item">
              <h4>{req.title}</h4>
              <p>{req.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
