'use client';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

export default function Hero() {
  // gsap animtain
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 2,
    });

    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  const firstVideo = () => {
    if (window.innerWidth < 760) {
      return '/assets/videos/smallHero.mp4';
    }

    return '/assets/videos/hero.mp4';
  };

  // states

  const [videoSrc, setVideoSrc] = useState(firstVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc('/assets/videos/smallHero.mp4');
    } else {
      setVideoSrc('/assets/videos/hero.mp4');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p
          id="hero"
          className="hero-title"
        >
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source
              src={videoSrc}
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div
        className="flex flex-col items-center opacity-0 translate-y-20"
        id="cta"
      >
        <Link
          href="#highlights"
          className="btn"
        >
          Buy
        </Link>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}
