import { Slider } from "@/components/ui/slider";
import React from "react";

interface PLayersRangeProps {
  defalutValue: number;
  setCurrentValue: (value: number) => void;
}
export default function PLayersRange({
  defalutValue,
  setCurrentValue,
}: PLayersRangeProps) {
  return (
    <>
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
            defaultValue={[5]}
            min={5}
            max={12}
            step={1}
            onValueCommit={(num: Array<number>) => setCurrentValue(num[0])}
          />
        </div>
      </div>
    </>
  );
}
