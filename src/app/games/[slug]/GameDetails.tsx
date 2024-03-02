"use client";

import ShareButton from "@/components/share/ShareButton";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import GamePageSkeleton from "./GamePageSkeleton";
import { useAppSelector } from "@/provider/hooks/hooks";

export default function GameDetails() {
  const router = useRouter();
  const { slug } = useParams();
  const games = useAppSelector((state) => state.gameData.game);
  const gameData = games.filter((game) => game.slug === slug);

  return (
    <>
      {!gameData.length ? (
        <GamePageSkeleton />
      ) : (
        <div className="flex flex-col gap-y-4 overflow-x-hidden sm:gap-y-7">
          <div className="h-auto flex flex-col justify-center gap-y-2 mt-3">
            <div className="flex justify-center">
              <div className="absolute right-3 md:left-3 top-3">
                <ShareButton />
              </div>
              <div className="relative left-4 sm:left-0 mt-4">
                <button onClick={() => router.back()}>
                  <svg
                    width="30"
                    height="20"
                    viewBox="0 0 25 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25 8.5C25 8.24955 24.9059 8.00937 24.7385 7.83227C24.5711 7.65518 24.344 7.55569 24.1072 7.55569H3.04962L8.6689 1.61408C8.75191 1.52628 8.81775 1.42205 8.86268 1.30733C8.9076 1.19262 8.93073 1.06967 8.93073 0.945505C8.93073 0.821339 8.9076 0.69839 8.86268 0.583676C8.81775 0.468962 8.75191 0.36473 8.6689 0.276932C8.58589 0.189133 8.48734 0.119488 8.37889 0.0719723C8.27043 0.0244563 8.15419 0 8.0368 0C7.9194 0 7.80316 0.0244563 7.69471 0.0719723C7.58625 0.119488 7.4877 0.189133 7.40469 0.276932L0.262294 7.83143C0.17915 7.91915 0.113185 8.02335 0.0681764 8.13808C0.0231678 8.2528 0 8.37579 0 8.5C0 8.62421 0.0231678 8.7472 0.0681764 8.86192C0.113185 8.97665 0.17915 9.08085 0.262294 9.16857L7.40469 16.7231C7.4877 16.8109 7.58625 16.8805 7.69471 16.928C7.80316 16.9755 7.9194 17 8.0368 17C8.15419 17 8.27043 16.9755 8.37889 16.928C8.48734 16.8805 8.58589 16.8109 8.6689 16.7231C8.75191 16.6353 8.81775 16.531 8.86268 16.4163C8.9076 16.3016 8.93073 16.1787 8.93073 16.0545C8.93073 15.9303 8.9076 15.8074 8.86268 15.6927C8.81775 15.578 8.75191 15.4737 8.6689 15.3859L3.04962 9.44431H24.1072C24.344 9.44431 24.5711 9.34482 24.7385 9.16773C24.9059 8.99064 25 8.75045 25 8.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="">
                <Image
                  src={gameData?.[0]?.cdnimagewebp}
                  alt=" "
                  height={0}
                  width={500}
                />
              </div>
            </div>
            <div className="flex justify-center h-16">
              <Link
                href={`/play/${gameData?.[0]?.slug}`}
                className="flex flex-col justify-center p-3 rounded-full text-white border-2 border-slate-950 bg-main-button-color font-Marker text-2xl sm:p-6 sm:text-4xl"
              >
                Let&apos;s Play
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-8 lg:gap-x-20 lg:flex-row lg:justify-center">
            {/* The left box starts here */}
            <div className="flex flex-col gap-y-4 w-5/6 sm:w-[28rem]">
              <div className="flex flex-row w-full justify-between">
                <h1 className="text-2xl sm:text-3xl font-Single text-orange">
                  {gameData?.[0]?.title}
                </h1>
                <button className="h-5 w-5 sm:h-6 sm:w-6">
                  <Image
                    src="https://res.cloudinary.com/dotkmstum/image/upload/v1706097257/BestiesPlay/bookmark.png"
                    alt="Bookmark"
                    width={40}
                    height={10}
                  />
                </button>
              </div>
              <p className="text-justify text-lg font-Single">
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
              <div className="border-2 border-dashed border-orange" />
              {gameData?.[0]?.contents?.map((game: any, index: number) => (
                <div key={index} className="flex flex-col gap-y-4">
                  <h2 className=" relative left-10 font-Single text-orange text-2xl sm:text-3xl before:content-[''] before:absolute before:h-6 before:w-6 before:-left-10 before:top-1 before:bg-orange">
                    {game.title}
                  </h2>
                  <div className="w-5/6 sm:w-[26rem] ml-7">
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
            <div className="w-5/6 sm:w-[29rem] h-[45rem] flex justify-center">
              <iframe
                src={gameData?.[0]?.youtubeurl}
                loading="lazy"
                className="h-full w-full p-0"
                allow="autoplay; encrypted-media"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
