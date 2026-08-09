"use client";
import Nav from "@/components/Nav";
import Image from "next/image";
import Albumimg from "@/components/Albumimg";
import { useState, useEffect, useRef } from "react";

const albums = [
  "/tellme.jpeg",         
  "/c walk.jpeg",          
  "/courtside.jpeg",      
  "/making memories.jpeg", 
  "/I Really Do.jpeg"     
];

const songs = [
  "tellme/Tellme.mp3",
  "/cwalk/Cwalk.mp3",
  "/courtside/Courtside.mp3",
  "/makingmemories/Bachkebachke.mp3",
  "/ireallydo/Ireallydo.mp3"
];

const colors = [
  "bg-blue-500",
  "bg-gray-500",
  "bg-black",
  "bg-purple-600",
  "bg-orange-800"
];

const assets = [
  ['/vinyl_blue.png','/cwalk/black_disc.png','/courtside/disc_vinyl.png','/makingmemories/disc.png','/ireallydo/disc.png'],
  ['/strip.png','/cwalk/black_strips.png','/courtside/stripi.png','/makingmemories/strips.jpeg','/ireallydo/strips.png'],
  ['/tellme/cat.png','/cwalk/black_cat.png','/courtside/miniature.png','/makingmemories/butterfly.png','/ireallydo/birds.png'],
  ['/tellme/drum.png','/cwalk/guitars.png','/courtside/shinyball.png','/makingmemories/casette.png','/ireallydo/cat.png'],
  ['/tellme/drumsticks.png','/cwalk/black_headphones.png','/courtside/shinybutterfly.png','/makingmemories/cat.png','/ireallydo/clocks.png'],
  ['/tellme/guitar.png','/cwalk/black_mic.png','/courtside/shinytoy.png','/makingmemories/dragon.png','/ireallydo/fishes.png'],
  ['/tellme/music_note.png','/cwalk/black_mona.png','/courtside/shinyheart.png','/makingmemories/headphones.png','/ireallydo/flowerbuquet.png'],
  ['/tellme/musical.png','/cwalk/shiny_ball.png','/courtside/softtoy.png','/makingmemories/heart.png','/ireallydo/flowers.png'],
  ['/tellme/piano.png','/cwalk/shiny_stars.png','/courtside/filmer.png','/makingmemories/skull.png','/ireallydo/hearit.png'],
  ['/tellme/rockstar.png','/cwalk/blobu.png','/courtside/headphones.png','/makingmemories/snoopdog.png','/ireallydo/clock.png'],
  ['/tellme/casette.png','/cwalk/cutu.png','/courtside/camera.png','','/makingmemories/star.png','/ireallydo/camera.png']
];

export default function Home() {
  const [coverIndex, setCoverIndex] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef(null);
  
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(songs[songIndex]);
    } else {
      audioRef.current.src = songs[songIndex];
    }

    if (isPlaying) {
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [songIndex, isPlaying]); 

  const handleNextPoster = () => {
    setCoverIndex((prevIndex) => (prevIndex + 1) % albums.length);
    setSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePlayClick = () => {
    if (!isPlaying && audioRef.current) {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const handlePauseDoubleClick = () => {
    if (isPlaying && audioRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  return (
    <main className={`relative min-h-screen w-full transition-colors duration-500 ease-in-out ${colors[songIndex]}`}>
      
      <div className="absolute top-0">
        <div className="flex justify-start self-start place-self-start">
          {/* Your strip images */}
          {Array.from({ length: 13 }).map((_, i) => (
             <Image key={i} src={assets[1][songIndex]} height="200" width="200" alt="strip" loading='eager' className="h-auto w-auto rotate-90 mt-15" />
          ))}
        </div>
      </div>
      
      <Nav />
      
      <div className={`absolute ${isPlaying ? "dance" : ""}`}>
        <Image src={assets[2][songIndex]} height="200" width="200" alt='casette' loading="eager" className="w-auto h-auto rotate-20 z-0" />
      </div>
      <div className={`absolute top-50 ${isPlaying ? "dance-opposite" : ""}`}>
        <Image src={assets[3][songIndex]} height="200" width="200" alt='casette' loading="eager" className="w-auto h-auto rotate-20 z-0" />
      </div>
      <div className={`absolute top-110 ${isPlaying ? "dance" : ""}`}>
        <Image src={assets[4][songIndex]} height="200" width="200" alt='casette' loading="eager" className="w-auto h-auto rotate-20 z-0" />
      </div>
      <div className={`absolute top-170 ${isPlaying ? "dance-opposite" : ""}`}>
        <Image src={assets[5][songIndex]} height="200" width="200" alt='casette' loading="eager" className="w-auto h-auto rotate-20 z-0" />
      </div>
      <div className={`absolute right-0 ${isPlaying ? "dance-opposite" : ""}`}>
        <Image src={assets[6][songIndex]} height="200" width="200" alt="piano" loading="eager" className="w-auto h-auto rotate-30 z-0" />
      </div>
      <div className={`absolute right-0 top-120 ${isPlaying ? "dance" : ""}`}>
        <Image src={assets[7][songIndex]} height="200" width="200" alt="piano" loading="eager" className="w-auto h-auto rotate-30 z-0" />
      </div>
      <div className={`absolute right-0 top-70 ${isPlaying ? "dance-opposite" : ""}`}>
        <Image src={assets[8][songIndex]} height="200" width="200" alt="piano" loading="eager" className="w-auto h-auto rotate-30 z-0" />
      </div>
      <div className={`absolute right-0 top-160 ${isPlaying ? "dance" : ""}`}>
        <Image src={assets[9][songIndex]} height="200" width="200" alt="piano" loading="eager" className="w-auto h-auto rotate-30 z-0" />
      </div>

      <div className="flex justify-around mt-65">
        <div className="flex justify-center-items-center cursor-pointer" onClick={handleNextPoster}>
          <Albumimg src={albums[coverIndex]} num={coverIndex + 1} />
        </div>

        <div 
          className={`flex cursor-pointer ${isPlaying ? "stop" : ""}`} 
          onClick={handlePlayClick} 
          onDoubleClick={handlePauseDoubleClick}
        >
          <Image src={assets[0][songIndex]} height="200" width="500" alt="vinylblue" loading="eager" className="z-1" />
        </div>
      </div>

      <div className="flex justify-evenly items-center p-20 mt-10 text-4xl bebas text-white text">
        Click on the disc to play and double click to stop <br />
        Click on the poster to play next
      </div>

    </main>
  );
}