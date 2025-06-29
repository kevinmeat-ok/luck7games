import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function More() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">More Exciting Content</h1>
          <p className="text-lg text-gray-600">Explore more interesting games and features</p>
        </div>

        {/* Game Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🗡️ Current Game: Immortal Dark Slayer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Game Introduction</h3>
              <p className="text-gray-600 mb-4">
                Immortal Dark Slayer is an exciting action-adventure game. In this challenging world,
                players will take on the role of a brave warrior, fighting against dark forces to defend the world of light.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Action Game</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Adventure</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Combat</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Game Features</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Beautiful game graphics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Smooth combat system
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Rich storyline experience
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mobile device support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Fullscreen immersive experience
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              🎮 Play Now
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2">Mobile Support</h3>
            <p className="text-gray-600 text-sm">
              Whether on phone or tablet, get the perfect gaming experience
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Instant Play</h3>
            <p className="text-gray-600 text-sm">
              No download or installation required, start playing immediately in your browser
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">📺</div>
            <h3 className="text-lg font-semibold mb-2">Fullscreen Gaming</h3>
            <p className="text-gray-600 text-sm">
              Click the fullscreen button to enjoy an immersive large-screen gaming experience
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Free Experience</h3>
            <p className="text-gray-600 text-sm">
              Completely free, no registration required, enjoy gaming anytime, anywhere
            </p>
          </div>
        </div>

        {/* Fullscreen Feature Introduction */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📺 Fullscreen Gaming Mode</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">How to Use Fullscreen Mode</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">1.</span>
                  <span>Click the "Fullscreen Game" button in the top right corner of the game interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">2.</span>
                  <span>The game will expand to fill the entire screen, navigation bar automatically hides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">3.</span>
                  <span>Press ESC key or click "Exit Fullscreen" button to exit</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Fullscreen Mode Advantages</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Larger game screen with clearer details
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Immersive experience without interface distractions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Perfect for precise control in action games
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mobile devices can also enjoy large screen experience
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center text-blue-800">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Pro Tip: Fullscreen mode supports all modern browsers, including mobile phones and tablets!</span>
            </div>
          </div>
        </div>

        {/* Game Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🎮 Gaming Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Beginner's Guide</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Familiarize yourself with basic operations and controls</li>
                <li>• Pay attention to enemy attack patterns</li>
                <li>• Use skills and items wisely</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Advanced Techniques</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Learn combos and dodge timing</li>
                <li>• Collect and upgrade equipment</li>
                <li>• Explore hidden areas and secrets</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Game */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            ← Back to Game
          </Link>
        </div>
      </main>
    </div>
  );
}
