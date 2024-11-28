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
              <div className="text-center justify-center items-center">
                Gambar Kantor
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-center justify-center items-center tracking-tight">
                Ruangan Administrasi.
              </div>
            </WorkedLeft>
            <WorkedRight progress={progress}>
              <Image
                src="/assets/office/adm.png"
                width={840}
                height={1620}
                alt="Ruangan Adm"
              />
            </WorkedRight>
          </WorkedContainer>
        )}
      ></Tile>

      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkedContainer>
            <WorkedLeft progress={progress}>
              <div className="text-center justify-center items-center">
                Gambar Kantor
              </div>
              <div className="text-4xl md:text-5xl font-semibold text-center justify-center items-center tracking-tight">
                Ruangan Meeting 1.
              </div>
            </WorkedLeft>
            <WorkedRight progress={progress}>
              <Image
                src="/assets/office/meet1.png"
                width={840}
                height={1620}
                alt="Ruangan Meeting 1"
              />
            </WorkedRight>
          </WorkedContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
