import { Suspense } from "react";
import GameCards from "./home/GameCards";
import Filters from "./home/filters/Filter.component";

export default function Home() {
  return (
    <>
      {/* <FilterData func={func} /> */}
      <div className=" bg-main-color flex gap-y-4 flex-col">
        <div className="flex justify-center">
          <div className="">
            <div></div>
            <div className=" h-auto flex justify-center items-center">
              <p className="font-flood text-3xl sm:text-5xl md:text-7xl text-white">
                UNLEASH THE THRILL!
              </p>
              {/* <Image
                src={
                  "https://res.cloudinary.com/dotkmstum/image/upload/v1707236244/BestiesPlay/tag_line.png"
                }
                alt="Tag Line"
                fill
              /> */}
            </div>
          </div>
        </div>
        <div className="border-2 border-dashed border-white" />
        <Suspense fallback={<p className="text-8xl">loading...</p>}>
          <Filters />
        </Suspense>
        <div className="border-2 border-dashed border-white" />
        <GameCards />
      </div>
    </>
  );
}
