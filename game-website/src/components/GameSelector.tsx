"use client";
import { useState } from "react";
import { gamesData, gameCategories, type GameInfo } from "@/data/games";

interface GameSelectorProps {
  currentGame: string;
  onGameSelect: (gameUrl: string, gameInfo: GameInfo) => void;
}

export default function GameSelector({ currentGame, onGameSelect }: GameSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredGames = selectedCategory === "All"
    ? gamesData
    : gamesData.filter(game => game.category === selectedCategory);

  const currentGameInfo = gamesData.find(game => game.url === currentGame);

  return (
    <div className="game-selector">
      {/* Collapse/Expand Control */}
      <div className="px-6 py-4 border-b border-cyber-border">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-cyber-neon-blue neon-pulse" />
            <h3 className="text-xl font-bold text-cyber-neon-blue neon-glow">
              Gaming Hub
            </h3>
            <span className="text-cyber-text-muted text-sm">
              {filteredGames.length} games
            </span>
          </div>
          <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-6 h-6 text-cyber-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Current Game Info */}
        {currentGameInfo && (
          <div className="mt-3 flex items-center space-x-3 text-sm">
            <span className="text-cyber-text-muted">Now Playing:</span>
            <span className="text-cyber-neon-pink font-semibold">{currentGameInfo.title}</span>
            <span className="game-category-tag">{currentGameInfo.category}</span>
          </div>
        )}
      </div>

      {/* Expanded Game Selection Area */}
      {isExpanded && (
        <div className="p-6 animate-slideDown">
          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-cyber-text mb-3">Game Categories</h4>
            <div className="flex flex-wrap gap-2">
              {gameCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyber-neon-blue text-cyber-bg border border-cyber-neon-blue neon-glow'
                      : 'bg-cyber-surface text-cyber-text-muted border border-cyber-border hover:border-cyber-neon-blue hover:text-cyber-neon-blue'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Game Grid */}
          <div className="game-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className={`game-thumbnail aspect-video ${
                  game.url === currentGame ? 'active' : ''
                }`}
                onClick={() => onGameSelect(game.url, game)}
              >
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="game-info-overlay">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-sm truncate pr-2">{game.title}</h5>
                    <span className="game-category-tag">{game.category}</span>
                  </div>
                  <p className="text-xs text-cyber-text-muted truncate">{game.description}</p>
                  {game.featured && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-cyber-neon-pink text-cyber-bg px-2 py-1 rounded text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Games Message */}
          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎮</div>
              <h4 className="text-lg font-semibold text-cyber-text-muted mb-2">
                No Games in This Category
              </h4>
              <p className="text-cyber-text-muted">
                Please select another category or check back later
              </p>
            </div>
          )}

          {/* Operation Tips */}
          <div className="mt-6 p-4 bg-cyber-surface rounded-lg border border-cyber-border">
            <div className="flex items-center space-x-3 text-sm text-cyber-text-muted">
              <div className="w-2 h-2 rounded-full bg-cyber-neon-green" />
              <span>Click game thumbnail to switch games</span>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:inline">Support fullscreen mode for best experience</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* CSS for slide down animation */
const slideDownAnimation = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-slideDown {
    animation: slideDown 0.3s ease-out;
  }
`;
