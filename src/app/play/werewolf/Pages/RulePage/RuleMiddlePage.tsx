import { Button } from "@/components/ui/button";
import React from "react";

export default function RuleMiddlePage({
  setRulePage,
  setRuleMiddlePage,
}: {
  setRulePage: (value: boolean) => void;
  setRuleMiddlePage: (value: boolean) => void;
}) {
  return (
    <>
      <div className="flex flex-col h-screen gap-y-20 justify-center bg-main-color">
        <div className="flex flex-col justify-center gap-y-5">
          <div className="flex justify-center">
            <div className="flex text-5xl font-Marker justify-center w-4/5 mb-28 text-center text-white">
              EVERYBODY HAS BEEN ASSIGNED A ROLE. TAP THE BUTTON BELOW TO START
              THE GAME!
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              setRulePage(true);
              setRuleMiddlePage(false);
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
