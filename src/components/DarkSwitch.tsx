"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ceraphina-border bg-white text-ceraphina-cactus transition hover:bg-ceraphina-accentGreenSoft hover:text-ceraphina-purple focus:outline-none focus:ring-2 focus:ring-ceraphina-accentGreen focus:ring-offset-2 dark:border-ceraphina-cactus dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Light mode" : "Dark mode"}
      >
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2" />
            <path d="M12 21v2" />
            <path d="M4.22 4.22l1.42 1.42" />
            <path d="M18.36 18.36l1.42 1.42" />
            <path d="M1 12h2" />
            <path d="M21 12h2" />
            <path d="M4.22 19.78l1.42-1.42" />
            <path d="M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 12.79A9 9 0 0 1 11.21 3c0-.2.01-.39.02-.58A1 1 0 0 0 9.8 1.4a11 11 0 1 0 12.8 12.8 1 1 0 0 0-1.02-1.41c-.19.01-.38.02-.58.02Z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeChanger;