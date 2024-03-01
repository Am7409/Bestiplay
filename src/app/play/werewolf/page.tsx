"use client";
import React, { useState } from "react";
import HomePage from "./Pages/HomePge/HomePage";
import PlayerChoosePage from "./Pages/PlayerChoosePage/PlayerChoosePage";
import RuleMiddlePage from "./Pages/RulePage/RuleMiddlePage";
import RulePage from "./Pages/RulePage/RulePage";

export default function WereWolf() {
  const [range, setRange] = useState(5);
  const [playerChoosen, setPlayerChoosen] = useState(false);
  const [endGame, setEndGame] = useState(true);
  const [rulePage, setRulePage] = useState(false);
  const [ruleMiddlePage, setRuleMiddlePage] = useState(false);
  return (
    <>
      {endGame ? (
        <HomePage
          setRange={setRange}
          setEndGame={setEndGame}
          setPlayerChoosen={setPlayerChoosen}
        />
      ) : (
        <></>
      )}
      {playerChoosen ? (
        <>
          <PlayerChoosePage
            players={range}
            setPlayerChoosen={setPlayerChoosen}
            setRuleMiddlePage={setRuleMiddlePage}
          />
        </>
      ) : (
        <></>
      )}
      {ruleMiddlePage ? (
        <RuleMiddlePage
          setRulePage={setRulePage}
          setRuleMiddlePage={setRuleMiddlePage}
        />
      ) : (
        <></>
      )}
      {rulePage ? (
        <RulePage setEndGame={setEndGame} setRulePage={setRulePage} />
      ) : (
        <></>
      )}
    </>
  );
}
