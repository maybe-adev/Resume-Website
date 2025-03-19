"use client";

import React, { useState, useEffect } from "react";
import { Dock } from "@/components/dock/dock";
import { BackgroundLines } from "@/components/hero-background/background-lines";
import Preloader from "@/components/pre-loader";

const BuyMeACoffee: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
  
      return () => clearTimeout(timer);
    }, []);
  

    return (
      <div className="text-white">
        {isLoading ? (
          <Preloader />
        ) : (
    <div>
      <BackgroundLines className="w-full flex-col px-4 relative" >
    <div className="flex flex-col items-center justify-center min-h-screen text-center" id="background-lines-content">
      <h1 className="text-3xl font-bold mb-4 capitalize" id="buy-coffee-title">Buy Me a Rosogolla 🍚</h1>
      <p className="text-lg mb-6" id="support-text">
      You can support me by sending a contribution to my GPay ID:
      </p>
      <div className="p-4 rounded shadow-md" id="gpay-info">
        <p className="text-xl font-semibold">
          GPay ID: <span className="text-blue-500" id="gpay-id">ayushbaral010-1@oksbi</span>
        </p>
        {/* <div className="mt-4">
          <img
        src="/path-to-your-qr-code.png"
        alt="GPay QR Code"
        className="w-40 h-40 mx-auto"
        id="gpay-qr-code"
          />
        </div> */}
      </div>
    </div>
    </BackgroundLines>
    <Dock />
    </div>
        )}
      </div>
  );
};

export default BuyMeACoffee;