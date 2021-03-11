import "tailwindcss/tailwind.css"
import { FontListItem } from './components/FontListItem';
import "./styles/main.css"

function App() {
  return (
    <div className="App">
      <h1 className="text-6xl" >Font Compare Company</h1>
      <FontListItem />
    </div>
  );
}

export default App;
