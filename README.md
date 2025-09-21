# TuneSphere Remix

Your community-powered music discovery and artist support platform built on Base.

## Features

- **Personalized Music Feed**: Discover new music based on your listening habits and community interactions
- **Creator Showcase**: Artists can upload music, create profiles, and engage directly with fans
- **Fan-Creator Support**: Direct crypto tipping system using Base network
- **Frame Actions**: Seamless interactions within Farcaster clients
- **Social Integration**: Built with MiniKit for native Base App experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit integration
- **Social**: MiniKit for Farcaster Frame support
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety

## Getting Started

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd tunesphere-remix
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/products/onchainkit).

3. **Run the development server**:
```bash
npm run dev
```

4. **Open in Base App**:
Navigate to `http://localhost:3000` in Base App or compatible Farcaster client.

## Architecture

### Data Models

- **User**: Profile with listening history and followed artists
- **Artist**: Creator profiles with music library and fan tips
- **Track**: Music tracks with metadata and engagement stats
- **Tip**: Crypto transactions between fans and artists

### Key Components

- **AppShell**: Main layout with sidebar navigation
- **MusicFeed**: Personalized track discovery feed
- **ArtistCard**: Artist profile display with follow/tip actions
- **TrackListItem**: Individual track with play/like/tip actions
- **TipButton**: Crypto tipping interface
- **PlayerBar**: Music player controls
- **FrameActionContainer**: Farcaster Frame interaction buttons

### Frame Integration

The app supports Farcaster Frame actions for:
- Liking tracks directly in social feeds
- Tipping artists with one-click
- Sharing music discoveries
- Following artists

## Deployment

1. **Build the application**:
```bash
npm run build
```

2. **Deploy to Vercel** (recommended):
```bash
vercel deploy
```

3. **Configure Frame manifest** at `/manifest.json` for Farcaster discovery.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
