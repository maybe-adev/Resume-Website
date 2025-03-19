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
          <Background words={["Ayush Baral", "Web Developer", "Tech Nerd", "Learner"]} />
          <Dock />
            <button
            onClick={handleBuyMeACoffee}
            className="absolute bottom-5 right-5 bg-yellow-500 text-gray-900 px-4 py-2 rounded shadow hover:bg-yellow-600 transition"
            >
            🍚 Buy Me a Rosogolla
            </button>
        </>
      )}
    </div>
  );
}
