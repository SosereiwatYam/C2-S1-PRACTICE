import { Header } from "./Header";
import { Score } from "./Score";
import { HTML_RESULTS, PYTHON_RESULTS, JAVA_RESULTS, ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="Franklin" />

      <main className="scores-container">
        <Score courseName="HTML" courseResults={HTML_RESULTS}></Score>
        <Score courseName="Python" courseResults={PYTHON_RESULTS}></Score>
        <Score courseName="Java" courseResults={JAVA_RESULTS}></Score>
        <Score courseName="English" courseResults={ENGLISH_RESULTS}></Score>
      </main>
    </>
  );
}

export default App;
