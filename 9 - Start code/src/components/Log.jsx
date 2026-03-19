import React from "react";

function Log({ logs }) {
  return (
    <section id="log" className="container">
      <h2>Battle Log</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <span className={log.isHero ? "log--player" : "log--monster"}>
              {log.isHero ? "Player" : "Monster"}
            </span>
            <span>
              {log.text.split(" ")[0]}{" "}
              <span className={log.isDamage ? "log--damage" : "log--heal"}>
                {log.text.split(" ").slice(1).join(" ")}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Log;
