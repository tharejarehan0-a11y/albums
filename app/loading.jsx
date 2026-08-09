"use client";
import { useState, useEffect } from "react";

export default function Website() {
  // 1. Create state to track if the site is loading
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // 2. Fetch your data inside a useEffect
    const fetchWebsiteData = async () => {
      try {
        // Simulating a 3-second delay so you can see the loading screen.
        // Replace this with your actual database or API fetch calls!
        await new Promise((resolve) => setTimeout(resolve, 3000));
        
        setData("All data successfully pulled!");
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        // 3. This runs after the fetch finishes, whether it succeeds or fails
        setIsLoading(false); 
      }
    };

    fetchWebsiteData();
  }, []);

  // 4. If isLoading is true, ONLY render the Loading Screen
  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-950">
        {/* Animated Tailwind Spinner */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
        <p className="mt-6 font-mono text-xl tracking-[0.3em] text-white">LOADING</p>
      </div>
    );
  }

  // 5. If isLoading is false, render your actual website content
  return (
    <div className="min-h-screen bg-zinc-900 p-10 text-white">
      <h1 className="text-5xl font-bold">Welcome to the actual site!</h1>
      <p className="mt-4 text-xl">{data}</p>
      {/* Put your <Nav />, <AniImage />, and GSAP components here */}
    </div>
  );
}