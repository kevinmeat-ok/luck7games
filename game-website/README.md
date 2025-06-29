# 🎮 Luck7Games - Enhanced Gaming Hub

A cyberpunk-style multi-game platform featuring 8 exciting games with fullscreen support, new tab navigation, and complete English internationalization.

## ✨ Features

### 🎯 Gaming Experience
- **8 Different Games**: Action, shooter, racing, fighting, strategy, puzzle, and adventure games
- **🌐 Dynamic Routing**: Each game has its own dedicated page `/game/[id]`
- **📺 Fullscreen Support**: Immersive gaming experience with cross-browser compatibility
- **🔗 New Tab Navigation**: Play multiple games simultaneously without losing progress
- **📱 Mobile Responsive**: Perfect experience on both desktop and mobile devices

### 🎨 Design & UI
- **Cyberpunk Theme**: Neon colors, glowing effects, and futuristic animations
- **🌍 Full Internationalization**: Complete English interface
- **🎪 Interactive Elements**: Hover effects, transitions, and visual feedback
- **🖼️ Visual Indicators**: External link icons for new tab behavior

### 🛠️ Technical Features
- **Next.js 15**: Modern React framework with App Router
- **TypeScript**: Full type safety and IntelliSense support
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach with breakpoints
- **SEO Optimized**: Individual meta tags for each game page

## 🎮 Available Games

1. **Immortal Dark Slayer** - Action Adventure (Featured)
2. **Zombie Survival** - Survival Shooter (Featured)
3. **Cyber Racing 2077** - Futuristic Racing (Featured)
4. **Neon Fighter** - Neon Fighting
5. **Space Command** - Space Strategy
6. **Puzzle Matrix** - Digital Puzzle
7. **Virtual World** - Open Adventure
8. **Cyberpunk Shooter** - Cyberpunk Shooting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Bun (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kevinmeat-ok/luck7games.git

# Navigate to project directory
cd luck7games

# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev
```

Visit `http://localhost:3000` to see the gaming hub in action!

### Build for Production

```bash
# Build the project
bun run build
# or
npm run build

# Start production server
bun run start
# or
npm run start
```

## 📁 Project Structure

```
luck7games/
├── src/
│   ├── app/
│   │   ├── game/[id]/          # Dynamic game pages
│   │   ├── more/               # More information page
│   │   ├── page.tsx            # Home page - game hub
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── FullscreenButton.tsx    # Fullscreen toggle
│   │   ├── GameSelector.tsx        # Game selection (legacy)
│   │   └── Navigation.tsx          # Site navigation
│   ├── data/
│   │   └── games.ts            # Game configuration
│   ├── types/
│   │   └── fullscreen.ts       # TypeScript definitions
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies & scripts
```

## 🎯 Game Routes

Each game has its own dedicated route:

- **Home**: `/` - Gaming hub with all games
- **Individual Games**: `/game/[game-id]` - Dedicated game pages
- **More Info**: `/more` - Additional information and features

### Game URLs:
- `/game/immortal-dark-slayer`
- `/game/zombie-survival`
- `/game/cyber-racing`
- `/game/neon-fighter`
- `/game/space-strategy`
- `/game/puzzle-matrix`
- `/game/virtual-world`
- `/game/cyberpunk-shooter`

## 🔧 Configuration

### Game Configuration
Edit `src/data/games.ts` to add or modify games:

```typescript
export const gamesData: GameInfo[] = [
  {
    id: "game-id",
    title: "Game Title",
    description: "Game description",
    category: "Game Category",
    thumbnail: "thumbnail-url",
    url: "game-iframe-url",
    featured: true/false
  }
  // ... more games
];
```

### Styling
- Global styles: `src/app/globals.css`
- Cyberpunk theme variables in CSS custom properties
- Tailwind configuration: `tailwind.config.ts`

## 🌟 Key Features Explained

### New Tab Navigation
Games in the "Other Games" section open in new tabs, allowing users to:
- Play multiple games simultaneously
- Keep current game running while exploring others
- Maintain game progress across sessions

### Fullscreen Support
Cross-browser fullscreen functionality with:
- Standard fullscreen API support
- Vendor-prefixed fallbacks (webkit, moz, ms)
- Visual feedback and ESC key hint
- Mobile-friendly fullscreen experience

### Responsive Design
- Mobile-first design approach
- Breakpoint system: `sm`, `md`, `lg`, `xl`
- Touch-friendly interfaces
- Optimized game thumbnails for all devices

## 🔒 Security Features

- `noopener noreferrer` for external links
- Content Security Policy ready
- XSS protection through React's built-in escaping
- Safe iframe embedding with appropriate allow policies

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build for static export
bun run build

# Deploy the out/ directory to Netlify
```

### Manual Deployment
```bash
# Build the project
bun run build

# Upload the out/ directory to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Game content from various online sources

## 📞 Support

If you encounter any issues or have questions:
- Open an [Issue](https://github.com/kevinmeat-ok/luck7games/issues)
- Check the [Discussions](https://github.com/kevinmeat-ok/luck7games/discussions)

---

**🎮 Happy Gaming! Enjoy your cyberpunk gaming experience!**

Made with ❤️ and lots of ☕ by the Luck7Games team.
