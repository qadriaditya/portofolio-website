"use client";

import { useEffect, useRef, useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load preference dari localStorage
    const savedPreference = localStorage.getItem("musicEnabled");
    if (savedPreference === "false") {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted || !audioRef.current) return;

    const audio = audioRef.current;

    // Auto-play dengan fallback untuk browser yang memblokir autoplay
    const playAudio = () => {
      if (isPlaying) {
        audio.play().catch(() => {
          // Jika autoplay terblokir, tunggu user interaction
          console.log(
            "Autoplay terblokir. Musik akan dimainkan setelah user interaksi."
          );
        });
      }
    };

    // Coba autoplay saat component mount
    playAudio();

    // Juga coba saat user pertama kali berinteraksi
    const handleFirstInteraction = () => {
      if (isPlaying && audio.paused) {
        audio.play();
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [mounted, isPlaying]);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
        localStorage.setItem("musicEnabled", "true");
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        localStorage.setItem("musicEnabled", "false");
      }
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        volume={0.3}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/Backgroundmusic.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Toggle Button */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Toggle background music"
        title={isPlaying ? "Matikan musik" : "Nyalakan musik"}
      >
        {isPlaying ? (
          <SpeakerWaveIcon className="w-6 h-6" />
        ) : (
          <SpeakerXMarkIcon className="w-6 h-6" />
        )}
      </button>
    </>
  );
}
