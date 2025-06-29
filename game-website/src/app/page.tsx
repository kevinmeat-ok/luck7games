"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FullscreenButton from "@/components/FullscreenButton";
import { gamesData, type GameInfo } from "@/data/games";
import type { FullscreenDocument } from "@/types/fullscreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isGameSelectorExpanded, setIsGameSelectorExpanded] = useState(false);

  // Default to first game for homepage
  const defaultGame = gamesData[0];

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Monitor fullscreen state changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as FullscreenDocument;
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
      color: '#ffffff'
    }}>
      {/* Cyberpunk background effects */}
      <div
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 0, 255, 0.1) 0%, transparent 50%)
          `
        }}
      />

      {/* Navigation - hidden in fullscreen */}
      {!isFullscreen && (
        <nav
          className="border-b"
          style={{
            background: 'rgba(10, 10, 15, 0.95)',
            borderColor: '#333366',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 flex items-center">
                  <h1
                    className="text-xl font-bold nav-title"
                    style={{
                      color: '#00d4ff',
                      textShadow: '0 0 10px #00d4ff'
                    }}
                  >
                    🎮 777 Gaming Hub
                  </h1>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <a
                    href="/"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                    style={{
                      color: '#00d4ff',
                      background: 'rgba(0, 212, 255, 0.1)'
                    }}
                  >
                    🏠 Home
                  </a>
                  <a
                    href="/more"
                    className="px-3 py-2 rounded-md text-sm font-medium"
                    style={{ color: '#a0a0a0' }}
                  >
                    ⭐ More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      {!isFullscreen && (
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                color: '#00d4ff',
                textShadow: '0 0 20px #00d4ff'
              }}
            >
              Gaming Hub
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              style={{ color: '#a0a0a0' }}
            >
              Experience the future of gaming with our cyberpunk-style game collection
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span
                className="px-4 py-2 rounded-full border"
                style={{
                  borderColor: '#00d4ff',
                  color: '#00d4ff',
                  background: 'rgba(0, 212, 255, 0.1)'
                }}
              >
                📱 Mobile Friendly
              </span>
              <span
                className="px-4 py-2 rounded-full border"
                style={{
                  borderColor: '#ff00ff',
                  color: '#ff00ff',
                  background: 'rgba(255, 0, 255, 0.1)'
                }}
              >
                🆓 Completely Free
              </span>
              <span
                className="px-4 py-2 rounded-full border"
                style={{
                  borderColor: '#00ff88',
                  color: '#00ff88',
                  background: 'rgba(0, 255, 136, 0.1)'
                }}
              >
                📺 Fullscreen Support
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Featured Game Container */}
      <main className={`${isFullscreen ? 'h-screen' : 'h-[60vh]'} ${!isFullscreen ? 'mb-8' : ''}`}>
        <div className={`h-full w-full ${isFullscreen ? 'p-0' : 'p-2 md:p-4'} game-container`}>
          <div
            id="game-container"
            className={`h-full w-full overflow-hidden relative ${!isFullscreen ? 'rounded-lg' : ''}`}
            style={!isFullscreen ? {
              background: 'rgba(15, 52, 96, 0.2)',
              border: '2px solid #00d4ff',
              borderRadius: '12px',
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.3), inset 0 0 30px rgba(0, 212, 255, 0.1)'
            } : {}}
          >
            {/* Featured Game Label */}
            {!isFullscreen && (
              <div className="absolute top-3 left-3 z-30">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: '#ff00ff',
                    color: '#0a0a0f'
                  }}
                >
                  Featured Game
                </span>
              </div>
            )}

            {/* Fullscreen button */}
            <div className="absolute top-3 right-3 z-30">
              <FullscreenButton
                targetElementId="game-container"
                className="shadow-lg backdrop-blur-sm bg-opacity-90"
              />
            </div>

            {/* Loading State */}
            {isLoading && (
              <div
                className="absolute inset-0 z-20 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" />
                  <p className="text-lg font-semibold">Loading Game...</p>
                  <p className="text-sm opacity-90 mt-2">{defaultGame.title}</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-20">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">😅</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Game Loading Failed</h3>
                  <p className="text-gray-600 mb-4">Network issues or browser restrictions. Please try:</p>
                  <ul className="text-left text-gray-600 mb-6 space-y-1">
                    <li>• Refresh the page</li>
                    <li>• Check network connection</li>
                    <li>• Allow third-party content</li>
                  </ul>
                  <div className="space-y-3">
                    <button
                      onClick={() => window.location.reload()}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      🔄 Reload
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Game iframe */}
            <iframe
              src={defaultGame.url}
              className="w-full h-full border-0 rounded-lg"
              allow="gamepad *; microphone; camera; fullscreen"
              title={defaultGame.title}
              loading="lazy"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{
                visibility: isLoading ? 'hidden' : 'visible',
              }}
            />
          </div>

          {/* Game Info Footer - non-fullscreen only */}
          {!isLoading && !isFullscreen && (
            <div className="mt-4 text-center">
              <div
                className="rounded-lg shadow p-4 text-sm"
                style={{
                  background: 'rgba(26, 26, 46, 0.8)',
                  border: '1px solid #333366',
                  backdropFilter: 'blur(10px)',
                  color: '#a0a0a0'
                }}
              >
                <p className="mb-2">
                  <span className="font-semibold" style={{ color: '#ffffff' }}>🎮 Featured Game: </span>
                  <span style={{ color: '#00d4ff' }}>{defaultGame.title}</span>
                </p>
                <div className="flex justify-center space-x-4 text-xs">
                  <span>📱 Touch Support</span>
                  <span>🎯 {defaultGame.category}</span>
                  <span>🆓 Completely Free</span>
                  <span>📺 Fullscreen Support</span>
                </div>
              </div>
            </div>
          )}

          {/* Fullscreen mode hint */}
          {isFullscreen && !isLoading && !hasError && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
              <div
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid #00d4ff',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Press ESC to Exit Fullscreen | 🎮 {defaultGame.title}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Games Collection - non-fullscreen only */}
      {!isFullscreen && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold mb-4"
                style={{
                  color: '#00d4ff',
                  textShadow: '0 0 15px #00d4ff'
                }}
              >
                Game Collection
              </h2>
              <p style={{ color: '#a0a0a0' }}>
                Choose your adventure from our cyberpunk-styled gaming library
              </p>
            </div>

            {/* Game Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gamesData.map((game) => (
                <Link
                  key={game.id}
                  href={`/game/${game.id}`}
                  className="group relative aspect-video rounded-lg overflow-hidden transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-cyan-400 hover:scale-105"
                  style={{
                    background: 'rgba(26, 26, 46, 0.8)',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                  }}
                >
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Game Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
                        {game.title}
                      </h3>
                      <span
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          background: 'rgba(0, 212, 255, 0.3)',
                          border: '1px solid #00d4ff',
                          color: '#00d4ff'
                        }}
                      >
                        {game.category}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{game.description}</p>

                    {/* Featured badge */}
                    {game.featured && (
                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2 py-1 rounded text-xs font-bold"
                          style={{ background: '#ff00ff', color: '#0a0a0f' }}
                        >
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Play button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <span>📱 Touch</span>
                        <span>🆓 Free</span>
                        <span>📺 Fullscreen</span>
                      </div>
                      <button
                        className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-colors group-hover:bg-cyan-400 group-hover:text-black"
                        style={{
                          background: 'rgba(0, 212, 255, 0.2)',
                          color: '#00d4ff',
                          border: '1px solid #00d4ff'
                        }}
                      >
                        <span>▶</span>
                        <span>Play</span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-lg mb-6" style={{ color: '#a0a0a0' }}>
                Ready to dive into the cyberpunk gaming universe?
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  href="/more"
                  className="px-6 py-3 rounded-lg font-medium transition-colors"
                  style={{
                    background: 'linear-gradient(45deg, #0f3460, #16213e)',
                    border: '1px solid #00d4ff',
                    color: '#ffffff'
                  }}
                >
                  Learn More
                </Link>
                <Link
                  href={`/game/${gamesData[0].id}`}
                  className="px-6 py-3 rounded-lg font-medium transition-colors"
                  style={{
                    background: '#00d4ff',
                    color: '#0a0a0f'
                  }}
                >
                  Start Gaming
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
