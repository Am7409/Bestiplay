import { Skeleton } from "@/components/ui/skeleton";

const GamePageSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-4 overflow-x-hidden sm:gap-y-7">
      <div className="h-auto flex flex-col justify-center gap-y-2 mt-3">
        <div className="flex justify-center">
          <div className="absolute right-3 md:left-3 top-3">
            <Skeleton className=" h-8 w-8 rounded-full" />
          </div>
          <div className="relative left-4 sm:left-0 mt-4">
            <Skeleton className=" h-8 w-8 " />
          </div>
          <div className="">
            <Skeleton className=" h-8 w-[28rem]" />
          </div>
        </div>
        <div className="flex justify-center h-16">
          <Skeleton className=" h-16 w-16 " />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-8 lg:gap-x-20 lg:flex-row lg:justify-center">
        {/* Left Box Skeleton */}
        <div className="flex flex-col gap-y-4 w-5/6 sm:w-[28rem]">
          <div className="flex flex-row w-full justify-between">
            <Skeleton className=" h-8 w-40" />
            <Skeleton  className=" h-8 w-8 rounded-full"/>
          </div>
          <Skeleton className=" h-8 w-full"  />
          <Skeleton className=" h-8 w-"/>
          <div className="flex gap-x-3">
            {[1, 2, 3].map((_, index:any) => (
              <Skeleton key={index} className=" h-8 w-16" />
            ))}
          </div>
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              <Skeleton className=" h-8 w-40" />
              <div className="w-5/6 sm:w-[26rem] ml-7">
                <Skeleton className=" h-32 w-full"  />
              </div>
            </div>
          ))}
        </div>
        {/* Right Box Skeleton */}
        <div className="w-5/6 sm:w-[29rem] h-[45rem] flex justify-center">
          <Skeleton className=" h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default GamePageSkeleton;
