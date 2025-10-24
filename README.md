# Altiplano Landing Page

A Next.js landing page for Altiplano - a local-first parametric search engine powered by advanced AI guardrails.

## Features

- **Completely Private**: Zero data collection, searches never leave your machine
- **Lightning Fast**: Local processing means instant results
- **Advanced Guardrails**: Constitutional AI with prompt priming and confidence calibration
- **Pure Knowledge**: Searches AI training knowledge, not the web
- **Works Offline**: No internet required once installed
- **Developer Friendly**: Open source with fully documented API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bohselecta/altiplano.git
cd altiplano
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or deploy manually:
```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── WhatSection.tsx # What is Altiplano section
│   ├── Features.tsx     # Features grid
│   ├── DownloadSection.tsx # Download section
│   ├── Requirements.tsx # System requirements
│   └── Footer.tsx       # Footer
public/
└── altiplano-graphic-mark-logo.svg # Logo asset
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **CSS**: Custom CSS with CSS variables for theming
- **Vercel**: Deployment platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Links

- [GitHub Repository](https://github.com/bohselecta/altiplano)
- [Documentation](https://github.com/bohselecta/altiplano/blob/main/parasearch/README.md)
- [Community Discussions](https://github.com/bohselecta/altiplano/discussions)
- [Support Issues](https://github.com/bohselecta/altiplano/issues)
