// Game data configuration
export interface GameInfo {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  url: string;
  featured: boolean;
}

export const gamesData: GameInfo[] = [
  {
    id: "immortal-dark-slayer",
    title: "Immortal Dark Slayer",
    description: "Epic dark warrior adventure game",
    category: "Action",
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/023/538/710/small/illustration-of-gaming-background-abstract-cyberpunk-style-of-gamer-wallpaper-neon-glow-light-of-sci-fi-glowing-iridescent-neon-lights-for-both-light-and-dark-backgrounds-generative-ai-photo.jpg",
    url: "https://www.crazygames.com/embed/immortal-dark-slayer",
    featured: true
  },
  {
    id: "zombie-survival",
    title: "Zombie Survival",
    description: "Post-apocalyptic survival shooter",
    category: "Shooter",
    thumbnail: "https://thumbs.dreamstime.com/b/dark-city-neon-lights-game-dark-city-neon-lights-game-some-kind-noir-cyberpunk-style-207270954.jpg",
    url: "https://www.crazygames.com/embed/zombs-royale",
    featured: true
  },
  {
    id: "cyber-racing",
    title: "Cyber Racing 2077",
    description: "Futuristic racing experience",
    category: "Racing",
    thumbnail: "https://media.istockphoto.com/id/1432965103/video/neon-flash-light-structures-hi-tech-neon-sci-fi-tunel-trendy-neon-glow-lines-form-pattern-and.jpg",
    url: "https://www.crazygames.com/embed/madalin-stunt-cars-2",
    featured: true
  },
  {
    id: "neon-fighter",
    title: "Neon Fighter",
    description: "Neon-style arcade fighting game",
    category: "Fighting",
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/038/956/034/small/ai-generated-futuristic-esport-background-for-gaming-live-streaming-esport-game-tournament-competition-neon-banner-photo.jpeg",
    url: "https://www.crazygames.com/embed/stick-fighter",
    featured: false
  },
  {
    id: "space-strategy",
    title: "Space Command",
    description: "Interstellar strategy command game",
    category: "Strategy",
    thumbnail: "https://img.freepik.com/free-vector/trendy-glowing-neon-lines-gaming-wallpaper-with-text-space_1017-55392.jpg",
    url: "https://www.crazygames.com/embed/buildroyale-io",
    featured: false
  },
  {
    id: "puzzle-matrix",
    title: "Puzzle Matrix",
    description: "Digital matrix puzzle game",
    category: "Puzzle",
    thumbnail: "https://media.istockphoto.com/id/2157672361/video/retro-futuristic-pixelate-monitor-synthwave-style-retro-cctv-or-vhs-pixel-wireframe-abstract.jpg",
    url: "https://www.crazygames.com/embed/2048",
    featured: false
  },
  {
    id: "virtual-world",
    title: "Virtual World",
    description: "Open world exploration game",
    category: "Adventure",
    thumbnail: "https://media.istockphoto.com/id/1353134152/video/neon-light-falling-on-the-floor-with-smoke-seamless-loop-video.jpg",
    url: "https://www.crazygames.com/embed/minecraft-classic",
    featured: false
  },
  {
    id: "cyberpunk-shooter",
    title: "Cyberpunk Shooter",
    description: "Cyberpunk-style shooting game",
    category: "Shooter",
    thumbnail: "https://media.istockphoto.com/id/1872087220/video/abstract-neon-glow-frame-and-movement-of-digital-particles-and-plexus-stage-for-product.jpg",
    url: "https://www.crazygames.com/embed/shellshock-live",
    featured: false
  }
];

// Game categories
export const gameCategories = [
  "All",
  "Action",
  "Shooter",
  "Racing",
  "Fighting",
  "Strategy",
  "Puzzle",
  "Adventure"
];

// Get featured games
export const getFeaturedGames = (): GameInfo[] => {
  return gamesData.filter(game => game.featured);
};

// Get games by category
export const getGamesByCategory = (category: string): GameInfo[] => {
  if (category === "All") {
    return gamesData;
  }
  return gamesData.filter(game => game.category === category);
};

// Get game by ID
export const getGameById = (id: string): GameInfo | undefined => {
  return gamesData.find(game => game.id === id);
};
