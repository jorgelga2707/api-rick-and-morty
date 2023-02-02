import { useState } from "react";
import { CharacterList } from "./components/CharacterList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="app">
      <h1>Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
