"use client";
import React from "react";
import InformationSlider from "../../../components/informationSlider/InformationSlider";
import { useAppSelector } from "@/provider/hooks/hooks";
import PLayersRange from "../../../components/playerRange/PLayersRange";
import { Button } from "@/components/ui/button";

interface HomePgeprops {
  setRange: (value: number) => void;
  setEndGame: (vlaue: boolean) => void;
  setPlayerChoosen: (vlaue: boolean) => void;
}
export default function HomePage({
  setRange,
  setEndGame,
  setPlayerChoosen,
}: HomePgeprops) {
  const games = useAppSelector((state) => state.gameData.game);
  const gameData = games.filter((game) => game.slug === "werewolf");
  return (
    <>
      <div className="flex flex-col h-screen gap-y-20 bg-main-color">
        <div className="mt-4 ml-2">
          <InformationSlider gameData={gameData} />
        </div>
        <div className="flex flex-col justify-center gap-y-5">
          <div className="flex text-5xl sm:text-8xl font-Marker justify-center mb-28 text-white">
            {/* {gameData?.[0]?.title.toUpperCase()} */}
            WEREWOLF
          </div>
          <div className="flex text-3xl sm:text-5xl font-Single justify-center text-white">
            HOW MANY PALYERS
          </div>
          <PLayersRange defalutValue={5} setCurrentValue={setRange} />
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              setEndGame(false);
              setPlayerChoosen(true);
            }}
            className="bg-white text-orange text-3xl font-Single w-60 h-10 rounded-full"
          >
            CONTINUE
          </Button>
        </div>
      </div>
    </>
  );
}
