/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import FullscreenButton from "@/components/FullscreenButton";
import { gamesData, getGameById, type GameInfo } from "@/data/games";
import type { FullscreenDocument } from "@/types/fullscreen";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const gameId = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentGame, setCurrentGame] = useState<GameInfo | null>(null);

  useEffect(() => {
    const game = getGameById(gameId);
    if (game) {
      setCurrentGame(game);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  }, [gameId]);

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

  if (!currentGame && !hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        color: '#ffffff'
      }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" />
          <p className="text-lg">Loading Game...</p>
        </div>
      </div>
    );
  }

  if (hasError || !currentGame) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
        color: '#ffffff'
      }}>
        <div className="text-center p-8">
          <div className="text-6xl mb-4">🎮</div>
          <h1 className="text-2xl font-bold mb-4">Game Not Found</h1>
          <p className="text-gray-400 mb-6">The requested game could not be found.</p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors"
            style={{
              background: '#00d4ff',
              color: '#0a0a0f'
            }}
          >
            ← Back to Gaming Hub
          </Link>
        </div>
      </div>
    );
  }

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
                  <Link href="/">
                    <h1
                      className="text-xl font-bold nav-title cursor-pointer"
                      style={{
                        color: '#00d4ff',
                        textShadow: '0 0 10px #00d4ff'
                      }}
                    >
                      🎮 777 Gaming Hub
                    </h1>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="/"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    style={{ color: '#a0a0a0' }}
                  >
                    🏠 Home
                  </Link>
                  <Link
                    href="/more"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    style={{ color: '#a0a0a0' }}
                  >
                    ⭐ More
                  </Link>
                </div>
              </div>

              {/* Game navigation */}
              <div className="flex items-center space-x-4">
                <span
                  className="text-sm"
                  style={{ color: '#a0a0a0' }}
                >
                  Playing:
                </span>
                <span
                  className="font-semibold"
                  style={{ color: '#00d4ff' }}
                >
                  {currentGame.title}
                </span>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Game Container */}
      <main className={`${isFullscreen ? 'h-screen' : 'h-[calc(100vh-64px)]'} min-h-400`}>
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
            {/* Fullscreen button */}
            <div className="absolute top-3 right-3 z-30">
              <FullscreenButton
                targetElementId="game-container"
                className="shadow-lg backdrop-blur-sm bg-opacity-90"
              />
            </div>

            {/* Back to hub button - only in non-fullscreen */}
            {!isFullscreen && (
              <div className="absolute top-3 left-3 z-30">
                <Link
                  href="/"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all shadow-lg backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(45deg, #0f3460, #16213e)',
                    border: '1px solid #00d4ff',
                    color: '#ffffff'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="hidden sm:inline">Back to Hub</span>
                </Link>
              </div>
            )}

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
                  <p className="text-sm opacity-90 mt-2">{currentGame.title}</p>
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
              src={currentGame.url}
              className="w-full h-full border-0 rounded-lg"
              allow="gamepad *; microphone; camera; fullscreen"
              title={currentGame.title}
              loading="lazy"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{
                visibility: isLoading ? 'hidden' : 'visible',
              }}
            />
          </div>

          {/* Game Info Footer - non-fullscreen only */}
          {!isLoading && !hasError && !isFullscreen && (
            <div className="mt-4">
              <div
                className="rounded-lg shadow p-4 text-sm mb-4"
                style={{
                  background: 'rgba(26, 26, 46, 0.8)',
                  border: '1px solid #333366',
                  backdropFilter: 'blur(10px)',
                  color: '#a0a0a0'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-semibold" style={{ color: '#ffffff' }}>🎮 Now Playing: </span>
                    <span style={{ color: '#00d4ff' }}>{currentGame.title}</span>
                  </div>
                  <span
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{
                      background: 'rgba(0, 212, 255, 0.2)',
                      border: '1px solid #00d4ff',
                      color: '#00d4ff'
                    }}
                  >
                    {currentGame.category}
                  </span>
                </div>
                <p className="text-xs mb-3" style={{ color: '#a0a0a0' }}>
                  {currentGame.description}
                </p>
                <div className="flex justify-center space-x-4 text-xs">
                  <span>📱 Touch Support</span>
                  <span>🎯 {currentGame.category}</span>
                  <span>🆓 Completely Free</span>
                  <span>📺 Fullscreen Support</span>
                </div>
              </div>

              {/* Other Games Quick Access */}
              <div
                className="rounded-lg shadow p-4"
                style={{
                  background: 'rgba(26, 26, 46, 0.8)',
                  border: '1px solid #333366',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: '#00d4ff',
                    textShadow: '0 0 10px #00d4ff'
                  }}
                >
                  Other Games
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {gamesData.filter(game => game.id !== currentGame.id).slice(0, 4).map((game) => (
                    <a
                      key={game.id}
                      href={`/game/${game.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-video rounded-lg overflow-hidden relative transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-cyan-400 hover:scale-105"
                      style={{
                        boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
                      }}
                    >
                      <img
                        src={game.thumbnail}
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <h5 className="font-semibold text-xs text-white truncate">{game.title}</h5>
                        <p className="text-xs text-gray-300 truncate">{game.category}</p>
                      </div>
                      {/* New tab indicator */}
                      <div className="absolute top-2 right-2">
                        <svg className="w-3 h-3 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-3 text-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium transition-colors"
                    style={{ color: '#00d4ff' }}
                  >
                    View All Games →
                  </Link>
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
                Press ESC to Exit Fullscreen | 🎮 {currentGame.title}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
