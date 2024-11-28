import React from "react";
import ClientLogos from "./client-logos";

const TrustedBy: React.FC = () => (
  <section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32">
    <div className="flex-1"></div>
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl mb-10 font-bold text-center">
        <span className="whitespace-nowrap">Sudah dipercaya</span>{" "}
        <span className="whitespace-nowrap">oleh sebagian besar Bank BUMN di Indonesia</span>
      </h3>
      <ClientLogos />
    </div>
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto lg:max-w-[70%] lg:px-10">
        <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">Kami percaya pada komunikasi yang baik dan proses yang sepenuhnya transparan.</h3>
      </div>
    </div>
    <div className="">Menurut Mitra Kerja kami</div>
    <div className="flex-1"></div>
  </section>
);

export default TrustedBy;
