"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import GameDetails from "./GameDetails";
import useWindowSize from "@/hooks/useWindowSize";
import { IGameData } from "@/app/games/[slug]/interface/gameData.interface";

interface InformationSliderProps {
  gameData: Array<IGameData>;
}

export default function InformationSlider({
  gameData,
}: InformationSliderProps) {
  const width = useWindowSize();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="border-0 items-center align-middle rounded-full h-10 w-10"
          >
            <span className="text-5xl text-orange font-Single">i</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="rounded-tr-3xl overflow-auto" side={width < 768 ? "bottom" : "left"}>
            <GameDetails gameData={gameData} />
        </SheetContent>
      </Sheet>
    </>
  );
}
