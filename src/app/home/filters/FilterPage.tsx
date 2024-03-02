"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useAppDispatch, useAppSelector } from "@/provider/hooks/hooks";
import { setFilters } from "@/provider/slices/gameFilter.slice";
import { setPlayerFilter } from "@/provider/slices/playerFilter.slice";
import { setSelectedFilter } from "@/provider/slices/selectedFilter.slice";
import { useEffect, useState } from "react";
import { getAllFilters } from "../actions";

export default function FilterPage() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.gameFilter.filters);
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([]);

  const handleFilters = (filter: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((el) => el !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  useEffect(() => {
    function putFilterData() {
      dispatch(setSelectedFilter(selectedFilters));
    }
    putFilterData();
  }, [selectedFilters, dispatch]);

  useEffect(() => {
    async function allFilters() {
      const { data } = await getAllFilters();
      dispatch(setFilters(data?.[0].filtersOrder));
    }
    allFilters();
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center gap-x-3">
          <div className="flex flex-col justify-center">
            <svg
              className="w-12 h-12 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
            <p className="text-white">Players</p>
          </div>
          <div className="w-96 flex justify-center">
            <Slider
              defaultValue={[0]}
              max={12}
              step={1}
              onValueCommit={(num: Array<number>) =>
                dispatch(setPlayerFilter(num[0]))
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="w-96 sm:w-[30rem] h-auto  flex flex-wrap p-3 gap-x-2 gap-y-4">
            {filters?.map((filter: string) => (
              <Button
                key={filter}
                className={`p-[6px] rounded-lg bg-main-button-color flex-grow text-center text-2xl text-white font-Marker  
                ${
                  selectedFilters?.includes(filter)
                    ? "bg-glowbg"
                    : "bg-main-button-color"
                } `}
                onClick={(e) => {
                  e.preventDefault();
                  handleFilters(filter);
                }}
              >
                {filter.toUpperCase()}
              </Button>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}
