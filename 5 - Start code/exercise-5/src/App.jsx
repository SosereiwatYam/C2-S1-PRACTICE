import Lecturer from "./components/Lecturer";
import { AVAILABLE_LECTURERS } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>
      <main>
        <section className="lecturer-category cards-view">
          <ul className="lecturers">
            {AVAILABLE_LECTURERS.map((lecturer) => (
              <Lecturer key={lecturer.id} lecturer={lecturer} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
