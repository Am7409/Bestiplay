"use client";
import GameCard from "@/components/games/GameCard";
import React, { useEffect } from "react";
import { IGameData } from "../games/[slug]/interface/gameData.interface";
import { useAppDispatch, useAppSelector } from "@/provider/hooks/hooks";
import { setGamedata } from "@/provider/slices/gameData.slice";
import Image from "next/image";
import { getAllGames } from "./actions";


export default function GameCards() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterData.selectedFilter);
  const playerFilter = useAppSelector(
    (state) => state.playerFilter.playerFilter
  );
  
  const games = useAppSelector((state) => state.gameData.game);

  useEffect(() => {
    async function gameData() {
      const { data } = await getAllGames(filters);
      dispatch(setGamedata(data as Array<IGameData>));
      // console.log(data);
    }
    gameData();
  }, [filters]);
   
 
  const applyFilters = () => {
    if (playerFilter === 0 && filters.length === 0) {
      return games;
    }

    const playerFilteredGames =
      playerFilter === 0
        ? games
        : games.filter((game) => game.players_max >= playerFilter);

    return playerFilteredGames;
  };


  const filteredGame = applyFilters();
  // console.log(filteredGame)
  return (
    <>
      {filteredGame.length === 0 ? (
        <div className="flex justify-center h-screen">
          <div className="flex flex-col gap-y-5">
            <div>
              <Image
                src="https://res.cloudinary.com/dotkmstum/image/upload/v1707065345/BestiesPlay/No%20results.png"
                alt="no results found image"
                height={0}
                width={500}
              />
            </div>
            <p className="text-3xl font-Marker text-center text-white">
              NO Results Found...
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredGame?.map((game: IGameData) => (
              <GameCard
                key={game.uuid}
                title={game.title}
                subTitle={game.subtitle}
                ytLink={game.youtubeurl}
                slug={game.slug}
                image={game.cdnimagewebp}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
