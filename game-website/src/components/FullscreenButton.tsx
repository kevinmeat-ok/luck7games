"use client";
import { useState, useEffect } from "react";
import type { FullscreenDocument, FullscreenElement } from "@/types/fullscreen";

interface FullscreenButtonProps {
  targetElementId: string;
  className?: string;
}

export default function FullscreenButton({ targetElementId, className = "" }: FullscreenButtonProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if browser supports fullscreen API
    const checkSupport = () => {
      const doc = document as FullscreenDocument;
      const isSupported = !!(
        document.fullscreenEnabled ||
        doc.webkitFullscreenEnabled ||
        doc.mozFullScreenEnabled ||
        doc.msFullscreenEnabled
      );
      setIsSupported(isSupported);
    };

    checkSupport();

    // Monitor fullscreen state changes
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

    // Add fullscreen change event listeners for various browsers
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

  const toggleFullscreen = async () => {
    if (!isSupported) {
      alert('Your browser does not support fullscreen mode');
      return;
    }

    const element = document.getElementById(targetElementId) as FullscreenElement;
    if (!element) {
      console.error(`Element with ID ${targetElementId} not found`);
      return;
    }

    try {
      if (isFullscreen) {
        // Exit fullscreen
        const doc = document as FullscreenDocument;
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          await doc.mozCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          await doc.msExitFullscreen();
        }
      } else {
        // Enter fullscreen
        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          await element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          await element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          await element.msRequestFullscreen();
        }
      }
    } catch (error) {
      console.error('Fullscreen operation failed:', error);
      alert('Fullscreen operation failed, please try again later');
    }
  };

  if (!isSupported) {
    return null; // Don't show button for browsers that don't support fullscreen
  }

  return (
    <button
      onClick={toggleFullscreen}
      className={`
        fullscreen-button flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all
        ${isFullscreen
          ? 'bg-red-600 hover:bg-red-700 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
        }
        ${className}
      `}
      title={isFullscreen ? 'Exit Fullscreen (Press ESC)' : 'Enter Fullscreen Mode'}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isFullscreen ? (
          // Exit fullscreen icon
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9V4.5M15 9h4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15v4.5M15 15h4.5M15 15l5.5 5.5"
          />
        ) : (
          // Enter fullscreen icon
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        )}
      </svg>
      <span className="hidden sm:inline">
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Game'}
      </span>
    </button>
  );
}
