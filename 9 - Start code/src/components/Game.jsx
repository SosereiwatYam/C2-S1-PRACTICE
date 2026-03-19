import React, { useState } from "react";
import Entity from "./Entity.jsx";
import Log from "./Log.jsx";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isHero: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isHero: true, 
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function clampHp(value) {
  return Math.max(0, Math.min(100, value));
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [heroHealth, setHeroHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [logs, setLogs] = useState([]);
  const [count, setCount] = useState(0);

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function Attack(){
    const heroDmg = getRandomValue(5,12);
    const monsterDmg = getRandomValue(5,12);

    setHeroHealth(prev => clampHp(prev - monsterDmg));
    setMonsterHealth(prev => clampHp(prev - heroDmg));

    setLogs(prev => [
      createLogAttack(true, heroDmg),
      createLogAttack(false, monsterDmg),
      ...prev,
    ]);
    setCount(prev => prev + 1);

  }
  function SpecialAttack(){
    const heroDmg = getRandomValue(10,25);
    const monsterDmg = getRandomValue(5,12);

    setHeroHealth(prev => clampHp(prev - monsterDmg));
      setMonsterHealth(prev => clampHp(prev - heroDmg));
      setLogs(prev => [
        createLogAttack(true, heroDmg),
        createLogAttack(false, monsterDmg),
        ...prev,
      ]);
      setCount(0);

  }
  function Heal(){
      const heroHeal = getRandomValue(8,15);
      const monsterDmg = getRandomValue(5,12);
      if (heroHealth == 100){
        return(
          setHeroHealth(prev => clampHp(prev - monsterDmg)),
          setLogs(prev => [
            createLogAttack(false, monsterDmg),
            ...prev
          ]),
          setCount(prev => prev + 1)
        )    
      }
      if (heroHealth + heroHeal > 100){
        setHeroHealth(100);
      } else {
        setHeroHealth(prev => clampHp(prev + heroHeal));
      }
      setHeroHealth(prev => clampHp(prev - monsterDmg));

      setLogs(prev => [
        createLogHeal(heroHeal),
        createLogAttack(false, monsterDmg),
        ...prev
      ])
      
      setCount(prev => prev + 1);
    }
  
  function killSelf(){
    setHeroHealth(0);
  }
  //----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function renderGameOver() {
    const winnerMessage =
      heroHealth <= 0 && monsterHealth <= 0
        ? "It's a draw!"
        : heroHealth <= 0
        ? "Monster has won!"
        : "Hero has won!";
    return (
      <section className="container">
        <h2>Game Over</h2>
        <h3>{winnerMessage}</h3>
        <button onClick={() => window.location.reload()}>New Game</button>
      </section>
    );
  }

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return <>
    <Entity label="Monster HP" health={monsterHealth} />
    <Entity label="Your HP" health={heroHealth} />

    {heroHealth > 0 && monsterHealth > 0 ? (
      <section id="controls" className="container">
        <button onClick={Attack}>ATTACK</button>
        <button disabled={count < 3} onClick={SpecialAttack}>SPECIAL !</button>
        <button onClick={Heal}>HEAL</button>
        <button onClick={killSelf}>KILL YOURSELF</button>
      </section>
    ) : (
      renderGameOver()
    )}

    <Log logs={logs} />
  </>;
}

export default Game;
