"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="progress-track sticky top-4 z-30 mx-auto mb-6 h-1.5 max-w-4xl overflow-hidden rounded-full"
    >
      <div
        className="progress-fill h-full rounded-full transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
