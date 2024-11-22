import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkedBackground,
  WorkedContainer,
  WorkedLeft,
  WorkedRight,
} from "./worked";
import Image from "next/image";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkedBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkedContainer>
            <WorkedLeft progress={progress}>
              <div className="">Gambar Kantor</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
              </div>
            </WorkedLeft>
            <WorkedRight progress={progress}>
              <Image
                src="/assets/office/adm.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Ruangan Admin"
              />
            </WorkedRight>
          </WorkedContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkedContainer>
            <WorkedLeft progress={progress}>Fasilitas Kami</WorkedLeft>
          </WorkedContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
