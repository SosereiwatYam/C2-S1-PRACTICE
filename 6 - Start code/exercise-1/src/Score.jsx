export const Score = ({ courseName, courseResults }) => {
  const scores = courseResults.map((student) => student.score);
  const minScore = scores.length ? Math.min(...scores) : 0;
  const maxScore = scores.length ? Math.max(...scores) : 0;
  const averageScore = scores.length? (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(1) : "0.0";

  return (
    <div className="scores">
      <h1>{courseName}</h1>   

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((student, index) => (
            <tr key={`${student.firstName}-${student.lastName}-${index}`}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td className={student.score < 50 ? "warning" : ""}>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="score-stats">
        <p>
          <span>Average:</span> {averageScore}
        </p>
        <p>
          <span>Min:</span> {minScore}
        </p>
        <p>
          <span>Max:</span> {maxScore}
        </p>
      </div>
    </div>
  );
};
