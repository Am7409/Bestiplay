"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [value, setValue] = React.useState<Array<number>>(props?.min ? [props?.min] :[0]);
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
      onValueChange={(num:Array<number>)=> setValue(num)}
    >
      <SliderPrimitive.Track className="relative h-11 w-full grow overflow-hidden rounded-full bg-white">
        <SliderPrimitive.Range className="absolute h-full " />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-12 w-12 text-center rounded-full  bg-glowbg border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
        <div className={`mt-2 ${value[0] === 0 ? "text-xl" : "text-2xl"} font-Marker `}>
        {value[0] !== 0 ? value : "ALL"}
        </div>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
