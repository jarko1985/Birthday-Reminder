import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const handleReset = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>
          {people.length} Birthday{people.length > 1 ? "'s" : ""} Today
        </h3>
        <List people={people} />
        <button onClick={handleReset}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
