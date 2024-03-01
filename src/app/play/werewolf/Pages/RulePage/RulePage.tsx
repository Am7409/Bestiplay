import { Button } from "@/components/ui/button";
import React from "react";

export default function RulePage({
  setEndGame,
  setRulePage,
}: {
  setEndGame: (value: boolean) => void;
  setRulePage: (value: boolean) => void;
}) {
  return (
    <>
      <div className="flex flex-col sm:h-screen bg-main-color gap-y-4 overflow-x-hidden">
        <div className="flex flex-col justify-center gap-y-4 mt-7">
          <div className="flex justify-center text-center text-4xl text-white font-Marker">
            REFERENCE RULES FOR THE GAME HOST
          </div>
          <div className="flex justify-center">
            <Button
              className=" rounded-full p-6 text-2xl font-Single bg-white text-orange hover:bg-amber-300"
              onClick={() => {
                setEndGame(true);
                setRulePage(false);
              }}
            >
              END GAME
            </Button>
          </div>
        </div>
        <div className="w-11/12 ml-10">
          <ol className="flex flex-col list-decimal text-white gap-y-4">
            <li className="text-xl font-medium">
              Start the Game:
              <ul className="flex flex-col list-disc text-base ml-4">
                <li>
                  Instruct everyone to "go to sleep" by closing their eyes or
                  putting their heads down.
                </li>
              </ul>
            </li>
            <li className="text-xl font-medium">
              Night Phase:
              <ul className="flex flex-col list-disc text-base ml-4">
                <li>
                  Call on the Werewolves to "wake up" and silently decide on a
                  player to eliminate. Ensure they agree silently to avoid
                  revealing their identities. Then ask the Werewolves to "go
                  back to sleep."
                </li>
                <li>
                  Now, ask the Seer to open their eyes and point to a player
                  they suspect could be a Werewolf. Respond with a thumbs up if
                  they are correct, or a thumbs down if they are incorrect.
                  Then, ask the Seer to "go back to sleep."
                </li>
                <li>
                  Next, ask the Healer to wake up and point to one player they
                  wish to save for the night. Ensure the Healers’s choice is
                  noted without verbal confirmation, then ask the Healer to "go
                  back to sleep."
                </li>
              </ul>
            </li>
            <li className="text-xl font-medium">
              Day Phase:
              <ul className="flex flex-col list-disc text-base ml-4">
                <li>Instruct everyone to "wake up."</li>
                <li>
                  Announce the outcome of the night. If the Healer saved the
                  Werewolve's target, state that everyone survived the night. If
                  the Werewolve's target was not saved, reveal that the targeted
                  player has been eliminated and instruct them to reveal their
                  role. They can no longer participate in discussions or votes
                  but are welcome to watch silently.
                </li>
              </ul>
            </li>
            <li className="text-xl font-medium">
              Discussion Phase:
              <ul className="flex flex-col list-disc text-base ml-4">
                <li>
                  Facilitate an open discussion among the players about their
                  suspicions and thoughts on who might be a Werewolf.
                </li>
                <li>
                  Remind players to base their discussions solely on information
                  from the current game.
                </li>
                <li>
                  As the facilitator, ensure the discussion remains respectful,
                  prevent it from becoming heated or personal, and give each
                  player an opportunity to speak.
                </li>
              </ul>
            </li>
            <li className="text-xl font-medium">
              Voting Phase:
              <ul className="flex flex-col list-disc text-base ml-4">
                <li>
                  After the discussion, conduct a vote. Ask each player in turn
                  to cast their vote on who they suspect is a Werewolf. Remind
                  them that they cannot vote for themselves.
                </li>
                <li>
                  The player with the most votes is chosen for elimination and
                  is out of the game. In case of a tie, you can conduct a second
                  vote, or decide that no one is eliminated this round.
                </li>
                <li>
                  Following the vote, ask everyone to "go to sleep," signifying
                  the start of the next Night Phase.
                </li>
              </ul>
            </li>
            <li className="text-xl font-medium">
              Repeat Steps 2-5:
              <ul className="flex flex-col list-disc text-base ml-4">
                <li>
                  Continue the game by alternating between Night and Day Phases,
                  ensuring discussions and votes are held during each Day Phase.
                </li>
              </ul>
            </li>
            <li className="text-xl font-medium">
              End of the Game:
              <ul className="flex flex-col list-disc text-base ml-4">
                <li>
                  The game concludes when either all Werewolves have been
                  eliminated, resulting in a victory for the non-Werewolf
                  players, or the number of Werewolves equals the number of
                  non-Werewolf players, resulting in a Werewolf victory.
                </li>
                <li>
                  Announce the outcome of the game and reveal the roles of all
                  players, facilitating a discussion on strategies and key
                  moments from the game.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
