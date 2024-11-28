import React from "react";
import Image from "next/image";
import SliderContainer from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <Image
        src="/assets/trust/BRI.png"
        width={150}
        height={50}
        alt="BRI"  
        objectFit="contain"
      />
    </SliderContainer>
  </>
);

export default ClientLogos
