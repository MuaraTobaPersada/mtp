import React from "react";
import Image from "next/image";

const Mainhead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">

        <source src=""/>

        <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
          <Image
            src="/assets/ptmtplogo.png"
            width={800 / 3}
            height={800 / 3}
            alt="logo"
          />
        </div>
      </video>
      <div className="p-12 font-bold z-10 text-black text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-4 text-4xl xl:text-5xl">
          Selamat datang di Situs Resmi PT MTP
        </h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          Kami adalah solusi agency layanan penagihan terpercaya di Indonesia.
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
