import React from "react";
import { IGameData } from "@/app/games/[slug]/interface/gameData.interface";

interface GameDetailsProps {
  gameData: Array<IGameData>;
}

export default function GameDetails({ gameData }: GameDetailsProps) {
  return (
    <>
      {/* <div className="flex flex-col items-center gap-y-8"> */}
        {/* The left box starts here */}
        <div className="flex flex-col gap-y-4 w-5/6 sm:w-[28rem]">
          <div className="flex flex-row w-full justify-between">
            <h1 className="text-3xl font-Single w-full text-orange">
              {gameData?.[0]?.title}
            </h1>
          </div>
          <p className="text-justify text-lg w-96 font-Single">
            {gameData?.[0]?.description}
          </p>
          <div className="flex gap-x-3">
            <div className="h-16 w-20 flex flex-col justify-center rounded-3xl bg-main-button-color text-center font-Single text-base sm:text-xl">
              {" "}
              {gameData?.[0]?.displayplayers} <br /> PLAYERS
            </div>
            <div className="h-16 w-20 flex flex-col justify-center rounded-3xl bg-main-button-color text-center font-Single text-base sm:text-xl">
              {" "}
              {gameData?.[0]?.age} <br /> AGE
            </div>
            <div className="h-16 w-20 flex flex-col justify-center rounded-3xl bg-main-button-color text-center font-Single text-base sm:text-xl">
              {" "}
              {gameData?.[0]?.minutes} <br /> MINS
            </div>
          </div>
          <div className="border-2 border-dashed w-[26rem] border-orange" />
          {gameData?.[0]?.contents?.map((game: any, index: number) => (
            <div key={index} className="flex flex-col gap-y-4">
              <h2 className=" relative left-10 font-Single text-orange text-2xl sm:text-3xl before:content-[''] before:absolute before:h-6 before:w-6 before:-left-10 before:top-1 before:bg-orange">
                {game.title}
              </h2>
              <div className="w-96 ml-7">
                {game.steps ? (
                  <ol className="flex flex-col gap-y-2 list-decimal">
                    {game?.steps?.map((rules: string, index: number) => (
                      <li
                        key={index}
                        className="text-justify text-lg font-Single"
                      >
                        {rules}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-justify text-lg font-Single">
                    {game?.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* The left box ends here */}
        <div className="w-full h-[45rem] flex justify-center">
          <iframe
            src={gameData?.[0]?.youtubeurl}
            loading="lazy"
            className="h-full w-full p-0"
            allow="autoplay; encrypted-media"
          />
        </div>
      {/* </div> */}
    </>
  );
}
