"use client";
import { useEffect, useState } from "react";
import { PersonIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { shuffle } from "../../utils/shuffleFunction";
import { Card } from "@/components/ui/card";

const playerCardsMapping: Record<number, Array<string>> = {
  5: ["WEREWOLF1", "HEALER", "SEER", "VILLAGERS1", "VILLAGERS2"],
  6: ["WEREWOLF1", "HEALER", "SEER", "VILLAGERS1", "VILLAGERS2", "VILLAGERS3"],
  7: [
    "WEREWOLF1",
    "HEALER",
    "SEER",
    "VILLAGERS1",
    "WEREWOLF2",
    "VILLAGERS2",
    "VILLAGERS3",
  ],
  8: [
    "WEREWOLF1",
    "HEALER",
    "SEER",
    "VILLAGERS1",
    "WEREWOLF2",
    "VILLAGERS2",
    "VILLAGERS3",
    "VILLAGERS4",
  ],
  9: [
    "WEREWOLF1",
    "HEALER",
    "SEER",
    "VILLAGERS1",
    "WEREWOLF2",
    "VILLAGERS2",
    "VILLAGERS3",
    "WEREWOLF3",
    "VILLAGERS4",
  ],
  10: [
    "WEREWOLF1",
    "HEALER",
    "SEER",
    "VILLAGERS1",
    "WEREWOLF2",
    "VILLAGERS2",
    "VILLAGERS3",
    "WEREWOLF3",
    "VILLAGERS4",
    "VILLAGERS5",
  ],
  11: [
    "WEREWOLF1",
    "HEALER",
    "SEER",
    "VILLAGERS1",
    "WEREWOLF2",
    "VILLAGERS2",
    "VILLAGERS3",
    "WEREWOLF3",
    "VILLAGERS4",
    "VILLAGERS5",
    "VILLAGERS6",
  ],
  12: [
    "WEREWOLF1",
    "HEALER",
    "SEER",
    "VILLAGERS1",
    "WEREWOLF2",
    "VILLAGERS2",
    "VILLAGERS3",
    "WEREWOLF3",
    "WEREWOLF4",
    "VILLAGERS4",
    "VILLAGERS5",
    "VILLAGERS6",
  ],
};

export default function PlayerChoosePage({
  players = 5,
  setPlayerChoosen,
  setRuleMiddlePage
}: {
  players?: number;
  setPlayerChoosen:(value:boolean)=> void;
  setRuleMiddlePage:(value:boolean)=>void;
}) {
  const [open, setOpen] = useState(false);
  const [player, setPlayer] = useState<string>("");
  const [selectedPlayer, setSelectedPlayer] = useState<Array<string>>([]);
  const [showModal, setShowModal] = useState<Array<string>>([]);
  const [playersCard, setPlayersCard] = useState<Array<string>>([]);
  const [showHandPhone, setShowHandPhone] = useState(false);

  const handlePlayer = (filter: string) => {
    setSelectedPlayer((prevFilters) => {
      if (!prevFilters.includes(filter)) {
        return [...prevFilters, filter];
      }
      return prevFilters;
    });
  };

  useEffect(() => {
    setPlayersCard(shuffle(playerCardsMapping[players]));
  }, [players]);

  function handlePhone() {
    setTimeout(() => {
      setShowHandPhone(false);
    }, 2000);
  }
 
  if(showModal.length === players){
    setPlayerChoosen(false);
    setRuleMiddlePage(true);
  }
  
  return (
    <>
      <div className="flex flex-col h-screen gap-y-10 bg-red-500">
        <div className="flex justify-center text:5xl sm:text-7xl font-Marker">
          Heading
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-center text-2xl sm:text-4xl text-white font-Single">
            <ol className="list-decimal">
              <li>HIDE YOUR SCREEN</li>
              <li>PICK A CARD</li>
            </ol>
          </div>
          <div className="flex justify-center bg-blue-600">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {playersCard.map((player) => (
                <Card
                  key={player}
                  className="w-96 h-auto py-8 flex  justify-center cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setPlayer(player);
                    handlePlayer(player);
                  }}
                >
                  {!selectedPlayer.includes(player) ? (
                    <p className="text-7xl text-orange font-Single">?</p>
                  ) : (
                    <PersonIcon width={120} height={80} />
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="w-96 h-60 flex flex-col gap-y-6 justify-center"
          onShowClose={false}
        >
          <DialogHeader>
            {!showModal.includes(player) ? (
              <>
                {" "}
                <div className="flex justify-center">you are a</div>
                <DialogTitle className=" flex justify-center font-Marker text-4xl">
                  {player.replace(/\d+$/, "")}
                </DialogTitle>
              </>
            ) : (
              <div className="flex justify-center">
                <p className=" font-semibold text-center">
                  This card has already been taken, please choose a card with a{" "}
                  <b className=" font-black text-orange">"?"</b> on it.
                </p>
              </div>
            )}
          </DialogHeader>
          <Button
            className=" text-white text-2xl font-Single bg-main-button-color rounded-full hover:bg-[#ff6e68]"
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              setShowHandPhone(true);
              handlePhone();
              setShowModal((prevValue) =>
                !showModal.includes(player)
                  ? [...prevValue, player]
                  : [...prevValue]
              );
            }}
          >
            {!showModal.includes(player) ? "I WILL REMEMBER THIS" : "OK"}
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog open={showHandPhone} onOpenChange={setShowHandPhone}>
        <DialogContent
          className="w-96 h-60 flex flex-col gap-y-6 justify-center"
          onShowClose={false}
        >
          <DialogHeader>
            <DialogTitle className=" flex justify-center font-Marker text-4xl">
              HAND THIS PHONE TO THE NEXT PLAYER
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
