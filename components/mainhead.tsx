import React, { useRef, useState, useCallback, useContext } from "react";
import Image from "next/image";
import { ScrollContext } from "@/utils/scroll-observer";

const Mainhead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elcontainer } = refContainer
  if (elcontainer) {
    progress = Math.min(1, scrollY / elcontainer.clientHeight) 
  }

  return (
    <div ref={refContainer} className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10" style={{ transform: `translateY(-${progress * 20}vh)` }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/backgr.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/backgr.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className={`flex-grow-0 pt-10 z-10 transition-opacity duration-1000`}>
        <Image
          src="/assets/mtp.png"
          width={800 / 3}
          height={114 / 3}
          alt="logo"
        />
      </div>
      <div className="p-12 z-10 text-black text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-4 font-semibold text-4xl xl:text-5xl">
          Situs Resmi PT. Muara Toba Persada
        </h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          Solusi perusahaan layanan jasa penagihan terpercaya di Indonesia.
        </h2>
      </div>
      <div className="flex-grow-0 pb-10 md:pb-10 transition-all duration-100 animate-bounce">
        <Image
          src="/assets/down-arrow.png"
          width={110 / 3}
          height={105 / 3}
          alt="scroll down"
        />
      </div>
    </div>
  );
};

export default Mainhead;
