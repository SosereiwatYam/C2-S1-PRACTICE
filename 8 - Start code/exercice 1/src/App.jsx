import React from "react";

export default function App() {
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${value * 10}%`;

    // 2- Compute color (optional)
    let scoreColor = `#${value >= 5 ? "4caf50": "f44336"}`;

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={value} onChange={(e) => setValue(Number(e.target.value))} />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
