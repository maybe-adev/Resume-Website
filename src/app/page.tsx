"use client";

import React, { useState, useEffect } from "react";
import { Dock } from "@/components/dock/dock";
import { Background } from "@/components/hero-background/background";
import Preloader from "@/components/pre-loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleBuyMeACoffee = () => {
    window.open("/donate", "_self");
  };

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Background
            words={["Ayush Baral", "Web Developer", "Tech Nerd", "Learner"]}
          />
          <Dock />
          <button
            onClick={handleBuyMeACoffee}
            className="fixed z-10 bottom-5 right-5 bg-yellow-500 text-gray-900 w-10 h-10 rounded-full p-0 flex items-center justify-center shadow hover:bg-yellow-600 transition
             sm:w-auto sm:h-auto sm:rounded-lg sm:px-4 sm:py-2"
          >
            <span className="block sm:hidden">🍚</span>
            <span className="hidden sm:inline">🍚 Buy Me a Rosogolla</span>
          </button>
        </>
      )}
    </div>
  );
}
