import React from "react";
import Image from "next/image"

const Mainhead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
            <Image src="/assets/mtpp.png" width={800 / 3} height={800 / 3} alt="logo" />
        </div>
      <div className="p-12 font-bold z-10 text-black text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-4 text-4xl xl:text-5xl">PT Muara Toba Persada</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
            Konsultan & Manajemen Keuangan
        </h2>
      </div>
      <div className="flex-grow-0 pb-10 md:pb-10 transition-all duration-100 animate-bounce">
        <Image src="/assets/down-arrow.png" width={150 / 3} height={105 / 3}  alt="scroll down" />
      </div>
    </div>
  );
};

export default Mainhead;
