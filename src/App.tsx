import './App.css'
import {usePokemonCount} from "./hooks/usePokemonCount";

function App() {
  const count = usePokemonCount()

  return (
    <div className="App">
      <h1>Se proprio devi sapere quanti pokemon esistono</h1>
      <div className="card">
        Esistono {count} pokemon attualmente
      </div>
    </div>
  )
}

export default App
