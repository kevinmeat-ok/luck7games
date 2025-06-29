// TypeScript type definitions for Fullscreen API
// Extend Document interface to add browser-prefixed fullscreen APIs
declare global {
  interface Document {
    // Browser-prefixed fullscreen capability detection
    webkitFullscreenEnabled?: boolean;
    mozFullScreenEnabled?: boolean;
    msFullscreenEnabled?: boolean;

    // Browser-prefixed current fullscreen element
    webkitFullscreenElement?: Element | null;
    mozFullScreenElement?: Element | null;
    msFullscreenElement?: Element | null;

    // Browser-prefixed exit fullscreen methods
    webkitExitFullscreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
  }

  interface Element {
    // Browser-prefixed request fullscreen methods
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }
}

// Export type aliases for convenience
export type FullscreenDocument = Document;
export type FullscreenElement = Element;
